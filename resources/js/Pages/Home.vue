<script setup>
const props = defineProps({
    auth: Object,
    required: true
})
</script>

<template>
    <Head>
        <title>Home</title>
        <meta head-key="description" name="description" content="Seja bem vindo a página home do site Purgato Technology!">
    </Head>
<h1>Página Home</h1>

    {{ props.auth }}
</template>

<style scoped>

</style>
