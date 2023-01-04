/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/slush',
        destination: 'https://failup.notion.site/Failup-Ventures-x-Slush-Stories-of-Failure-a90d9e764c964dd1a68dd0ee9d7c7632',
        permanent: true
      }
    ];
  }
}

module.exports = nextConfig
