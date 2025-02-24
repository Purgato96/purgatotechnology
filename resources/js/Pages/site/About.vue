<script setup>
import {ref} from "vue";

const tab =  ref('mission')
</script>

<template>
    <Head>
        <title>Sobre</title>
        <meta head-key="description" name="description"
              content="Seja bem vindo a página sobre do site Purgato Technology!">
        <meta head-key="keywords" name="keywords"
              content="laravel, inertia, Vue, Tailwindcss, Hospedagem, Performance, Cloud, Blog">
        <meta head-key="author" name="author" content="Matheus Purgato | Laravel Developer">
    </Head>
    <div class="bg-white dark:bg-black py-12 sm:py-32">
        <div class="mx-auto max-w-5xl px-12 lg:px-16">
            <div class="mx-auto max-w-2xl lg:text-center">
                <h2 class="text-base/7 font-semibold text-[#2d3e50] dark:text-sky-600">Sobre a Purgato Technology</h2>
                <p class="mt-2 text-2xl font-semibold tracking-tight text-pretty text-[#2d3e50] dark:text-sky-300 sm:text-3xl lg:text-balance">
                    Tecnologia Web de Alta Performance para Micro e Pequenas Empresas</p>
                <p class="mt-6 text-lg/8 text-[#2d3e50] dark:text-sky-600">Aprimorando a presença digital com desenvolvimento eficaz, SEO avançado e hospedagem de alta performance.</p>
            </div>

            <div class="mt-16 space-y-16 lg:space-y-24">
                <section>
                    <h3 class="text-3xl font-semibold text-[#2d3e50] dark:text-sky-300">Nossa História</h3>
                    <p class="mt-4 text-lg text-[#57789c] dark:text-sky-600">
                        Fundada em 18 de março de 2021, a Purgato Technology nasceu do desejo de levar o melhor da tecnologia web para micro e pequenas empresas. Desde a infância, sempre tive o sonho de trabalhar com tecnologia e criar soluções inovadoras. Ao perceber a dificuldade que muitas empresas enfrentam com sites lentos e servidores de baixa qualidade, decidi criar uma empresa que oferecesse serviços modernos e eficientes.
                    </p>
                    <p class="mt-4 text-lg text-[#57789c] dark:text-sky-600">
                        Nosso compromisso é resolver problemas reais: sites que não performam bem e servidores que não garantem estabilidade. Queremos proporcionar uma experiência digital superior, permitindo que nossos clientes alcancem melhores posições nos mecanismos de busca e sejam reconhecidos por Inteligências Artificiais.
                    </p>
                </section>

                <section>
                    <h3 class="text-3xl font-semibold text-[#2d3e50] dark:text-sky-300">Especializações</h3>
                    <p class="mt-4 text-lg text-[#57789c] dark:text-sky-600">
                        Somos especializados na stack LIVT (Laravel, Inertia, Vue, TailwindCSS), além de oferecermos hospedagem de alta performance e desenvolvimento em WordPress.
                        Com formação técnica em informática e em andamento no bacharelado em Sistemas de Informação, buscamos sempre implementar sistemas mais eficazes e inovadores.
                    </p>
                </section>

                <section>
                    <h3 class="text-3xl font-semibold text-[#2d3e50] dark:text-sky-300">Missão, Visão e Valores</h3>
                    <div class="inline-flex">
                        <button @click="tab = 'mission'" class="bg-emerald-700 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded-l">
                            Missão
                        </button>
                        <button @click="tab = 'vision'" class="bg-emerald-700 hover:bg-sky-700 text-white font-bold py-2 px-4 ">
                            Visão
                        </button>
                        <button @click="tab = 'values'"  class="bg-emerald-700 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded-r">
                            Valores
                        </button>
                    </div>
                    <div class="mt-8 space-y-8">
                        <div v-if="tab === 'mission'">
                            <h4 class="text-2xl font-semibold text-[#2d3e50] dark:text-sky-300">Missão</h4>
                            <p class="mt-2 text-lg text-[#57789c] dark:text-sky-600">
                                Oferecer soluções de desenvolvimento web eficientes, com foco em desempenho, segurança e inovação, ajudando micro e pequenas empresas a prosperarem no ambiente digital.
                            </p>
                        </div>
                        <div v-else-if="tab === 'vision'">
                            <h4 class="text-2xl font-semibold text-[#2d3e50] dark:text-sky-300">Visão</h4>
                            <p class="mt-2 text-lg text-[#57789c] dark:text-sky-600">
                                Ser referência em desenvolvimento web e hospedagem de alta performance, reconhecida pela qualidade, compromisso com o cliente e resultados que geram crescimento.
                            </p>
                        </div>
                        <div v-else>
                            <h4 class="text-2xl font-semibold text-[#2d3e50] dark:text-sky-300">Valores</h4>
                            <ul class="mt-2 space-y-2 text-lg text-[#57789c] dark:text-sky-600">
                                <li><strong>Excelência:</strong> Entregar sempre a melhor solução com alta performance e segurança.</li>
                                <li><strong>Inovação:</strong> Buscar novas tecnologias e práticas para melhorar continuamente nossos serviços.</li>
                                <li><strong>Compromisso:</strong> Priorizar a satisfação dos nossos clientes e suas necessidades.</li>
                                <li><strong>Transparência:</strong> Agir com ética e clareza em todas as etapas do processo.</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
