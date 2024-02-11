import typescript from 'rollup-plugin-typescript2';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import json from 'rollup-plugin-json';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';

export default {
	input: 'src/index.ts',
	output: [
		{
			file: 'build/index.js',
			format: 'cjs', // or 'es' for ES modules
			sourcemap: true
		}
	],
	plugins: [
		peerDepsExternal(),
		resolve({
			extensions: ['.js', '.jsx', '.ts', '.tsx']
		}),
		commonjs(),
		typescript({ tsconfig: './tsconfig.build.json' }),
		json(),
		postcss(),
		terser()
	],
	external: [
		'@emotion/react',
		'@floating-ui/react',
		'classnames',
		'color2k',
		'compressorjs',
		'fast-sort',
		'framer-motion',
		'lodash-es',
		'micro-memoize',
		'react',
		'react-cool-inview',
		'react-dom',
		'react-loader-spinner',
		'rooks',
		'tailwind-scrollbar-hide',
		'tailwindcss',
		'usehooks-ts',
		'uuid',
		'@babel/core',
		'@babel/preset-env',
		'@babel/preset-react',
		'@babel/preset-typescript',
		'@emotion/babel-plugin',
		'@emotion/babel-preset-css-prop',
		'@fontsource/material-icons',
		'@fontsource/material-icons-outlined',
		'@fontsource/material-icons-two-tone',
		'@fontsource/roboto-mono',
		'@fontsource/roboto-slab',
		'@fontsource/work-sans',
		'@storybook/addon-a11y',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-links',
		'@storybook/addon-styling',
		'@storybook/react',
		'@storybook/react-webpack5',
		'@types/classnames',
		'@types/lodash-es',
		'@types/node',
		'@types/react',
		'@types/react-dom',
		'@types/uuid',
		'@typescript-eslint/eslint-plugin',
		'@typescript-eslint/parser',
		'autoprefixer',
		'eslint',
		'eslint-plugin-import',
		'eslint-plugin-import-path',
		'eslint-plugin-jsx-a11y',
		'eslint-plugin-react',
		'eslint-plugin-react-hooks',
		'eslint-plugin-simple-import-sort',
		'postcss',
		'prettier',
		'rollup',
		'rollup-plugin-commonjs',
		'rollup-plugin-json',
		'rollup-plugin-node-resolve',
		'rollup-plugin-peer-deps-external',
		'rollup-plugin-postcss',
		'rollup-plugin-terser',
		'rollup-plugin-typescript2',
		'storybook',
		'tsc-alias',
		'tsconfig-paths-webpack-plugin',
		'typescript',
		'utility-types'
	]
};
