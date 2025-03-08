
<script setup>
import { ref } from 'vue'
import {
    Dialog,
    DialogPanel,
    PopoverGroup,
} from '@headlessui/vue'
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/vue/24/outline'

const mobileMenuOpen = ref(false)

const services = [
    { name: 'Desenvolvimento Web', href: '#' },
    { name: 'Hospedagem Cloud Personalizada', href: '#' },
    { name: 'Consultoria de SEO', href: '#' },
]
const imageUrl = '/resources/img/site/logo-purgato-technology.png';

</script>
<template>
        <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
            <!-- LOGO -->
            <div class="flex lg:flex-1">
                <a :href="route('site.home')"><img class="h-17 w-auto" :src="imageUrl" alt="Purgato Technology" /></a>
            </div>

            <!-- MENU MOBILE -->
            <div class="flex lg:hidden">
                <button type="button" class="p-2 text-white" @click="mobileMenuOpen = true">
                    <Bars3Icon class="size-6" />
                </button>
            </div>

            <!-- MENU DESKTOP -->
            <PopoverGroup class="hidden lg:flex lg:gap-x-12">
                <a :href="route('site.home')" class="text-sm font-semibold text-white">Home</a>
                <a :href="route('site.about')" class="text-sm font-semibold text-white">Sobre</a>
                <a :href="route('site.hosting')" class="text-sm font-semibold text-white">Hospedagem</a>
                <a :href="route('site.development')" class="text-sm font-semibold text-white">Desenvolvimento</a>
                <a :href="route('site.blog')" class="text-sm font-semibold text-white">Blog</a>
                <a :href="route('site.contact')" class="text-sm font-semibold text-white">Contato</a>
            </PopoverGroup>
        </nav>

        <!-- MENU MOBILE (OCUPA APENAS UM CANTO) -->
        <Dialog as="div" class="relative z-50 lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
            <div class="fixed inset-0 bg-black/30" />
            <DialogPanel class="fixed top-0 right-0 w-64 h-full bg-white shadow-lg p-6">
                <div class="flex justify-between items-center">
                    <span class="text-lg font-semibold text-gray-900">Menu</span>
                    <button @click="mobileMenuOpen = false">
                        <XMarkIcon class="size-6 text-gray-700" />
                    </button>
                </div>
<!--Mobile-->
                <div class="mt-6 flex flex-col space-y-4">
                    <a :href="route('site.home')" class="text-sm font-semibold text-gray-900">Home</a>
                    <a :href="route('site.about')" class="text-sm font-semibold text-gray-900">Sobre</a>
                    <a :href="route('site.hosting')" class="text-sm font-semibold text-gray-900">Hospedagem</a>
                    <a :href="route('site.development')" class="text-sm font-semibold text-gray-900">Desenvolvimento</a>
                    <a :href="route('site.blog')" class="text-sm font-semibold text-gray-900">Blog</a>
                    <a :href="route('site.contact')" class="text-sm font-semibold text-gray-900">Contato</a>
                </div>
            </DialogPanel>
        </Dialog>
</template>

