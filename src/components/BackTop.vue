<template>
    <div class="back-top" v-show="showBackTop">
        <div class="back-top-content">
            <ArrowUpOutlined />
        </div>
    </div>
</template>

<script>
import { ArrowUpOutlined } from '@ant-design/icons-vue'
import { onMounted, ref } from 'vue'
export default {
    components: { ArrowUpOutlined },
    setup() {
        const showBackTop = ref(false)
        const onWindowScroll = e => {
            if (e.target.scrollTop > 400) {
                showBackTop.value = true
            } else {
                showBackTop.value = false
            }
        }
        onMounted(() => {
            window.addEventListener('scroll', onWindowScroll, true)
        })
        return {
            showBackTop
        }
    }
}
</script>

<style lang="less" scoped>
.back-top {
    position: fixed;
    bottom: 100px;
    right: 40px;
    z-index: 2000;
    border-radius: 10px;
    overflow: hidden;
    background: #c0c0c0;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &-content {
        width: 40px;
        height: 40px;
        font-size: 24px;
        text-align: center;
        color: #fff;
    }
    &:hover {
        background: #a0a0a0;
    }
}
</style>
