import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import gzip from 'rollup-plugin-gzip';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const pj = require('./package.json');

export default {
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
		resolve(),
		commonjs(),
		typescript({ useTsconfigDeclarationDir: true }),
		postcss({ extensions: ['.css'] })
		// gzip()
	]
};
