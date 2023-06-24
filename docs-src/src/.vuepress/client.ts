import {defineClientConfig} from '@vuepress/client'
import Layout from './layouts/Layout.vue'
import Translators from './component/Translators.vue'

export default defineClientConfig({
    layouts: {
        Layout,
    },
    enhance({app}) {
        app.component('Translators', Translators)
    },
})