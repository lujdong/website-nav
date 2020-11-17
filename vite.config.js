import { resolve } from 'path'

const pkg = require('./package.json')

import { modifyVars } from './src/config/lessModifyVars'

function pathResolve(dir) {
    return resolve(__dirname, '.', dir)
}
const viteConfig = {
    optimizeDeps: {
        include: [
            'ant-design-vue/es/locale/zh_CN',
            '@ant-design/icons-vue',
            'moment/locale/zh-cn'
        ]
    },
    outDir: 'nav',
    sourcemap: false,
    assetsDir: './',
    assetsInlineLimit: 4096,
    esbuildTarget: 'es2020',
    silent: false,
    alias: {
        '/@/': pathResolve('src')
    },
    cssPreprocessOptions: {
        less: {
            modifyVars,
            javascriptEnabled: true
        }
    },
    define: {
        __VERSION__: pkg.version
    },
    base: './'
}

export default viteConfig
