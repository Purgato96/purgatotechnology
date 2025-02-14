<script setup>
const year = new Date().getFullYear();
</script>

<template>
    <footer class="text-white text-center p-4 md:p-6 mt-10">
        <div class="max-w-screen-lg mx-auto space-y-2 text-sm md:text-base">
            <p>
                Criado e Desenvolvido por
                <span class="underline font-bold">
          <a href="https://purgatotechnology.com.br" target="_blank" rel="noopener noreferrer">
            Purgato Technology
          </a>
        </span>
            </p>
            <p>Purgato Technology - &copy; Todos os Direitos Reservados 2021 - {{ year }}</p>
            <p class="text-xs md:text-sm">CNPJ: 41.270.594/0001-38 | I.E: 536.155.620.117</p>
        </div>
    </footer>
</template>
