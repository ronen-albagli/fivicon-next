const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    // You can specify MDX options here if needed
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // https: true, // Ensure you have setup HTTPS correctly if needed

  async rewrites() {
    return [
      {
        source: '/',
        destination: '/trial',
      },
      // {
      //   source: "/doc",
      //   destination: "/doc/index.html",
      // },
    ];
  },

  pageExtensions: ['js', 'ts', 'tsx', 'md', 'mdx'],
};

// Combine the MDX configuration with the existing Next.js config
module.exports = withMDX(nextConfig);
