/** @type {import('next').NextConfig} */
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

const withVanillaExtract = createVanillaExtractPlugin();
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'prod-files-secure.s3.us-west-2.amazonaws.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default withVanillaExtract(nextConfig);
