/** @type {import('tailwindcss').Config} */

import theme from './src/common/theme';

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: { ...theme },
	plugins: [require('tailwind-scrollbar-hide')],
	...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
};
