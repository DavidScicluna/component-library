import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import viteCompression from 'vite-plugin-compression';
import dts from 'vite-plugin-dts';
import tailwindcss from 'tailwindcss';
import { viteCommonjs } from '@originjs/vite-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import { libInjectCss } from 'vite-plugin-lib-inject-css';

export default defineConfig({
	build: {
		outDir: 'build',
		lib: {
			fileName: (format) => `index.${format}.js`,
			entry: resolve(__dirname, './src/index.ts'),
			name: '@davidscicluna/component-library',
			formats: ['es', 'umd']
		},
		rollupOptions: {
			copyPublicDir: false,
			external: ['react', 'react/jsx-runtime', 'react-dom', 'tailwindcss'],
			output: {
				globals: {
					'react': 'React',
					'react/jsx-runtime': 'react/jsx-runtime',
					'react-dom': 'ReactDOM',
					'tailwindcss': 'tailwindcss'
				}
			}
		},
		// commonjsOptions: { transformMixedEsModules: true },
		sourcemap: true,
		emptyOutDir: true
	},
	plugins: [
		react(),
		libInjectCss(),
		dts({ insertTypesEntry: true, rollupTypes: true }),
		external(),
		viteCommonjs(),
		viteCompression()
	],
	// external: ['react', 'react-dom', 'tailwindcss'],
	css: { postcss: { plugins: [tailwindcss] } },
	resolve: {
		alias: {
			'@common/classes': resolve(__dirname, './src/common/classes'),
			'@common/constants': resolve(__dirname, './src/common/constants'),
			'@common/hooks': resolve(__dirname, './src/common/hooks'),
			'@common/types': resolve(__dirname, './src/common/types'),
			'@common/utils': resolve(__dirname, './src/common/utils'),
			'@common/keys': resolve(__dirname, './src/common/keys'),
			'@common/data': resolve(__dirname, './src/common/data'),
			'@common/theme': resolve(__dirname, './src/common/theme'),
			'@common/helpers': resolve(__dirname, './src/common/helpers'),
			'@components/Layout': resolve(__dirname, './src/components/Layout'),
			'@components/Typography': resolve(__dirname, './src/components/Typography'),
			'@components/Provider': resolve(__dirname, './src/components/Provider'),
			'@components/Box': resolve(__dirname, './src/components/Box'),
			'@components/DataDisplay': resolve(__dirname, './src/components/DataDisplay'),
			'@components/Buttons': resolve(__dirname, './src/components/Buttons'),
			'@components/Animation': resolve(__dirname, './src/components/Animation'),
			'@components/Feedback': resolve(__dirname, './src/components/Feedback'),
			'@components/Overlay': resolve(__dirname, './src/components/Overlay'),
			'@components/Navigation': resolve(__dirname, './src/components/Navigation'),
			'@components/Forms': resolve(__dirname, './src/components/Forms'),
			'@components/VisuallyHidden': resolve(__dirname, './src/components/VisuallyHidden')
		}
	}
});
