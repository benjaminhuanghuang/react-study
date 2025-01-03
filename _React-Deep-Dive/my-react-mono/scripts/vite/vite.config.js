import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolvePkgPath } from '../rollup/utils';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: [
			{
				find: 'react',
				replacement: resolvePkgPath('react')
			},
			{
				find: 'react-dom',
				replacement: resolvePkgPath('react-dom')
			},
			{
				find: 'hostConfig',
				replacement: path.resolve(
					resolvePkgPath('react-dom'),
					'./src/hostConfig.ts'
				)
			}
		]
	},
	build: {
		sourcemap: true // Enable sourcemaps in the build output
	}
});
