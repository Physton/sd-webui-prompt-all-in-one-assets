<script>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
import {useRoute, useRouter, onBeforeRouteUpdate} from 'vue-router'
import {usePageLang, useSiteData, useSiteLocaleData, withBase, usePageData} from '@vuepress/client'


export default {
    name: 'Layout',
    components: {ParentLayout},
    data() {
        return {
            lang: 'en',
            myTopHtml: '',
            path: '',
            siteData: {},
            siteLocaleData: {},
        }
    },
    mounted() {
        const route = useRoute()
        const pageLang = usePageLang()
        const siteData = useSiteData()
        const siteLocaleData = useSiteLocaleData()

        this.lang = pageLang.value
        this.path = route.path
        this.siteData = siteData.value
        this.siteLocaleData = siteLocaleData.value
        this.$watch(() => route.path, (newVal) => {
            this.path = newVal
            if (pageLang.value !== this.lang) {
                this.lang = pageLang.value
                for (let key in siteData.value.locales) {
                    let item = siteData.value.locales[key]
                    if (item.lang === this.lang) {
                        this.siteLocaleData = item
                        break
                    }
                }
            }
        })
    },
    methods: {
        replaceVars(html) {
            if (!html) return html
            let vars = {
                'donateUrl': '/Donate.html',
            }
            switch (this.lang) {
                case 'zh-CN':
                    vars.donateUrl = '/zh-CN/Donate.html'
                    break
                case 'zh-TW':
                    vars.donateUrl = '/zh-TW/Donate.html'
                    break
                case 'ru':
                    vars.donateUrl = '/ru/Donate.html'
                    break
            }
            vars.donateUrl = withBase(vars.donateUrl)
            for(let key in vars){
                let value = vars[key]
                html = html.replace(new RegExp(`{${key}}`, 'g'), value)
            }

            return html
        },
    },
}
</script>

<template>
    <ParentLayout>
        <template #page-top>
            <div class="my-top" v-html="replaceVars(siteLocaleData.top)"></div>
        </template>
        <template #page-bottom>
            <div class="my-footer">
                <p class="github-count">
                    <a target="_blank" href="https://github.com/Physton/sd-webui-prompt-all-in-one/stargazers">
                        <img alt="GitHub stars"
                             src="https://img.shields.io/github/stars/Physton/sd-webui-prompt-all-in-one?style=flat-square"/>
                    </a>
                    <a target="_blank" href="https://github.com/Physton/sd-webui-prompt-all-in-one/network/members">
                        <img alt="GitHub forks"
                             src="https://img.shields.io/github/forks/Physton/sd-webui-prompt-all-in-one?style=flat-square"/>
                    </a>
                    <a target="_blank" href="https://github.com/Physton/sd-webui-prompt-all-in-one/issues">
                        <img alt="GitHub issues"
                             src="https://img.shields.io/github/issues/Physton/sd-webui-prompt-all-in-one?style=flat-square"/>
                    </a>
                    <a target="_blank"
                       href="https://github.com/Physton/sd-webui-prompt-all-in-one/issues?q=is%3Aissue+is%3Aclosed">
                        <img alt="GitHub issues closed"
                             src="https://img.shields.io/github/issues-closed/Physton/sd-webui-prompt-all-in-one?style=flat-square"/>
                    </a>
                    <a target="_blank" href="https://github.com/Physton/sd-webui-prompt-all-in-one/blob/main/LICENSE">
                        <img alt="GitHub license"
                             src="https://img.shields.io/github/license/Physton/sd-webui-prompt-all-in-one?style=flat-square"/>
                    </a>
                    <a target="_blank" href="https://github.com/Physton/sd-webui-prompt-all-in-one/commits/main">
                        <img alt="GitHub commits"
                             src="https://img.shields.io/github/last-commit/Physton/sd-webui-prompt-all-in-one?style=flat-square"/>
                    </a>
                </p>
                <div>Developed by <a target="_blank" href="https://github.com/Physton">Physton Github</a>, <a target="_blank" href="https://Physton.com">Phyton.com</a></div>
            </div>
        </template>
    </ParentLayout>
</template>

<style lang="css">
.my-top {
    background: var(--c-tip-bg);
    color: var(--c-tip-text);
    padding: 15px;
}

.my-footer {
    text-align: center;
}

.my-footer .github-count a {
    margin: 0 5px;
}

:root {
    --content-width: 100%;
}
</style>