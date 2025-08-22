<script setup lang="ts">
import Guest from '@/Layouts/Guest.vue'
defineOptions({ layout: Guest })
</script>

<template>
    <div class="max-w-3xl mx-auto px-4 py-10 prose prose-slate">
        <h1>Política de Privacidade</h1>
        <p>Usamos cookies para personalizar anúncios via Google AdSense. Ao aceitar, você concorda com o armazenamento de cookies para anúncios.</p>

        <h2>Como gerenciar cookies</h2>
        <p>Você pode alterar suas preferências a qualquer momento utilizando o banner de cookies (quando disponível) ou ajustando as configurações do seu navegador.</p>

        <h2>Referências</h2>
        <ul>
            <li><a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener">Políticas do Google Ads</a></li>
        </ul>
    </div>
</template>

<style scoped>
.prose :where(a):not(:where(.not-prose, .not-prose *)) {
    text-decoration: none;
}
</style>
