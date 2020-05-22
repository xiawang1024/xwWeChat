import path from 'path'
import { terser } from 'rollup-plugin-terser';
import pkg from '../package.json'

const banner =
`/*!
 * WeChat.js v ${pkg.version}
 * (c) 2020-${new Date().getFullYear()} xiawang1024
 */`


const UMD_NAME = 'WeChat'
const LIB_NAME = 'hndt-wechat'

const builds = [
    {
        banner,
        name:UMD_NAME,
        file:path.join(__dirname,'./dist',`${LIB_NAME}.js`),
        format:'umd',
    },
    {
        banner,
        name:UMD_NAME,
        file:path.join(__dirname,'./dist',`${LIB_NAME}.min.js`),
        format:'umd',
        plugins:[
            terser()
        ]
    },
    {
        banner,
        file:path.join(__dirname,'./dist',`${LIB_NAME}.cjs.js`),
        format:'cjs',
    },
    {
        banner,
        file:path.join(__dirname,'./dist',`${LIB_NAME}.cjs.min.js`),
        format:'cjs',
        plugins:[
            terser()
        ]
    },
    {
        banner,
        file:path.join(__dirname,'./dist',`${LIB_NAME}.esm.js`),
        format:'esm',
    },
    {
        banner,
        file:path.join(__dirname,'./dist',`${LIB_NAME}.esm.js`),
        format:'esm',
        plugins:[
            terser()
        ]
    }
]

export {
    builds
}