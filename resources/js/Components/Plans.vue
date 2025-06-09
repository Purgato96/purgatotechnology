<template>
    <section class="bg-gray-50 py-16 px-4" id="planos">
        <div class="max-w-7xl mx-auto">
            <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
                Nossos Planos e Serviços
            </h2>

            <!-- Mobile: versão empilhada com explicações -->
            <div class="grid grid-cols-1 gap-6 md:hidden">
                <div
                    v-for="(plano, index) in planos"
                    :key="index"
                    class="bg-white rounded-2xl shadow p-6"
                >
                    <h3 :class="plano.classe + ' text-xl font-bold mb-4'">
                        {{ plano.nome }}
                    </h3>
                    <ul class="space-y-3 text-sm text-gray-700">
                        <li v-for="(item, i) in servicos" :key="i">
                            <div>
                                <button
                                    class="flex items-center justify-between w-full text-left font-medium"
                                    @click="toggleExpansao(i)"
                                >
                                    <span>{{ item }}</span>
                                    <span class="text-xl">{{ servicoExpandido[i] ? '−' : '+' }}</span>
                                </button>
                                <transition name="fade">
                                    <p v-if="servicoExpandido[i]" class="mt-2 text-gray-500 text-xs">
                                        {{ explicacoes[i] }}
                                    </p>
                                </transition>
                                <p class="text-right mt-1 text-sm">
                                    <span>{{ plano.incluso[i] ? '✅' : '❌' }}</span>
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Desktop: versão comparativa alinhada -->
            <div class="hidden md:block overflow-x-auto">
                <div class="grid grid-cols-4 gap-px bg-gray-200 text-sm md:text-base">
                    <!-- Cabeçalho -->
                    <div class="bg-white p-4 font-bold text-gray-700">Serviço</div>
                    <div
                        v-for="plano in planos"
                        :key="plano.nome"
                        class="bg-white p-4 font-bold text-center"
                        :class="plano.classe"
                    >
                        {{ plano.nome }}
                    </div>

                    <!-- Linhas sincronizadas -->
                    <template v-for="(servico, i) in servicos" :key="i">
                        <!-- Nome do serviço com toggle -->
                        <div class="bg-white p-4 text-gray-700">
                            <button
                                class="flex justify-between w-full font-medium hover:text-red-600 transition"
                                @click="toggleExpansao(i)"
                            >
                                <span>{{ servico }}</span>
                                <span class="text-xl">{{ servicoExpandido[i] ? '−' : '+' }}</span>
                            </button>
                            <transition name="fade">
                                <p v-if="servicoExpandido[i]" class="mt-2 text-gray-500 text-sm">
                                    {{ explicacoes[i] }}
                                </p>
                            </transition>
                        </div>

                        <!-- Inclusões para cada plano -->
                        <div
                            v-for="(plano, pIndex) in planos"
                            :key="pIndex + '-' + i"
                            class="bg-white p-4 text-center"
                        >
                            {{ plano.incluso[i] ? '✅' : '❌' }}
                        </div>
                    </template>
                </div>
            </div>

            <!-- Botão WhatsApp -->
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
import { ref } from 'vue'

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

const explicacoes = [
    'Hospedamos seu site em servidores otimizados, com alta disponibilidade, backups e SSL incluído.',
    'Atualizamos textos, imagens, botões e outras informações conforme a necessidade da sua empresa.',
    'Garantimos que seu site esteja sempre funcional, com atualizações de sistema e plugins.',
    'Gerenciamos e otimizamos seu perfil no Google para atrair mais visitantes locais.',
    'Conectamos seu site ao Google Analytics para acompanhar visitas, comportamento e conversões.',
    'Configuramos o Search Console para monitorar seu desempenho nas buscas e corrigir erros.',
    'Enviamos relatórios periódicos com dados e sugestões para evolução contínua.',
    'Melhoramos seu posicionamento no Google com práticas modernas de SEO técnico e de conteúdo.',
    'Otimizações para IA como ChatGPT, Perplexity e Bing AI reconhecerem e recomendarem seu site.',
    'Oferecemos suporte ágil e humanizado para resolver dúvidas e implementar melhorias.'
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

const servicoExpandido = ref(Array(servicos.length).fill(false))

const toggleExpansao = (index) => {
    servicoExpandido.value[index] = !servicoExpandido.value[index]
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
    opacity: 0;
}
</style>
