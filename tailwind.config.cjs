const path = require('path');

/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: { ...path.resolve(__dirname, './src/common/theme') },
	plugins: [require('tailwind-scrollbar-hide')],
	...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
};
