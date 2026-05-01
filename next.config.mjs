/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com', // গুগলের প্রোফাইল ইমেজের জন্য
      },
      {
        protocol: 'https',
        hostname: 'assignment-08-sooty-phi.vercel.app', // আপনার লাইভ সাইটের ইমেজের জন্য
      },
    ],
  },
};

export default nextConfig;