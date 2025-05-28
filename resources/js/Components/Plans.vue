<template>
    <section class="bg-gray-50 py-16 px-4" id="planos">
        <div class="max-w-7xl mx-auto">
            <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
                Nossos Planos e Serviços
            </h2>

            <!-- Mobile: versão empilhada -->
            <div class="grid grid-cols-1 gap-6 md:hidden">
                <div v-for="(plano, index) in planos" :key="index" class="bg-white rounded-2xl shadow p-6">
                    <h3 :class="plano.classe + ' text-xl font-bold mb-2'">{{ plano.nome }}</h3>
                    <ul class="space-y-3 text-sm">
                        <li v-for="(item, i) in servicos" :key="i">
                            <span class="font-medium">{{ item }}:</span>
                            <span>{{ plano.incluso[i] ? '✅' : '❌' }}</span>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Desktop: versão comparativa em colunas -->
            <div class="hidden md:grid md:grid-cols-4 gap-6 text-sm md:text-base">
                <!-- Coluna dos serviços -->
                <div class="bg-white rounded-2xl shadow p-6 font-bold text-gray-700 text-left">
                    <p class="mb-4 text-lg">Serviços inclusos:</p>
                    <ul class="space-y-3 text-gray-600 font-normal">
                        <li v-for="(item, i) in servicos" :key="i">{{ item }}</li>
                    </ul>
                </div>

                <!-- Colunas dos planos -->
                <div
                    v-for="(plano, index) in planos"
                    :key="index"
                    class="bg-white rounded-2xl shadow p-6 border"
                    :class="plano.borda"
                >
                    <h3 :class="plano.classe + ' text-xl font-bold mb-2'">{{ plano.nome }}</h3>
                    <ul class="space-y-3 text-center">
                        <li v-for="(inc, i) in plano.incluso" :key="i">{{ inc ? '✅' : '❌' }}</li>
                    </ul>
                </div>
            </div>

            <div class="text-center mt-12">
                <a
                    href="https://wa.me/5519993492828?text=Olá%20quero%20saber%20mais%20sobre%20os%20planos%20da%20Purgato%20Technology"
                    class="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-full transition duration-300"
                >
                    Fale com a gente no WhatsApp
                </a>
            </div>
        </div>
    </section>
</template>

<script setup>
const servicos = [
    'Hospedagem Cloud',
    'Alterações de Conteúdo',
    'Manutenção e Atualização',
    'Google Meu Negócio',
    'Google Analytics',
    'Google Search Console',
    'Relatórios',
    'Otimização para Google (SEO)',
    'Otimização para IA (ChatGPT)',
    'Suporte Personalizado'
]

const planos = [
    {
        nome: 'Essencial',
        classe: 'text-red-600',
        borda: 'border-gray-200',
        incluso: [true, true, true, false, false, false, false, false, false, false]
    },
    {
        nome: 'Profissional',
        classe: 'text-yellow-600',
        borda: 'border-yellow-500',
        incluso: [true, true, true, true, true, false, false, false, false, false]
    },
    {
        nome: 'Supremo',
        classe: 'text-green-600',
        borda: 'border-green-500',
        incluso: [true, true, true, true, true, true, true, true, true, true]
    }
]
</script>
