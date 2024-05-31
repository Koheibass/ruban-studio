/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  meta: [
    { charset: 'utf-8' },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, viewport-fit=cover'
    },
    {
      hid: 'description',
      name: 'description',
      content: 'my website description'
    }
  ]
}

module.exports = nextConfig

