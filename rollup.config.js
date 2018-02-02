import babel from 'rollup-plugin-babel';


export default {
	input: 'src/ImageMagnifier',
	output: {
		file: 'lib/ImageMagnifier.js',
		format: 'cjs'
	},
	external: ['react'],
	plugins: [
		babel({
			exclude: 'node_modules/**',
			plugins: ['external-helpers']
		})
	]
};