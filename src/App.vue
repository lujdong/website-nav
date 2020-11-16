<template>
    <a-layout id="layout">
        <a-layout-sider
            breakpoint="sm"
            collapsed-width="0"
            collapsible
            class="sider-container"
            :width="sidebarWidth"
        >
            <div class="logo">
                <a href="/"> <img class="logo-img" :src="logo" alt="logo"/></a>
            </div>
            <aside-menu :menu-list="menu"></aside-menu>
        </a-layout-sider>
        <a-layout ref="content" class="container">
            <a-layout-header class="nav-header"> </a-layout-header>
            <a-layout-content class="main">
                <website-list :menu-list="menu"></website-list>
            </a-layout-content>
            <a-layout-footer class="footer" style="textAlign: center">
                © 2020 design by
                <a
                    href="https://github.com/lujdong/website-nav"
                    target="_blank"
                >
                    LuJDong
                </a>
            </a-layout-footer>
        </a-layout>
    </a-layout>
</template>
<script>
import menu from './menus'
import websiteList from './components/website/websiteList.vue'
import AsideMenu from '/@/components/AsideMenu.vue'
import { ref } from 'vue'
import logo from './assets/logo.png'
export default {
    components: { websiteList, AsideMenu },
    setup() {
        const sidebarWidth = ref('200px')
        return {
            sidebarWidth,
            menu,
            logo
        }
    }
}
</script>
