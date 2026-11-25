// Encrypts every single-file page in vault-src/ (plaintext, gitignored) into public/<PUBLIC_NAME>/
// with one shared password, plus an encrypted index page listing them.
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const SRC_DIR = path.join(ROOT, "vault-src");
// Hidden URL path; never list it in robots.txt or site navigation.
const PUBLIC_NAME = "atelier";
// Stage dir carries PUBLIC_NAME because StatiCrypt keeps the input dir name: <stage>/<name> -> public/<name>.
const STAGE_ROOT = path.join(ROOT, ".vault-build");
const STAGE_DIR = path.join(STAGE_ROOT, PUBLIC_NAME);
const OUT_DIR = path.join(ROOT, "public", PUBLIC_NAME);
const PASSWORD_FILE = path.join(ROOT, ".vault-password");
const IGNORED = new Set([".DS_Store"]);

/**
 * Env var wins so CI or one-off runs never need the local file.
 */
function readPassword() {
  if (process.env.VAULT_PASSWORD) return process.env.VAULT_PASSWORD;
  if (fs.existsSync(PASSWORD_FILE)) return fs.readFileSync(PASSWORD_FILE, "utf8").trim();
  throw new Error(`No password: set VAULT_PASSWORD or write it to ${PASSWORD_FILE}`);
}

/**
 * Only standalone .html files are allowed: StatiCrypt encrypts HTML only, so any
 * sidecar asset (image, js, css) would be published in plaintext.
 */
function collectPages() {
  if (!fs.existsSync(SRC_DIR)) throw new Error(`Missing source dir: ${SRC_DIR}`);
  const entries = fs.readdirSync(SRC_DIR, { withFileTypes: true }).filter((e) => !IGNORED.has(e.name));
  const invalid = entries.filter((e) => !e.isFile() || !e.name.endsWith(".html"));
  if (invalid.length) {
    throw new Error(`vault-src/ must contain only single-file .html pages; found: ${invalid.map((e) => e.name).join(", ")}`);
  }
  const pages = entries.map((e) => {
    const slug = e.name.slice(0, -".html".length);
    if (!/^[a-z0-9][a-z0-9-]*$/.test(slug)) throw new Error(`Invalid slug "${slug}": use lowercase letters, digits and dashes`);
    const html = fs.readFileSync(path.join(SRC_DIR, e.name), "utf8");
    const title = html.match(/<title[^>]*>([^<]*)<\/title>/i)?.[1].trim() || slug;
    return { slug, title, html, mtime: fs.statSync(path.join(SRC_DIR, e.name)).mtime };
  });
  return pages.sort((a, b) => b.mtime - a.mtime);
}

/**
 * The index is encrypted like every other page, so the list of titles stays private too.
 */
function renderIndex(pages) {
  const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const items = pages
    .map((p) => `<li><a href="./${p.slug}/">${esc(p.title)}</a><span>${p.mtime.toISOString().slice(0, 10)}</span></li>`)
    .join("\n      ");
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Vault</title>
  <style>
    :root { --bg: #ffffff; --fg: #171717; --muted: #6b7280; --line: #e5e7eb; }
    @media (prefers-color-scheme: dark) { :root { --bg: #0a0a0a; --fg: #ededed; --muted: #9ca3af; --line: #262626; } }
    body { margin: 0; background: var(--bg); color: var(--fg); font-family: Arial, Helvetica, sans-serif; }
    main { max-width: 720px; margin: 0 auto; padding: 48px 16px; }
    h1 { font-size: 1.5rem; margin: 0 0 24px; }
    ul { list-style: none; padding: 0; margin: 0; }
    li { display: flex; justify-content: space-between; gap: 16px; padding: 14px 0; border-bottom: 1px solid var(--line); }
    a { color: var(--fg); text-decoration: none; overflow-wrap: anywhere; }
    a:hover { text-decoration: underline; }
    span { color: var(--muted); font-size: 0.875rem; white-space: nowrap; }
  </style>
</head>
<body>
  <main>
    <h1>Vault</h1>
    <ul>
      ${items || "<li>Empty</li>"}
    </ul>
  </main>
</body>
</html>
`;
}

function main() {
  const password = readPassword();
  const pages = collectPages();

  fs.rmSync(STAGE_ROOT, { recursive: true, force: true });
  fs.mkdirSync(STAGE_DIR, { recursive: true });
  fs.writeFileSync(path.join(STAGE_DIR, "index.html"), renderIndex(pages));
  for (const p of pages) {
    fs.mkdirSync(path.join(STAGE_DIR, p.slug));
    fs.writeFileSync(path.join(STAGE_DIR, p.slug, "index.html"), p.html);
  }

  fs.rmSync(OUT_DIR, { recursive: true, force: true });
  // Shared salt in .staticrypt.json makes "remember me" carry across all vault pages.
  execFileSync(
    "npx",
    [
      "staticrypt", STAGE_DIR, "-r",
      "-d", path.dirname(OUT_DIR),
      "--remember", "30",
      "--template-title", "Protected",
      "--template-instructions", "Enter the password to continue.",
      "--template-button", "Unlock",
      "--template-error", "Wrong password",
      "--template-color-primary", "#171717",
      "--template-color-secondary", "#f4f4f5",
    ],
    { cwd: ROOT, stdio: ["ignore", "inherit", "inherit"], env: { ...process.env, STATICRYPT_PASSWORD: password } },
  );
  fs.rmSync(STAGE_ROOT, { recursive: true, force: true });

  const outputs = fs.readdirSync(OUT_DIR, { recursive: true }).filter((f) => f.endsWith(".html"));
  if (outputs.length !== pages.length + 1) {
    throw new Error(`Expected ${pages.length + 1} encrypted files in ${OUT_DIR}, got ${outputs.length}`);
  }
  for (const f of outputs) {
    const file = path.join(OUT_DIR, f);
    const html = fs.readFileSync(file, "utf8");
    if (!html.includes("<head>")) throw new Error(`No <head> in ${file}; StatiCrypt template changed?`);
    fs.writeFileSync(file, html.replace("<head>", '<head>\n<meta name="robots" content="noindex, nofollow">'));
  }
  console.log(`Encrypted ${pages.length} page(s) + index into public/${PUBLIC_NAME}/`);
}

main();
