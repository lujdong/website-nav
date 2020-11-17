import { createApp } from 'vue'
import App from './App.vue'

import { Menu, Layout, Row, Col, BackTop, Tooltip } from 'ant-design-vue'

import 'ant-design-vue/dist/antd.css'
import '/@/styles/index.less'

const app = createApp(App)

/**
 * 注册一个懒加载指令
 */
app.directive('lazy', {
    mounted(el, binding) {
        const lazyImageObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                let lazyImage = entry.target
                // 相交率，默认是相对于浏览器视窗
                if (entry.intersectionRatio > 0) {
                    lazyImage.src = binding.value
                    // 当前图片加载完之后需要去掉监听
                    lazyImageObserver.unobserve(lazyImage)
                }
            })
        })
        lazyImageObserver.observe(el)
    }
})

app.use(Menu)
    .use(Layout)
    .use(Row)
    .use(Col)
    .use(BackTop)
    .use(Tooltip)
app.mount('#app')
