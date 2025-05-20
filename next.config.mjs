// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;




// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//       remotePatterns: [
//         {
//           protocol: 'https',
//           hostname: 'images.unsplash.com',
//           port: '', // Leave empty unless using a specific port
//           pathname: '/**', // Allow all paths under this hostname
//         },
//       ],
//     },
//   };
  
//   export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '', // Leave empty unless using a specific port
        pathname: '/**', // Allow all paths under this hostname
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '', // Leave empty unless using a specific port
        pathname: '/**', // Allow all paths under this hostname
      },
    ],
  },
};

export default nextConfig;