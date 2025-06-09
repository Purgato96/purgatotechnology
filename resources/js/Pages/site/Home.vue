<script setup>
import Guest from '@/Layouts/Guest.vue'
defineOptions({ layout: Guest });
import {ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon} from '@heroicons/vue/24/outline'
import Plans from "@/Components/Plans.vue";
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

defineProps({
    posts: Object // `posts` agora é um objeto de paginação
});
const imageUrl = '/resources/img/site/mockup-site.png';
</script>


<template>
    <Head>
        <title>Home</title>
        <meta head-key="description" name="description"
              content="Soluções em desenvolvimento web, SEO e hospedagem cloud de alta performance para impulsionar seu negócio online.">
        <meta head-key="keywords" name="keywords"
              content="desenvolvimento web, hospedagem cloud, SEO, performance, Purgato Technology, tecnologia, sites rápidos, otimização, segurança, inovação, laravel, vue, tailwind">
        <meta head-key="author" name="author" content="Matheus Purgato, Desenvolvedor Laravel e Especialista em SEO">

    </Head>
    <!-- Hero Principal -->
    <div class="bg-white dark:bg-black">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
            <!-- Texto -->
            <div class="mx-auto max-w-2xl py-10 sm:py-16 md:py-24 text-center md:text-left">
                <h1 class="text-4xl md:text-5xl font-semibold tracking-tight text-[#57789c] dark:text-sky-600">
                    Purgato Technology
                </h1>
                <div class="mt-6 text-lg font-medium dark:text-sky-300">
                    <h4 class="text-2xl md:text-3xl font-bold text-[#57789c] dark:text-sky-300">
                        Criamos sites que guiam a sua empresa pro resultado digital que você precisa.
                    </h4>
                    <p class="mt-4 text-base md:text-xl text-[#57789c] dark:text-sky-300">
                        Desenvolvimento, gestão, performance, segurança para o seu negócio crescer sem limites.
                    </p>
                </div>
            </div>

            <!-- Imagem -->
            <div class="flex justify-center items-center">
                <img :src="imageUrl" alt="Desenvolvimento Web - Purgato Technology" class="w-full max-w-[400px] md:max-w-[550px] h-auto">
            </div>
        </div>
    </div>

    <section class="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">
                Como cuidamos dos sites que desenvolvemos
            </h2>

            <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                <!-- Atualizações técnicas -->
                <div class="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all">
                    <h3 class="text-xl font-semibold text-red-600 mb-3">Atualizações Técnicas</h3>
                    <p class="text-gray-700">
                        Mantemos todos os sites sempre atualizados com as versões mais recentes das tecnologias e com as correções de segurança necessárias, garantindo estabilidade e proteção contínua.
                    </p>
                </div>

                <!-- Monitoramento de performance -->
                <div class="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all">
                    <h3 class="text-xl font-semibold text-yellow-600 mb-3">Monitoramento de Performance</h3>
                    <p class="text-gray-700">
                        Monitoramos constantemente o desempenho dos sites (tempo de carregamento, responsividade e estabilidade) e realizamos otimizações para garantir uma experiência fluida ao usuário.
                    </p>
                </div>

                <!-- Otimização contínua para SEO -->
                <div class="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all">
                    <h3 class="text-xl font-semibold text-green-600 mb-3">SEO Técnico e IA</h3>
                    <p class="text-gray-700">
                        Aplicamos ajustes frequentes em SEO técnico, estrutura de dados, sitemap e integrações com IA, visando melhores resultados nos buscadores e nas novas ferramentas de pesquisa com inteligência artificial.
                    </p>
                </div>

                <!-- Backup e segurança -->
                <div class="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all">
                    <h3 class="text-xl font-semibold text-blue-600 mb-3">Segurança e Backups</h3>
                    <p class="text-gray-700">
                        Realizamos backups periódicos e implementamos diversas camadas de segurança — incluindo firewall, autenticação reforçada e monitoramento proativo — para proteger os sites e os dados.
                    </p>
                </div>

                <!-- Suporte e manutenção -->
                <div class="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all">
                    <h3 class="text-xl font-semibold text-purple-700 mb-3">Suporte Contínuo</h3>
                    <p class="text-gray-700">
                        Estamos sempre disponíveis para ajustes, melhorias visuais, atualizações de conteúdo e suporte técnico. Nossa prioridade é manter o site em evolução constante.
                    </p>
                </div>

                <!-- Integrações e métricas -->
                <div class="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all">
                    <h3 class="text-xl font-semibold text-pink-600 mb-3">Métricas e Integrações</h3>
                    <p class="text-gray-700">
                        Integramos os sites com Google Analytics, Tag Manager, Pixel do Facebook, entre outras ferramentas — oferecendo dados estratégicos para decisões orientadas por métricas reais.
                    </p>
                </div>

            </div>
        </div>
    </section>
    <!--  LP | Site Institucional | One-Page  -->

    <section class="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto text-center">
            <h2 class="text-3xl font-bold text-gray-900 mb-10">Qual tipo de site ideal para você?</h2>
            <div class="grid gap-10 md:grid-cols-4">

                <!-- Landing Page -->
                <div class="bg-gray-100 rounded-2xl p-6 shadow hover:shadow-lg transition-all">
                    <h3 class="text-xl font-semibold text-red-600 mb-4">Landing Page (LP)</h3>
                    <p class="text-gray-700">
                        Página focada em conversão, usada para divulgar um serviço, produto ou campanha específica. Ideal para anúncios, lançamentos e capturas de leads. Design objetivo e estratégico para gerar ações rápidas.
                    </p>
                </div>

                <!-- Site Institucional -->
                <div class="bg-gray-100 rounded-2xl p-6 shadow hover:shadow-lg transition-all">
                    <h3 class="text-xl font-semibold text-yellow-600 mb-4">Site Institucional</h3>
                    <p class="text-gray-700">
                        Site básico que apresenta sua empresa, missão, serviços, equipe e formas de contato. Ideal para fortalecer a autoridade da marca e criar presença digital sólida e profissional.
                    </p>
                </div>

                <!-- One Page -->
                <div class="bg-gray-100 rounded-2xl p-6 shadow hover:shadow-lg transition-all">
                    <h3 class="text-xl font-semibold text-green-600 mb-4">One Page</h3>
                    <p class="text-gray-700">
                        Estrutura enxuta e direta em uma única página com navegação fluída por seções. Ideal para quem quer presença online rápida, elegante e sem muitas páginas internas.
                    </p>
                </div>

                <!-- Site Institucional + Blog -->
                <div class="bg-gray-100 rounded-2xl p-6 shadow hover:shadow-lg transition-all">
                    <h3 class="text-xl font-semibold text-blue-600 mb-4">Site Institucional + Blog</h3>
                    <p class="text-gray-700">
                        Site completo que apresenta sua empresa, missão, serviços, equipe e formas de contato e blog. Ideal para empresas ou criadores que querem atrair tráfego, educar o público e gerar leads
                    </p>
                </div>

            </div>
        </div>
    </section>

    <!-- Serviços de Hospedagem -->
    <Plans/>

    <!--  Blog  -->
    <div class="bg-gray-50 py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="text-center mx-auto  lg:mx-0">
                <h2 class="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Blog</h2>
                <p class="mt-2 text-lg/8 text-gray-600">Confira as últimas notícias da Purgato Technology.</p>
            </div>
            <div
                class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                <article v-for="post in posts.data" :key="post.id"
                         class="flex max-w-xl flex-col items-start justify-between">
                    <div class="flex items-center gap-x-4 text-xs">
                        <time :datetime="post.datetime" class="text-gray-500">{{ post.created_at }}</time>
                        <a :href="post.category.href"
                           class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{{
                                post.category
                            }}</a>
                    </div>
                    <img v-if="post.image" :src="post.image" :alt="post.title" class="rounded-md shadow-md" />
                    <div class="group relative">
                        <h3 class="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                            <a :href="`/blog/${post.slug}`">
                                <span class="absolute inset-0"/>
                                {{ post.title }}
                            </a>
                        </h3>
                        <p class="mt-5 line-clamp-3 text-sm/6 text-gray-600">{{ post.content }}</p>
                    </div>
                    <div class="relative mt-8 flex items-center gap-x-4">
                        <div class="text-sm/6">
                            <p class="font-semibold text-gray-900">
                                <a :href="post.author.href">
                                    <span class="absolute inset-0"/>
                                    {{ post.author || 'Anônimo' }}
                                </a>
                            </p>
                            <p class="text-gray-600">{{ post.author_position || 'Escritor' }}</p>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </div>
</template>
