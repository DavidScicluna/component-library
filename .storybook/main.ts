// @ts-ignore
const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const config = {
	stories: ['../src/**/*.story.mdx', '../src/**/*.story.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-a11y',
		{ name: '@storybook/addon-styling', options: { postCss: true } }
	],
	typescript: true,
	framework: '@storybook/react-webpack5',
	webpackFinal: async (config) => {
		config.resolve.alias = {
			...config.resolve.alias,
			fs: false
		};
		// config.module.rules.push({
		// 	test: /\.scss|.sass$/,
		// 	use: ['style-loader', 'css-loader', 'sass-loader'],
		// 	include: path.resolve(__dirname, '../')
		// });
		config.resolve.plugins = [
			new TsconfigPathsPlugin({
				configFile: path.resolve(__dirname, '../tsconfig.json')
			})
		];
		config.resolve.fallback = {
			assert: false,
			stream: false,
			constants: false,
			util: false,
			process: false,
			url: false,
			path: false
		};
		return config;
	}
};

export default config;
