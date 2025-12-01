/** @type {import('next').NextConfig} */
const isVercel = process.env.VERCEL === '1';

const nextConfig = {
	eslint: {
		ignoreDuringBuilds: true,
	},
	typescript: {
		// ignoreBuildErrors: true,
	},
	productionBrowserSourceMaps: false,
	devIndicators: false,
	webpack: (config) => {
		// Disable cache for both client and server builds
		config.cache = false;
		return config;
	},
	output: isVercel ? undefined : 'export',
	images: {
		unoptimized: !isVercel,
	},
};

module.exports = nextConfig;