/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Next 13+ 推荐的静态导出
  trailingSlash: true, // GitHub Pages 对路径更友好
  images: {
    unoptimized: true, // GitHub Pages 没有图片优化服务器
  },
};

module.exports = nextConfig;
