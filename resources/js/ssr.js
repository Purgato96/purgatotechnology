import { createSSRApp, h } from 'vue'
import { ZiggyVue } from '../../vendor/tightenco/ziggy';
import { createInertiaApp, Link, Head } from '@inertiajs/vue3'
import createServer from '@inertiajs/vue3/server'
import { renderToString } from '@vue/server-renderer'
import Guest from "./Layouts/Guest.vue";


createServer(page =>
    createInertiaApp({
        page,
        render: renderToString,
        resolve: name => {
            const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
            let page = pages[`./Pages/${name}.vue`]
            page.default.layout = page.default.layout || Guest
            return page
        },
        setup({ App, props, plugin }) {
            return createSSRApp({
                render: () => h(App, props),
            }).use(plugin)
                .use(ZiggyVue, {
                    ...page.props.ziggy,
                    locale: new URL(page.props.ziggy.location),
                })
                .component('Link', Link)
                .component('Head', Head)

        },
    }),
)
