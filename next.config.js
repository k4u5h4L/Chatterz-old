const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

// module.exports = withPWA({
//     pwa: {
//         dest: "public",
//         runtimeCaching,
//     },
// });

module.exports = {
    images: {
        domains: [
            "localhost:3000",
            "localhost",
            "chatterz.vercel.app",
            "vercel.com",
            // below are arbitrary links for random images

        ],
    },
    // async redirects() {
    //     return [
    //         {
    //             source: "/shop",
    //             destination: "/shop/1",
    //             permanent: true,
    //         },
    //     ];
    // },
};