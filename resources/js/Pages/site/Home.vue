<script setup>
import {ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon} from '@heroicons/vue/24/outline'
// Serviços de Hospedagem
const features = [
    {
        name: 'Hospedagem Escalável',
        description:
            'Infraestrutura moderna que cresce com o seu negócio, garantindo alta disponibilidade e desempenho.',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'SSL Gratuito e Segurança Reforçada',
        description:
            'Proteja seu site e os dados dos seus clientes com SSL gratuito, backups automáticos e firewall avançado.',
        icon: LockClosedIcon,
    },
    {
        name: 'Desenvolvimento Sob Medida',
        description:
            'Sites e sistemas personalizados com tecnologias modernas (Laravel, Vue, Tailwind) para máxima performance.',
        icon: ArrowPathIcon,
    },
    {
        name: 'Suporte Especializado 24/7',
        description:
            'Atendimento especializado para manter seu site sempre online e otimizado, sem dor de cabeça.',
        icon: FingerPrintIcon,
    },
];

// Blog
const posts = [
    {
        id: 1,
        title: 'Boost your conversion rate',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: {title: 'Marketing', href: '#'},
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
        },

    },
    {
        id: 2,
        title: 'Boost your conversion rate',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: {title: 'Marketing', href: '#'},
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
        },

    }, {
        id: 3,
        title: 'Boost your conversion rate',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: {title: 'Marketing', href: '#'},
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
        },

    },

    // More posts...
]
</script>


<template>
    <Head>
        <title>Home</title>
        <meta head-key="description" name="description"
              content="Seja bem vindo a página home do site Purgato Technology!">
        <meta head-key="keywords" name="keywords"
              content="laravel, inertia, Vue, Tailwindcss, Hospedagem, Performance, Cloud, Blog">
        <meta head-key="author" name="author" content="Matheus Purgato | Laravel Developer">
    </Head>

    <!-- Hero Principal -->
    <div class="bg-white">
        <div class="relative px-2 pt-2 lg:px-2">
            <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                 aria-hidden="true">
                <div
                    class="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"/>
            </div>
            <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-48">
                <div class="text-center">
                    <h1 class="text-5xl font-semibold tracking-tight text-balance text-[#2d3e50] sm:text-7xl">Purgato
                        Technology</h1>

                    <div class="mt-8 text-center text-lg font-medium text-[#2d3e50] sm:text-xl/8">
                        <h4 class="text-3xl font-bold tracking-tight text-[#2d3e50] sm:text-2xl">Soluções Web & Cloud
                            Sob Medida</h4>
                        <p class="mt-4 text-xl text-[#57789c] sm:text-lg">
                            Desenvolvimento, hospedagem e tecnologia para o seu negócio crescer sem limites.
                        </p>
                    </div>
                </div>
            </div>
            <div
                class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                aria-hidden="true">
                <div
                    class="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"/>
            </div>
        </div>
    </div>
    <!-- Serviços de Hospedagem -->
    <div class="bg-black py-12 sm:py-32">
        <div class="mx-auto max-w-7xl px-12 lg:px-16">
            <div class="mx-auto max-w-2xl lg:text-center">
                <h2 class="text-base/7 font-semibold text-emerald-600">Hospedagem de Alta Performance</h2>
                <p class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-emerald-300 sm:text-5xl lg:text-balance">
                    Seu site mais rápido, seguro e sempre no ar!</p>
                <p class="mt-6 text-lg/8 text-emerald-600">Infraestrutura poderosa, escalável e confiável para garantir
                    a melhor experiência para seus clientes.</p>
            </div>
            <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                    <div v-for="feature in features" :key="feature.name" class="relative pl-16">
                        <dt class="text-base/7 font-semibold text-emerald-300">
                            <div
                                class="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-emerald-600">
                                <component :is="feature.icon" class="size-6 text-white" aria-hidden="true"/>
                            </div>
                            {{ feature.name }}
                        </dt>
                        <dd class="mt-2 text-base/7 text-emerald-600">{{ feature.description }}</dd>
                    </div>
                </dl>
            </div>
        </div>
    </div>
    <!--  Blog  -->
    <div class="bg-[#82b3e8] py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl lg:mx-0">
                <h3 class="text-4xl font-semibold tracking-tight text-pretty text-[#2d3e50] sm:text-5xl">Insights,
                    Tendências e Inovação na Tecnologia</h3>
                <p class="mt-2 text-lg/8 text[#2d3e50]">Mantenha-se atualizado com conteúdos exclusivos sobre
                    desenvolvimento, cloud, SEO e muito mais.
                    Fique à frente da concorrência e leve sua presença digital para o próximo nível!</p>
            </div>
            <div
                class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                <article v-for="post in posts" :key="post.id"
                         class="flex max-w-xl flex-col items-start justify-between">
                    <div class="flex items-center gap-x-4 text-xs">
                        <time :datetime="post.datetime" class="text-gray-500">{{ post.date }}</time>
                        <a :href="post.category.href"
                           class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{{
                                post.category.title
                            }}</a>
                    </div>
                    <div class="group relative">
                        <h3 class="mt-3 text-lg/6 font-semibold text-black group-hover:text-gray-600">
                            <a :href="post.href">
                                <span class="absolute inset-0"/>
                                {{ post.title }}
                            </a>
                        </h3>
                        <p class="mt-5 line-clamp-3 text-sm/6 text-[#2d3e50]">{{ post.description }}</p>
                    </div>
                    <div class="relative mt-8 flex items-center gap-x-4">
                        <div class="text-sm/6">
                            <p class="font-semibold text-gray-900">
                                <a :href="post.author.href">
                                    <span class="absolute inset-0"/>
                                    {{ post.author.name }}
                                </a>
                            </p>
                            <p class="text-gray-600">{{ post.author.role }}</p>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </div>
</template>
