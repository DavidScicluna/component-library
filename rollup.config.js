import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import { resolve } from 'path';
import { dependencies } from './package.json';
import commonjs from '@rollup/plugin-commonjs';
// import css from 'rollup-plugin-import-css';

const input = resolve(__dirname, './src/index.ts');
const external = Object.keys(dependencies);

const umdName = 'rclb';

export default [
	{
		input,
		output: [
			{
				dir: resolve(__dirname, './build'),
				format: 'esm',
				sourcemap: true
			},
			{
				file: resolve(__dirname, `./build/umd/${umdName}.js`),
				format: 'umd',
				name: umdName,
				sourcemap: true,
				globals: {
					'react': 'React',
					'react-dom': 'ReactDOM'
				}
			}
		],
		plugins: [
			nodeResolve({ extensions: ['.tsx', '.ts', '.jsx', '.js'] }),
			typescript({
				tsconfig: './tsconfig.build.json',
				paths: { '@davidscicluna/component-library/*': ['./src/*'] }
			}),
			// css({ minify: true }),
			postcss({
				extract: false,
				minimize: false,
				modules: true,
				sourceMap: true,
				use: { less: { javascriptEnabled: true } }
			}),
			commonjs()
		],
		external
	},
	{
		input,
		output: {
			file: resolve(__dirname, `./build/umd/${umdName}.min.js`),
			format: 'umd',
			name: umdName,
			sourcemap: false,
			globals: {
				'react': 'React',
				'react-dom': 'ReactDOM'
			}
		},
		plugins: [
			nodeResolve({ extensions: ['.tsx', '.ts', '.jsx', '.js'] }),
			typescript({
				tsconfig: './tsconfig.build.json',
				declaration: false,
				declarationMap: false,
				sourceMap: false,
				removeComments: true,
				paths: { '@davidscicluna/component-library/*': ['./src/*'] }
			}),
			terser(),
			// css({ minify: true }),
			postcss({
				extract: true,
				minimize: true,
				modules: true,
				sourceMap: false,
				use: { less: { javascriptEnabled: true } }
			}),
			commonjs()
		],
		external
	}
];
