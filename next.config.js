/** @type {import('next').NextConfig} */
const nextConfig = {
	eslint: {
		ignoreDuringBuilds: true,
	},
	devIndicators: false,
	webpack: (config) => {
		// Disable cache for both client and server builds
		config.cache = false;
		return config;
	},
};

module.exports = nextConfig;