<script setup lang="ts">
function openConsent() {
    // @ts-ignore
    if (window.cookieconsent && typeof window.cookieconsent.open === 'function') {
        // @ts-ignore
        window.cookieconsent.open()
    }
}
</script>

<template>
    <button class="text-sm underline" @click="openConsent">
        Preferências de Cookies
    </button>
</template>
