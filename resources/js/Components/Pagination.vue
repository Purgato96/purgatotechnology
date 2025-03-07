<script setup>
import { computed } from 'vue';

const props = defineProps({
    links: Array,
});

const visibleLinks = computed(() => {
    const maxVisible = 5; // Número máximo de páginas visíveis
    const links = props.links.filter(link => !isNaN(link.label)); // Filtra apenas os números
    const currentIndex = links.findIndex(link => link.active);

    let start = Math.max(0, currentIndex - Math.floor(maxVisible / 2));
    let end = start + maxVisible;

    if (end > links.length) {
        end = links.length;
        start = Math.max(0, end - maxVisible);
    }

    return props.links.map(link => {
        if (!isNaN(link.label)) {
            return links.slice(start, end).includes(link) ? link : null;
        }
        return link; // Mantém os botões "Anterior" e "Próximo"
    }).filter(Boolean);
});
</script>

<template>
    <div class="flex justify-center mt-6 space-x-2">
        <template v-for="(link, index) in visibleLinks" :key="index">
            <button
                v-if="link.url"
                @click="$inertia.visit(link.url)"
                class="px-4 py-2 border rounded-md"
                :class="{ 'bg-gray-300': link.active }"
            >
                <span v-if="link.label.toLowerCase().includes('pagination.previous')">Anterior</span>
                <span v-else-if="link.label.toLowerCase().includes('pagination.next')">Próxima</span>
                <span v-else v-html="link.label"></span>
            </button>
        </template>
    </div>
</template>
