<script setup lang="ts">
import { onMounted, ref } from 'vue'

interface Props {
    slot: string // data-ad-slot
    format?: string // ex: "auto"
    fullWidth?: boolean // data-full-width-responsive
    style?: string // CSS inline custom
    clientId?: string // opcional (fallback)
    enabled?: boolean // toggle global
}

const props = withDefaults(defineProps<Props>(), {
    format: 'auto',
    fullWidth: true,
    style: 'display:block',
    clientId: undefined,
    enabled: true
})

const el = ref<HTMLElement | null>(null)
let pushed = false

function tryPush() {
    // @ts-ignore
    if (!window || !window.adsbygoogle || pushed === true) return
    try {
        // @ts-ignore
        (adsbygoogle = window.adsbygoogle || []).push({})
        pushed = true
    } catch (e) {
        // silencia erros do AdSense
    }
}

onMounted(() => {
    if (!props.enabled) return

    // Usar IntersectionObserver pra empurrar quando aparecer
    const obs = new IntersectionObserver((entries) => {
        if (entries.some(e => e.isIntersecting)) {
            tryPush()
            obs.disconnect()
        }
    }, { rootMargin: '200px' })

    if (el.value) obs.observe(el.value)
})
</script>

<template>
    <ins
        ref="el"
        class="adsbygoogle block"
        :style="style"
        :data-ad-client="clientId"
        :data-ad-slot="slot"
        :data-ad-format="format"
        :data-full-width-responsive="fullWidth ? 'true' : 'false'">
    </ins>
</template>
