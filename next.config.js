/** @type {import('next').NextConfig} */
const nextConfig = {}

//@ts-ignore
global.performance = global.performance || {
  now: () => new Date().getTime(),
};

module.exports = nextConfig
