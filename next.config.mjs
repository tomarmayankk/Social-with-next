/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        serverActions: {
            bodySizeLimit: '20mb' // Set desired value here
        }
    }
};

export default nextConfig;
