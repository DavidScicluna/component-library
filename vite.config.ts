import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import viteCompression from 'vite-plugin-compression';
import dts from 'vite-plugin-dts';
import tailwindcss from 'tailwindcss';

export default defineConfig({
	build: {
		outDir: 'build',
		lib: {
			entry: resolve(__dirname, './src/index.ts'),
			name: '@davidscicluna/component-library',
			fileName: (format) => `index.${format}.js`
		},
		rollupOptions: {
			external: ['react', 'react-dom', 'tailwindcss'],
			output: {
				globals: {
					'react': 'React',
					'react-dom': 'ReactDOM',
					'tailwindcss': 'tailwindcss'
				}
			}
		},
		sourcemap: true,
		emptyOutDir: true
	},
	plugins: [react(), dts({ rollupTypes: true }), viteCompression()],
	css: {
		postcss: {
			plugins: [tailwindcss]
		}
	},
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
