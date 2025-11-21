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
	experimental: {
		appDir: true,
		serverActions: true,
	},
};

module.exports = nextConfig;