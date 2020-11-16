<template>
    <div class="main-content">
        <template v-for="item in menuList" :key="item.id">
            <template v-if="item.web">
                <website-item :menu="item" :title="item.title" />
            </template>
            <template v-else>
                <website-item
                    v-for="(subItem, index) in item.children"
                    :menu="subItem"
                    :title="subItem.title"
                    :key="index"
                />
            </template>
        </template>
    </div>
</template>

<script>
import websiteItem from './websiteItem.vue'
export default {
    props: {
        menuList: Array
    },
    components: { websiteItem },
    setup() {
        return {}
    }
}
</script>

<style lang="scss" scoped></style>
