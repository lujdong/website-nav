<template>
    <div class="item-container" :id="title">
        <div class="title">
            <TagOutlined></TagOutlined>
            <span>{{ title }}</span>
        </div>
        <a-row class="item-wrap" :gutter="[16, 16]">
            <a-col
                :xs="24"
                :sm="24"
                :md="12"
                :lg="8"
                :xl="8"
                :xxl="6"
                v-for="item in menu.web"
                :key="item.title"
                class="item-col"
            >
                <a-tooltip placement="bottom">
                    <template #title>
                        {{ item.desc }}
                    </template>
                    <a :href="item.url" target="_blank" class="site-link">
                        <div class="site-logo">
                            <img
                                class="logo-img"
                                :src="logoSrc(item)"
                                :alt="item.title"
                            />
                        </div>
                        <div class="site-info">
                            <div class="site-info-title">{{ item.title }}</div>
                            <div class="site-info-desc">{{ item.desc }}</div>
                        </div>
                    </a>
                </a-tooltip>
            </a-col>
        </a-row>
    </div>
</template>

<script>
import { TagOutlined } from '@ant-design/icons-vue'
export default {
    components: { TagOutlined },
    props: {
        menu: {
            type: Object
        },
        title: {
            type: String,
            default: ''
        }
    },
    setup() {
        const logoSrc = item => {
            return `//cdn.jsdelivr.net/gh/lujdong/assets-cdn/nav/images/logos/${item.logo}`
        }
        return {
            logoSrc
        }
    }
}
</script>

<style lang="less" scoped>
.item-container {
    padding-bottom: 16px;
    .title {
        margin-bottom: 16px;
        font-size: 18px;
        span {
            margin-left: 10px;
        }
    }
    .item-wrap {
        padding: 10px;
        .site-link {
            position: relative;
            display: flex;
            align-items: center;
            height: 100px;
            padding: 18px;
            border-radius: 8px;
            background: #fff;
            transition: all 0.3s cubic-bezier(0.3, 1, 0.2, 1);
            overflow: hidden;
            &::before {
                content: '';
                width: 0;
                height: 100%;
                background: @primary-color;
                position: absolute;
                top: 0;
                left: 0;
                transition: all 0.8s cubic-bezier(0.3, 1, 0.2, 1);
            }

            &:hover {
                box-shadow: 0 0 4px 4px #e0e0e0;
            }
            &:hover:before {
                width: 100%;
            }
            &:hover::after {
                left: 120%;
            }
            &:hover .site-info,
            &:hover .site-info-desc {
                color: #fff;
            }
            &:hover .logo-img {
                transform: rotate(360deg);
            }
            .site-logo,
            .site-info {
                flex-shrink: 0;
                z-index: 999;
            }
            .site-logo {
                width: 48px;
                height: 48px;
                border-radius: 50%;
                overflow: hidden;
                .logo-img {
                    width: 100%;
                    height: 100%;
                    transition: all 0.3s ease-in-out;
                }
            }
            .site-info {
                width: 82%;
                padding-left: 12px;
                color: #333;
                transition: color 0.3s linear;
                &-desc {
                    color: #666;
                    transition: inherit;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            }
        }
    }
}
</style>
