<template>
    <div>
        <table>
            <thead>
            <tr>
                <th>{{ getLang('category') }}</th>
                <th>{{ getLang('name') }}</th>
                <th>{{ getLang('concurrent') }}</th>
                <th>{{ getLang('free_quota') }}</th>
                <th>{{ getLang('help') }}</th>
                <th>{{ getLang('support_languages') }}</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(apiItem) in translate_apis_parse" :key="apiItem.key">
                <td style="text-align: center" v-if="apiItem.rowspan" :rowspan="apiItem.rowspan">{{ getLang(apiItem.category) }}</td>
                <td>{{ apiItem.nameFilter }}</td>
                <td style="text-align: right">{{ apiItem.concurrent }} / s</td>
                <td>{{ getLang('free.' + apiItem.key) || '-' }}</td>
                <td style="text-align: center">
                    <a href="javascript:" @click="toApi(apiItem)">{{ getLang('help') }}</a>
                </td>
                <td style="text-align: center">
                    <a href="javascript:" @click="toApi(apiItem)">{{ Object.keys(apiItem.support).length }}</a>
                </td>
            </tr>
            </tbody>
        </table>

        <div v-for="(api) in translate_apis.apis" :key="api.type">
            <div v-for="(apiItem) in api.children" :key="apiItem.key">
                <h3 :id="apiItem.nameAchors" tabindex="-1">
                    {{ apiItem.nameReplace }}
                </h3>
                <ul>
                    <li>{{ getLang('category') }}: <code>{{ getLang(apiItem.category) }}</code></li>
                    <li>{{ getLang('concurrent') }}: <code>{{ apiItem.concurrent }} / s</code></li>
                    <li>
                        {{ getLang('help') }}:
                        <ul v-for="item in apiItem.help" class="help-list">
                            <li v-if="!item.url.includes('prompt-all-in-one')" class="help-item"><a :href="item.url" target="_blank">[?] {{ item.title }}</a></li>
                        </ul>
                    </li>
                    <li>
                        <details>
                            <summary>{{ getLang('support_languages') }}</summary>
                            <ul v-for="(code, key) in apiItem.support" :key="key">
                                <li v-if="languages[key]">[{{ key }}] <code>{{ languages[key] || '' }}</code></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import { translate_apis } from '@temp/translate_apis'
import {i18n } from '@temp/i18n'
export default {
    name: 'Translators',
    props: {
        lang: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            translate_apis: translate_apis,
            translate_apis_parse: [],
            languages: {},
            langs: {
                "en": {
                    "need_api_key": "API Key Required",
                    "dont_need_api_key": "API Key Not Required",
                    "offline_api": "Offline Translation",
                    "category": "Category",
                    "name": "Name",
                    "concurrent": "Concurrent",
                    "free_quota": "Free Quota",
                    "help": "Help / Documentation",
                    "support_languages": "Supported Languages",
                    "free": "Free",
                    "apply_for_free": "Apply for Free Usage",
                    "free.google": "Free 500,000 characters per month",
                    "free.openai": "$5 free trial credit upon first activation",
                    "free.microsoft": "2 million characters per month (only for the first 12 months after registering Azure)",
                    "free.amazon": "2 million characters per month (only for the first 12 months after registering AWS)",
                    "free.deepl": "Free 500,000 characters per month (Free version)",
                    "free.yandex": "Unknown",
                    "free.myMemory": "Free 50,000 characters per day",
                    "free.baidu": "Free 50,000 characters per month",
                    "free.alibaba": "Free 1 million characters per month",
                    "free.youdao": "$50 free trial credit for new users upon registration",
                    "free.tencent": "Free 5 million characters per month",
                    "free.niutrans": "Requires check-in to claim",
                    "free.caiyun": "Free 1 million characters per month",
                    "free.volcengine": "Free 2 million characters per month"
                },
                "ru": {
                    "need_api_key": "API-ключ необходим",
                    "dont_need_api_key": "API-ключ не требуется",
                    "offline_api": "Офлайн перевод",
                    "category": "Категория",
                    "name": "Название",
                    "concurrent": "Параллельно",
                    "free_quota": "Бесплатный лимит",
                    "help": "Помощь / Документация",
                    "support_languages": "Поддерживаемые языки",
                    "free": "Бесплатно",
                    "apply_for_free": "Бесплатное использование после подачи заявки",
                    "free.google": "Бесплатно 500 000 символов в месяц",
                    "free.openai": "$5 бесплатного тестового кредита при первой активации",
                    "free.microsoft": "2 миллиона символов в месяц (только в течение первых 12 месяцев после регистрации в Azure)",
                    "free.amazon": "2 миллиона символов в месяц (только в течение первых 12 месяцев после регистрации в AWS)",
                    "free.deepl": "Бесплатно 500 000 символов в месяц (бесплатная версия)",
                    "free.yandex": "Неизвестно",
                    "free.myMemory": "Бесплатно 50 000 символов в день",
                    "free.baidu": "Бесплатно 50 000 символов в месяц",
                    "free.alibaba": "Бесплатно 1 миллион символов в месяц",
                    "free.youdao": "$50 бесплатного тестового кредита для новых пользователей при регистрации",
                    "free.tencent": "Бесплатно 5 миллионов символов в месяц",
                    "free.niutrans": "Требуется регистрация для получения",
                    "free.caiyun": "Бесплатно 1 миллион символов в месяц",
                    "free.volcengine": "Бесплатно 2 миллиона символов в месяц"
                },
                "zh-CN": {
                    "need_api_key": "需要API Key",
                    "dont_need_api_key": "不需要API Key",
                    "offline_api": "离线翻译",
                    "category": "分类",
                    "name": "名称",
                    "concurrent": "并发",
                    "free_quota": "免费额度",
                    "help": "帮助 / 文档",
                    "support_languages": "支持语言",
                    "free": "免费",
                    "apply_for_free": "申请后免费使用",
                    "free.google": "每月免费50万字符",
                    "free.openai": "首次开通赠送5美元体验金",
                    "free.microsoft": "每月200万字符（仅限注册 Azure 后的前 12 个月）",
                    "free.amazon": "每月200万字符（仅限注册 AWS 后的前 12 个月）",
                    "free.deepl": "免费版每月50万字符",
                    "free.yandex": "未知",
                    "free.myMemory": "每天免费5万字符",
                    "free.baidu": "每月免费5万字符",
                    "free.alibaba": "每月免费100万字符",
                    "free.youdao": "新用户注册赠送50元体验金",
                    "free.tencent": "每月免费500万字符",
                    "free.niutrans": "需签到领取",
                    "free.caiyun": "每月免费100万字符",
                    "free.volcengine": "每月免费200万字符",
                },
                "zh-TW": {
                    "need_api_key": "需要API Key",
                    "dont_need_api_key": "不需要API Key",
                    "offline_api": "離線翻譯",
                    "category": "分類",
                    "name": "名稱",
                    "concurrent": "並發",
                    "free_quota": "免費額度",
                    "help": "幫助 / 文檔",
                    "support_languages": "支持語言",
                    "free": "免費",
                    "apply_for_free": "申請後免費使用",
                    "free.google": "每月免費50萬字符",
                    "free.openai": "首次開通贈送5美元體驗金",
                    "free.microsoft": "每月200萬字符（僅限註冊Azure後的前12個月）",
                    "free.amazon": "每月200萬字符（僅限註冊AWS後的前12個月）",
                    "free.deepl": "免費版每月50萬字符",
                    "free.yandex": "未知",
                    "free.myMemory": "每天免費5萬字符",
                    "free.baidu": "每月免費5萬字符",
                    "free.alibaba": "每月免費100萬字符",
                    "free.youdao": "新用戶註冊贈送50元體驗金",
                    "free.tencent": "每月免費500萬字符",
                    "free.niutrans": "需簽到領取",
                    "free.caiyun": "每月免費100萬字符",
                    "free.volcengine": "每月免費200萬字符"
                }
            },
        }
    },
    mounted() {
        this.parseLanguages()
        this.parseTranslateApis()
    },
    methods: {
        getLang(key) {
            return this.langs[this.lang][key] || ''
        },
        getItemName(item, filter = false) {
            let name = item.name
            if (filter) {
                name = name.replace('[Free] ', '')
                name = name.replace('[ApiKey] ', '')
                name = name.replace('[translators] ', '')
                name = name.replace('[builtin] ', '')
            } else {
                name = name.replace('[Free] ', '[' + this.getLang('free') + '] ')
                name = name.replace('[ApiKey] ', '[' + this.getLang('apply_for_free') + '] ')
            }
            name = name.split('﹍')[0].trim()
            return name
        },
        parseTranslateApis() {
            this.translate_apis_parse = []
            this.translate_apis.apis.forEach((api) => {
                api.children.forEach((item, index) => {
                    item.rowspan = index === 0 ? api.children.length : 0
                    item.category = api.type
                    item.nameFilter = this.getItemName(item, true)
                    item.nameReplace = this.getItemName(item, false)
                    item.nameAchors = item.nameReplace.replace(/ /g, '-')

                    this.translate_apis_parse.push(item)
                })
            })
            this.$forceUpdate()
        },
        parseLanguages() {
            this.languages = {}
            for (let item of i18n) {
                this.languages[item.code] = item.name
            }
        },
        toApi(item) {
            let el = document.getElementById(item.nameAchors)
            if (el) {
                el.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                })
            }
        },
    },
}
</script>