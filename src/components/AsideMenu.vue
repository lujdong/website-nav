<template>
    <a-menu
        theme="dark"
        mode="inline"
        @openChange="onOpenChange"
        :openKeys="openKeys"
        v-model:selectedKeys="selectedKeys"
    >
        <template v-for="(item, index) in menuList" :key="index">
            <a-sub-menu v-if="item.children" :key="index">
                <template #title>
                    <icon-font :type="item.icon"></icon-font>
                    <span>{{ item.title }}</span>
                </template>
                <a-menu-item
                    v-for="subItem in item.children"
                    :key="subItem.title"
                    @click="scrollTo(subItem)"
                >
                    {{ subItem.title }}
                </a-menu-item>
            </a-sub-menu>
            <template v-else>
                <a-menu-item :key="index" @click="scrollTo(item)">
                    <icon-font :type="item.icon"></icon-font>
                    <span>{{ item.title }}</span>
                </a-menu-item>
            </template>
        </template>
    </a-menu>
</template>

<script>
import { reactive, toRefs } from 'vue'
import IconFont from '/@/components/IconFont.vue'
export default {
    components: { IconFont },
    props: {
        menuList: Array
    },
    setup(props) {
        const state = reactive({
            openKeys: [],
            selectedKeys: [],
            rootSubmenuKeys: props.menuList.map((item, index) => index)
        })
        const onOpenChange = openKeys => {
            const latestOpenKey = openKeys.find(
                key => !state.openKeys.includes(key)
            )
            if (state.rootSubmenuKeys.includes(latestOpenKey)) {
                // 此处为了避免 index:0 判定为 false
                state.openKeys = latestOpenKey + 1 ? [latestOpenKey] : []
            } else {
                state.openKeys = openKeys
            }
        }
        const scrollTo = ({ title }) => {
            let anchorElement = document.getElementById(title)
            anchorElement.scrollIntoView({ behavior: 'smooth' })
        }
        return { ...toRefs(state), scrollTo, onOpenChange }
    }
}
</script>

<style lang="scss" scoped></style>
