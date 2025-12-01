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
	output: isVercel ? undefined : 'export',
	images: {
		unoptimized: !isVercel,
	},
};

module.exports = nextConfig;