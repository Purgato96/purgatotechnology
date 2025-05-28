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

    <section class="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div class="max-w-6xl mx-auto text-center">
            <h2 class="text-3xl font-bold text-gray-900 mb-8">O que eu faço na prática?</h2>
            <p class="text-gray-700 text-lg max-w-3xl mx-auto mb-12">
                Ofereço soluções digitais completas para empresas e profissionais que querem ir além do básico. Transformo ideias em resultados através de desenvolvimento web, métricas inteligentes e estratégias de performance orientadas por dados e inteligência artificial.
            </p>
            <div class="grid gap-8 md:grid-cols-2">

                <!-- Desenvolvimento -->
                <div class="bg-gray-100 rounded-xl p-6 text-left shadow hover:shadow-lg transition-all">
                    <h3 class="text-xl font-semibold text-red-600 mb-3">Desenvolvimento Web Estratégico</h3>
                    <p class="text-gray-700">
                        Criação de sites personalizados, rápidos e responsivos usando tecnologias modernas. Cada projeto é pensado para representar sua marca com qualidade e gerar conversão desde o primeiro clique.
                    </p>
                </div>

                <!-- Gestão de Métricas -->
                <div class="bg-gray-100 rounded-xl p-6 text-left shadow hover:shadow-lg transition-all">
                    <h3 class="text-xl font-semibold text-yellow-600 mb-3">Gestão de Métricas</h3>
                    <p class="text-gray-700">
                        Configuro ferramentas como Google Analytics, Tag Manager e Pixel do Facebook para rastrear o comportamento do usuário e tomar decisões baseadas em dados reais.
                    </p>
                </div>

                <!-- Performance e Resultados -->
                <div class="bg-gray-100 rounded-xl p-6 text-left shadow hover:shadow-lg transition-all">
                    <h3 class="text-xl font-semibold text-green-600 mb-3">Performance e Foco em Resultados</h3>
                    <p class="text-gray-700">
                        Otimização técnica e estratégica do seu site para melhorar a velocidade, a taxa de conversão e a experiência do usuário. Tudo com foco no que realmente importa: gerar resultados.
                    </p>
                </div>

                <!-- Otimização para Pesquisas com IA -->
                <div class="bg-gray-100 rounded-xl p-6 text-left shadow hover:shadow-lg transition-all">
                    <h3 class="text-xl font-semibold text-purple-700 mb-3">Otimização para Pesquisas com IA</h3>
                    <p class="text-gray-700">
                        Posiciono seu site não só no Google, mas também nas novas inteligências artificiais de busca, como ChatGPT, Bard e Perplexity, com foco em SEO técnico e estrutura de dados avançada.
                    </p>
                </div>

            </div>
        </div>
    </section>

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
    <!--  Contato  -->
    <div class="bg-white dark:bg-black">
        <div class="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
            <div
                class="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                <svg viewBox="0 0 1024 1024"
                     class="absolute top-1/2 left-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                     aria-hidden="true">
                    <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                            fill-opacity="0.7"/>
                    <defs>
                        <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                            <stop stop-color="#7775D6"/>
                            <stop offset="1" stop-color="#E935C1"/>
                        </radialGradient>
                    </defs>
                </svg>
                <div class="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                    <h4 class="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">Precisando de
                        uma Solução Rápida e Eficiente?</h4>
                    <p class="mt-6 text-lg/8 text-pretty text-gray-300">Estamos prontos para entender suas necessidades
                        e oferecer as melhores soluções em hospedagem e desenvolvimento. Tire suas dúvidas ou solicite
                        um orçamento agora mesmo!</p>
                    <div class="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                        <a :href="route('site.contact')"
                           class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Contate-nos</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
