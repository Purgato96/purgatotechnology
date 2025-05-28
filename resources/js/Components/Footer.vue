<script setup>
const year = new Date().getFullYear();
</script>

<template>
    <footer class="text-white p-4 md:p-3 mt-5">
        <div class="grid grid-cols-2 gap-4">
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

            <div class="max-w-screen-lg mx-auto space-y-2 text-sm md:text-base">
                <h2 class="text-base/7 font-semibold  text-white">Selos de Parceria</h2>
                <div class="grid grid-cols-2 gap-2 place-items-center">
                    <div class="flex items-center justify-center">
                        <a href="https://cloudez.io/br?utm_campaign=partner-matheuspurgato8-purgato-technology-badge&utm_medium=badge&utm_source=partner&utm_content=partner&utm_term="><img
                            alt="Parceiro Cloudez - Purgato Technology" class="h-[60px] object-contain" width="220" height="60" src="https://files.cloudez.io/stamp/partner-dark-sm.svg"></a>
                    </div>
                    <div class="flex items-center justify-center">
                        <a href="https://cloudez.io/br?utm_campaign=partner-matheuspurgato8-purgato-technology-badge&utm_medium=badge&utm_source=partner&utm_content=lgpd&utm_term="><img
                            alt="Parceiro LGPD Cloudez - Purgato Technology" class="h-[60px] object-contain" width="220" height="60" src="https://files.cloudez.io/stamp/lgpd-dark-sm.svg"></a>
                    </div>
                </div>
            </div>
        </div>

    </footer>
</template>
