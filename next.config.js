/** @type {import('next').NextConfig} */
const nextConfig = {
     reactStrictMode: true,
    images : {
        domains : ["cdn.imagin.studio"]
    },
     eslint: {
      ignoreDuringBuilds: true,
    },
}

module.exports = nextConfig
