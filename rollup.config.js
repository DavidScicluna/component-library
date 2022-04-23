import beep from '@rollup/plugin-beep';
import commonjs from '@rollup/plugin-commonjs';
// import dynamicImportVars from '@rollup/plugin-dynamic-import-vars';
import eslint from '@rollup/plugin-eslint';
import image from '@rollup/plugin-image';
import resolve from '@rollup/plugin-node-resolve';
import strip from '@rollup/plugin-strip';
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
		strip(),
		resolve(),
		commonjs(),
		beep(),
		// dynamicImportVars(),
		eslint(),
		typescript({
			useTsconfigDeclarationDir: true,
			rollupCommonJSResolveHack: false,
			clean: true
		}),
		postcss({ extensions: ['.css'] }),
		image()
		// gzip()
	]
};
