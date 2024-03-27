import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { extname, relative, resolve } from 'path';
import dts from 'vite-plugin-dts';
import tailwindcss from 'tailwindcss';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import tsConfigPaths from 'vite-tsconfig-paths';
import { fileURLToPath } from 'node:url';
import { glob } from 'glob';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react({ jsxImportSource: '@emotion/react', babel: { plugins: ['@emotion/babel-plugin'] } }),
		tsConfigPaths(),
		libInjectCss(),
		dts()
	],
	build: {
		outDir: 'build',
		copyPublicDir: false,
		lib: {
			entry: resolve(__dirname, 'src/index.ts'),
			formats: ['es']
		},
		rollupOptions: {
			external: ['react', 'react/jsx-runtime', 'react-dom', 'tailwindcss'],
			input: Object.fromEntries(
				glob
					.sync('src/**/*.{ts,tsx}', { ignore: 'src/**/*.story.tsx' })
					.map((file) => [
						relative('src', file.slice(0, file.length - extname(file).length)),
						fileURLToPath(new URL(file, import.meta.url))
					])
			),
			output: {
				assetFileNames: 'assets/[name][extname]',
				entryFileNames: '[name].js',
				globals: {
					'react': 'React',
					'react/jsx-runtime': 'react/jsx-runtime',
					'react-dom': 'ReactDOM',
					'tailwindcss': 'tailwindcss'
				}
			}
		}
	},
	// external: ['react', 'react-dom', 'tailwindcss'],
	css: { postcss: { plugins: [tailwindcss] } }
	// resolve: {
	// 	alias: {
	// 		'@common/classes': resolve(__dirname, './src/common/classes'),
	// 		'@common/constants': resolve(__dirname, './src/common/constants'),
	// 		'@common/hooks': resolve(__dirname, './src/common/hooks'),
	// 		'@common/types': resolve(__dirname, './src/common/types'),
	// 		'@common/utils': resolve(__dirname, './src/common/utils'),
	// 		'@common/keys': resolve(__dirname, './src/common/keys'),
	// 		'@common/data': resolve(__dirname, './src/common/data'),
	// 		'@common/theme': resolve(__dirname, './src/common/theme'),
	// 		'@common/helpers': resolve(__dirname, './src/common/helpers'),
	// 		'@components/Layout': resolve(__dirname, './src/components/Layout'),
	// 		'@components/Typography': resolve(__dirname, './src/components/Typography'),
	// 		'@components/Provider': resolve(__dirname, './src/components/Provider'),
	// 		'@components/Box': resolve(__dirname, './src/components/Box'),
	// 		'@components/DataDisplay': resolve(__dirname, './src/components/DataDisplay'),
	// 		'@components/Buttons': resolve(__dirname, './src/components/Buttons'),
	// 		'@components/Animation': resolve(__dirname, './src/components/Animation'),
	// 		'@components/Feedback': resolve(__dirname, './src/components/Feedback'),
	// 		'@components/Overlay': resolve(__dirname, './src/components/Overlay'),
	// 		'@components/Navigation': resolve(__dirname, './src/components/Navigation'),
	// 		'@components/Forms': resolve(__dirname, './src/components/Forms'),
	// 		'@components/VisuallyHidden': resolve(__dirname, './src/components/VisuallyHidden')
	// }
	// }
});
