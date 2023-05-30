/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["media.kijiji.ca"],
  },
  env: {
    GOOGLE_CLIENT_ID : "630576064420-368h7n73q1t07uhvhkdl3sr7k0910m7j.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET : "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",
    
    GOOGLE_MAP_KEY : "AIzaSyB5Xj_33Ld1cVJeUoZzzNMkSiAto_CCZrA",

    FACEBOOK_CLIENT_ID : "1373170750141686",
    FACEBOOK_CLIENT_SECRET : "b66f605a1b18487b42773e4056f344d2",

    NEXT_AUTH_SECRET : "c53180cfa41b0970fd3b2e9eb124fa2e",

    CLOUDINARY_CLOUD_NAME: "dvc3uhabn",
    CLOUDINARY_API_KEY: "227811459435173",
    CLOUDINARY_API_SECRET: "xL8UWt2nUEwaCIswAt0d9j2vHm0",
  },
};

module.exports = withBundleAnalyzer(nextConfig);
