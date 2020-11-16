import { createApp } from 'vue'
import App from './App.vue'

import { Menu, Layout, Row, Col, BackTop, Tooltip } from 'ant-design-vue'
import IconFont from '/@/components/IconFont.vue'

import 'ant-design-vue/dist/antd.css'
import '/@/styles/index.less'
// import { createFromIconfontCN } from '@ant-design/icons-vue'

// const IconFont = createFromIconfontCN({
//     scriptUrl: '//at.alicdn.com/t/font_1613863_kz3g2wvbbrn.js'
// })

const app = createApp(App)
app.component('icon-font', IconFont)
app.use(Menu)
    .use(Layout)
    .use(Row)
    .use(Col)
    .use(BackTop)
    .use(Tooltip)
app.mount('#app')
