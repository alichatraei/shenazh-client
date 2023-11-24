/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["https://www.api.shenazh.com", "api.shenazh.com"],
  },
  async rewrites() {
    return [{ source: "/home", destination: "/src/app/home/page.tsx" }];
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
