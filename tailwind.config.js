import theme from './src/common/theme';

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: { ...theme },
	plugins: [require('tailwind-scrollbar-hide')]
};
