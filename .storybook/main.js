module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-a11y'
	],
	framework: '@storybook/react-webpack5',
	// unpins Storybook's dependence on Emotion 10 so that build can compile successfully
	features: { emotionAlias: false },
	webpackFinal: async (config, { configType }) => {
		// `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
		// You can change the configuration based on that.
		// 'PRODUCTION' is used when building the static version of storybook.

		// https://github.com/polkadot-js/extension/issues/621#issuecomment-759341776
		// framer-motion uses the .mjs notation and we need to include it so that webpack will
		// transpile it for us correctly (enables using a CJS module inside an ESM).
		config.module.rules.push({
			test: /\.mjs$/,
			include: /node_modules/,
			type: 'javascript/auto'
		});
		// Return the altered config
		return config;
	}
};

// export default {
// 	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
// 	addons: [
// 		'@storybook/addon-links',
// 		'@storybook/addon-essentials',
// 		'@storybook/addon-interactions',
// 		'@storybook/addon-mdx-gfm',
// 		'@chakra-ui/storybook-addon'
// 	],
// 	framework: {
// 		name: '@storybook/react-webpack5',
// 		options: {}
// 	},
// 	docs: { autodocs: 'tag' },
// 	features: { emotionAlias: false },
// 	webpackFinal: async (config) => {
// 		config.module.rules[0].exclude.push(/some regex that excludes the files you don't want to pass through babel/);
// 		config.module.rules.push({
// 			test: /\.mjs$/,
// 			include: /node_modules/,
// 			type: 'javascript/auto'
// 		});

// 		return config;
// 	}
// };
