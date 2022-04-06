import babel from 'rollup-plugin-babel'
import Postcss from 'rollup-plugin-postcss'
import typescript from 'rollup-plugin-typescript2';
import image from '@rollup/plugin-image';
export default {

    input: './packages/index.tsx',
    output: {
        file: './lib/multiple-citys.js',
        format: 'cjs',
    },
    plugins: [
        babel(),
        typescript(),
        image(),
        Postcss({
            extract: false,
            minimize: true,
            extensions: ['.css']
        }),]
}