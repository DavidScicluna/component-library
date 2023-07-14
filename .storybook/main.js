module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-a11y',
		{ name: '@storybook/addon-styling', options: { postCss: true } }
	],
	typescript: true,
	framework: '@storybook/react-webpack5'
};
