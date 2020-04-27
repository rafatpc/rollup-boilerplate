import minify from 'rollup-plugin-babel-minify';
import include from 'rollup-plugin-includepaths';
import babel from 'rollup-plugin-babel';

const environment = process.env.NODE_ENV;
const isDevelopment = environment === 'development';

export default {
	input: 'src/index.js',
	output: {
		file: 'dist/index.js',
		format: 'umd',
		sourcemap: true
	},
	plugins: [
		babel(),
		include({
			paths: ['src']
		}),
		!isDevelopment && minify({
			comments: false
		})
	]
};
