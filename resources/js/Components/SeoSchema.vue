<script setup>
import { useHead } from '@vueuse/head'
const props = defineProps({
    schema: String
});

useHead({
    script: [
        {
            type: 'application/ld+json',
            children: props.schema
        }
    ]
});
</script>

<template>

</template>

<style scoped>

</style>
