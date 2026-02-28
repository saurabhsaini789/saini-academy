/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/saini-academy',
    images: {
        unoptimized: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
};


export default nextConfig;
