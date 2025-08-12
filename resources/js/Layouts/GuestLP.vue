<template>
    <div class="min-h-screen bg-slate-950 text-slate-200 antialiased selection:bg-emerald-300/30 selection:text-slate-900">
        <!-- Header (slot-able) -->
        <header v-if="showHeader" class="sticky top-0 z-40 bg-slate-950/80 backdrop-blur border-b border-slate-800">
            <div class="container mx-auto px-4 py-3 flex items-center justify-between">
                <div class="flex items-center gap-3">
                    <slot name="brand">
                        <a :href="brandHref" class="font-semibold tracking-widest uppercase text-slate-300 hover:text-white text-sm">
                            {{ brand }}
                        </a>
                    </slot>
                </div>
                <div class="flex items-center gap-2">
                    <slot name="header-cta">
                        <!-- Empty by default (LPs costumam ter CTA no Hero) -->
                    </slot>
                </div>
            </div>
        </header>

        <!-- Main content -->
        <main id="content" class="min-h-[60vh]">
            <slot />
        </main>

        <!-- Footer (slot-able) -->
        <footer v-if="showFooter" class="bg-slate-950 border-t border-slate-800 text-slate-400 py-8">
            <div class="container mx-auto px-4 text-center text-sm">
                <slot name="footer">
                    <p class="mb-2">&copy; {{ new Date().getFullYear() }} {{ brand }}. All rights reserved.</p>
                    <p class="text-xs text-slate-500">This site provides general information and not legal/financial advice.</p>
                </slot>
            </div>
        </footer>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    showHeader: { type: Boolean, default: true },
    showFooter: { type: Boolean, default: true },
    brand:      { type: String,  default: 'Purgato Technology' },
    brandHref:  { type: String,  default: '/' }
})
</script>

<style scoped>
:focus-visible { outline: 2px solid #34d399; outline-offset: 3px; }
/* Remove blue tap highlight on mobile */
* { -webkit-tap-highlight-color: transparent; }
</style>
