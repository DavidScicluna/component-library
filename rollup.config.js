import beep from '@rollup/plugin-beep';
import commonjs from '@rollup/plugin-commonjs';
// import dynamicImportVars from '@rollup/plugin-dynamic-import-vars';
import eslint from '@rollup/plugin-eslint';
import image from '@rollup/plugin-image';
import resolve from '@rollup/plugin-node-resolve';
import strip from '@rollup/plugin-strip';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import gzip from 'rollup-plugin-gzip';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';

import postcss from 'rollup-plugin-postcss';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const pj = require('./package.json');

export default [
	{
		input: 'src/index.ts',
		output: [
			{
				file: pj.main,
				format: 'cjs',
				sourcemap: true
			},
			{
				file: pj.module,
				format: 'esm',
				sourcemap: true
			}
		],
		plugins: [
			peerDepsExternal(),
			strip(),
			resolve(),
			commonjs(),
			beep(),
			// dynamicImportVars(),
			eslint(),
			postcss({ extensions: ['.css'] }),
			typescript({
				tsconfig: './tsconfig.json',
				include: ['src/**/*'],
				exclude: ['.vscode', '.storybook', '.yarn', 'build', 'node_modules', 'src/stories']
			}),
			image(),
			gzip(),
			terser()
		]
	},
	{
		input: 'build/types/index.d.ts',
		output: [{ file: 'build/index.d.ts', format: 'esm' }],
		external: [/\.css$/],
		plugins: [dts()]
	}
];
