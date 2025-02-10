import './bootstrap';

import { createApp, h } from 'vue'
import { ZiggyVue } from '../../vendor/tightenco/ziggy';
import { createInertiaApp, Link, Head } from '@inertiajs/vue3'
import Guest from './Layouts/Guest.vue'

createInertiaApp({
    title: title => `${title} - Purgato Technology`,
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
        let page = pages[`./Pages/${name}.vue`]
        page.default.layout = page.default.layout || Guest
        return page
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .component('Link', Link)
            .component('Head', Head)
            .mount(el)
    },
    /*Prgress Bar*/
    progress: {
        delay: 250,
        color: '#006000',
        includeCSS: true,
        showSpinner: true,
    },
})

