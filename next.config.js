/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      'www.tensorflow.org', 
      'pytorch.org', 
      'upload.wikimedia.org', 
      'spark.apache.org', 
      'pandas.pydata.org', 
      'nextjs.org', 
      'www.docker.com'
    ],
  },
}

module.exports = nextConfig