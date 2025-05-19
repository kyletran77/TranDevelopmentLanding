/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  swcMinify: true,
  images: {
    domains: [
      'www.tensorflow.org', 
      'pytorch.org', 
      'upload.wikimedia.org', 
      'spark.apache.org', 
      'pandas.pydata.org', 
      'nextjs.org', 
      'www.docker.com',
      'swiperjs.com'
    ],
  },
  webpack: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
}

module.exports = nextConfig