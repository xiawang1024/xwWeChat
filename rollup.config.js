import path from 'path'
import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import {builds} from './config/builds'


export default {
    input: path.join(__dirname, '/src/index.js'),
    output:builds,
    plugins: [
        resolve(),
        commonjs(),
        babel({
            exclude: 'node_modules/**',
            runtimeHelpers: true
        }),
    ],
}