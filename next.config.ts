import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'kjhswhyddvck27143991.gcdn.ntruss.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'kr.object.ncloudstorage.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: `${process.env.NEXT_PUBLIC_IMAGE_SERVER_HOST}`,
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
