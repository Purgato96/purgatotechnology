<script setup>
import Guest from '@/Layouts/Guest.vue'

defineOptions({layout: Guest});
import {ref} from 'vue';

const price = '19,90';
const paymentLink = 'https://pay.kiwify.com.br/fR9OGC9';
const testimonials = [
    {name: 'João Silva', text: 'Este e-book mudou completamente minha estratégia de SEO! Resultados incríveis.'},
    {name: 'Maria Oliveira', text: 'Muito conteúdo prático e bem explicado. Vale cada centavo!'},
    {name: 'Carlos Mendes', text: 'Recomendo para todos que querem melhorar o ranqueamento no Google.'}
];
</script>

<template>
    <Head>
        <title>Guia Completo de SEO</title>
        <meta name="description" content="Domine o SEO e aumente seu tráfego orgânico com nosso guia completo."/>
        <meta head-key="keywords" name="keywords"
              content="tráfego orgânico, Domine o SEO, SEO, performance, Purgato Technology, tecnologia, sites rápidos, otimização, segurança, inovação, laravel, vue, tailwind">
        <meta head-key="author" name="author" content="Matheus Purgato, Desenvolvedor Laravel e Especialista em SEO">
    </Head>

    <div class="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
        <!-- Hero Section -->
        <header class="text-center py-16 bg-gradient-to-br from-blue-600 to-sky-400 text-white">
            <h1 class="text-5xl font-extrabold tracking-tight leading-tight">
                Guia Completo de SEO: Domine as Estratégias para Conquistar o Topo do Google
            </h1>
            <p class="mt-4 text-lg font-light max-w-3xl mx-auto">
                Aprenda as melhores estratégias de SEO para dominar os buscadores e aumentar sua presença online.
            </p>
            <a
                :href="paymentLink"
                class="mt-8 inline-block px-8 py-4 bg-emerald-400 text-black font-bold rounded-lg shadow-lg text-lg hover:bg-emerald-500 hover:scale-105 transition transform"
            >
                Comprar Agora por R$ {{ price }}
            </a>
        </header>

        <!-- Benefícios -->
        <section class="py-12 bg-gray-100">
            <h2 class="text-3xl font-semibold text-center">O que tem neste e-book?</h2>
            <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <!-- Fundamentos do SEO -->
                <div class="p-6 bg-white rounded-lg shadow-md">
                    <h3 class="text-xl font-bold mb-2">✅ Fundamentos do SEO</h3>
                    <p class="text-gray-600">
                        Descubra como funciona o algoritmo do Google e a importância do SEO para melhorar a visibilidade
                        do seu site.
                    </p>
                </div>

                <!-- SEO On-Page -->
                <div class="p-6 bg-white rounded-lg shadow-md">
                    <h3 class="text-xl font-bold mb-2">✅ SEO On-Page</h3>
                    <p class="text-gray-600">
                        Saiba como otimizar o conteúdo do seu site, desde títulos até meta descriptions, para obter
                        melhores resultados nos buscadores.
                    </p>
                </div>

                <!-- SEO Off-Page -->
                <div class="p-6 bg-white rounded-lg shadow-md">
                    <h3 class="text-xl font-bold mb-2">✅ SEO Off-Page</h3>
                    <p class="text-gray-600">
                        Aprenda estratégias para construir backlinks de qualidade e aumentar sua autoridade perante o
                        Google.
                    </p>
                </div>

                <!-- Pesquisa de Palavras-Chave -->
                <div class="p-6 bg-white rounded-lg shadow-md">
                    <h3 class="text-xl font-bold mb-2">✅ Pesquisa de Palavras-Chave</h3>
                    <p class="text-gray-600">
                        Descubra como encontrar as melhores palavras-chave para ranquear suas páginas com eficiência.
                    </p>
                </div>

                <!-- SEO Técnico -->
                <div class="p-6 bg-white rounded-lg shadow-md">
                    <h3 class="text-xl font-bold mb-2">✅ SEO Técnico</h3>
                    <p class="text-gray-600">
                        Saiba como melhorar a indexação, estruturar URLs adequadas, aumentar a velocidade do site e
                        corrigir erros de SEO.
                    </p>
                </div>

                <!-- Táticas Avançadas -->
                <div class="p-6 bg-white rounded-lg shadow-md">
                    <h3 class="text-xl font-bold mb-2">✅ Táticas Avançadas</h3>
                    <p class="text-gray-600">
                        Utilize hacks e estratégias avançadas para melhorar o tráfego orgânico rapidamente.
                    </p>
                </div>

                <!-- SEO para YouTube e Redes Sociais -->
                <div class="p-6 bg-white rounded-lg shadow-md">
                    <h3 class="text-xl font-bold mb-2">✅ SEO para YouTube e Redes Sociais</h3>
                    <p class="text-gray-600">
                        Aprenda como otimizar seus vídeos e publicações para alcançar mais visualizações e engajamento.
                    </p>
                </div>
            </div>
        </section>
        <section class="py-12 px-6 max-w-5xl mx-auto">
            <h2 class="text-3xl font-bold text-center text-gray-700">O que você vai aprender?</h2>
            <div class="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div class="p-6 bg-white shadow-md rounded-lg text-center">
                    <span class="text-blue-600 text-2xl font-bold">1</span>
                    <p class="mt-2">SEO On-Page e Off-Page</p>
                </div>
                <div class="p-6 bg-white shadow-md rounded-lg text-center">
                    <span class="text-blue-600 text-2xl font-bold">2</span>
                    <p class="mt-2">Técnicas avançadas de palavras-chave</p>
                </div>
                <div class="p-6 bg-white shadow-md rounded-lg text-center">
                    <span class="text-blue-600 text-2xl font-bold">3</span>
                    <p class="mt-2">Estratégias eficazes de Link Building</p>
                </div>
                <div class="p-6 bg-white shadow-md rounded-lg text-center">
                    <span class="text-blue-600 text-2xl font-bold">4</span>
                    <p class="mt-2">Evite penalizações do Google</p>
                </div>
            </div>
        </section>


        <!-- Para quem é este e-book? -->
        <section class="py-12 bg-gray-100 text-center">
            <h2 class="text-3xl font-semibold">Para quem é este e-book?</h2>
            <p class="mt-4 text-lg max-w-2xl mx-auto">
                Ideal para empreendedores, criadores de conteúdo e profissionais de marketing que desejam dominar o SEO!
            </p>
        </section>

        <!-- Depoimentos -->
        <section class="py-12 px-6 max-w-9xl mx-auto  text-center">
            <h2 class="text-3xl font-bold text-gray-700">O que nossos leitores dizem?</h2>
            <div class="mt-8 grid gap-6 sm:grid-cols-1 md:grid-cols-3">
                <div
                    v-for="(testimonial, index) in testimonials"
                    :key="index"
                    class="p-6 bg-white rounded-lg shadow-md"
                >
                    <p class="italic text-gray-600">"{{ testimonial.text }}"</p>
                    <p class="mt-3 text-sm font-semibold text-gray-900">- {{ testimonial.name }}</p>
                </div>
            </div>
        </section>

        <!-- FAQs -->
        <section class="py-12 bg-gray-100">
            <h2 class="text-3xl font-semibold text-center">Perguntas Frequentes (FAQs)</h2>
            <div class="mt-10 max-w-4xl mx-auto space-y-6">
                <!-- FAQ Item 1 -->
                <details class="group">
                    <summary
                        class="flex justify-between items-center p-4 bg-white rounded-lg shadow-md cursor-pointer text-lg font-medium group-hover:bg-gray-50"
                    >
                        Como o e-book será entregue?
                        <span class="transition-transform transform group-open:rotate-180">▲</span>
                    </summary>
                    <div class="mt-2 px-4 text-gray-600">
                        Após a compra, você será redirecionado para a página do ebook onde poderá fazer o download.
                    </div>
                </details>

                <!-- FAQ Item 2 -->
                <details class="group">
                    <summary
                        class="flex justify-between items-center p-4 bg-white rounded-lg shadow-md cursor-pointer text-lg font-medium group-hover:bg-gray-50"
                    >
                        Posso acessar o ebook no celular?
                        <span class="transition-transform transform group-open:rotate-180">▲</span>
                    </summary>
                    <div class="mt-2 px-4 text-gray-600">
                        Sim! O e-book está em formato PDF e pode ser acessado em qualquer dispositivo, incluindo
                        celulares, tablets e computadores.
                    </div>
                </details>

                <!-- FAQ Item 3 -->
                <details class="group">
                    <summary
                        class="flex justify-between items-center p-4 bg-white rounded-lg shadow-md cursor-pointer text-lg font-medium group-hover:bg-gray-50"
                    >
                        O conteúdo é indicado para iniciantes?
                        <span class="transition-transform transform group-open:rotate-180">▲</span>
                    </summary>
                    <div class="mt-2 px-4 text-gray-600">
                        Sim! O e-book cobre desde os fundamentos básicos até técnicas avançadas de SEO, ideal para todos
                        os níveis.
                    </div>
                </details>

                <!-- FAQ Item 4 -->
                <details class="group">
                    <summary
                        class="flex justify-between items-center p-4 bg-white rounded-lg shadow-md cursor-pointer text-lg font-medium group-hover:bg-gray-50"
                    >
                        O pagamento é seguro?
                        <span class="transition-transform transform group-open:rotate-180">▲</span>
                    </summary>
                    <div class="mt-2 px-4 text-gray-600">
                        Claro! A transação é processada por uma plataforma confiável, garantindo segurança em todas as
                        etapas do pagamento.
                    </div>
                </details>
            </div>
        </section>


        <!-- CTA Final -->
        <footer class="py-16 text-center bg-blue-600 text-white">
            <h2 class="text-4xl font-bold">Pronto para alavancar seus resultados?</h2>
            <p class="mt-4 text-lg">
                Clique no botão abaixo e adquira agora mesmo seu e-book!
            </p>
            <a
                :href="paymentLink"
                class="mt-8 inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-lg shadow-lg text-lg hover:bg-gray-200 hover:scale-105 transition transform"
            >
                Comprar Agora por R$ {{ price }}
            </a>
        </footer>
    </div>

</template>

<style scoped>
.shadow-md {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
