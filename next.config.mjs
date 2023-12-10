import million from 'million/compiler';
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "media.discordapp.net",
      "pbs.twimg.com",
    ],
  },
};
 
const millionConfig = {
  auto: true,
  // if you're using RSC:
  // auto: { rsc: true },
}
 
export default million.next(nextConfig, millionConfig);
