/** @type {import('next').NextConfig} */
const path = require('path')
// const million = require('million/compiler')
 
// module.exports = {
//   sassOptions: {
//     includePaths: [path.join(__dirname, 'assets/css')],
//   },
// }


 
const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'assets/css')],
  },
  experimental: {
    serverActions: true,
  },
};
 
// const millionConfig = {
//   auto: true,
//   // if you're using RSC:
//   auto: { rsc: true },
// }
 
module.exports = nextConfig