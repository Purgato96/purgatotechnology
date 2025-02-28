<script setup>
const imageUrl = '/resources/img/site/logo-purgato-technology.png';
</script>

<template>
    <div class="flex lg:flex-1">
        <a :href="route('admin.home')"><img class="h-17 w-auto" :src="imageUrl" alt="Purgato Technology" /></a>
    </div>
</template>
