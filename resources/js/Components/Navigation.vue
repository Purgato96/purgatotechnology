
<script setup>
import { ref } from 'vue'
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel
} from '@headlessui/vue'
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/vue/24/outline'

const mobileMenuOpen = ref(false)

const services = [
    { name: 'Desenvolvimento Web', href: '#' },
    { name: 'Hospedagem Cloud PErsonalizada', href: '#' },
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

                <!-- DROPDOWN -->
                <Popover class="relative">
                    <PopoverButton class="flex items-center gap-x-1 text-sm font-semibold text-white">
                        Serviços
                        <ChevronDownIcon class="size-5 text-gray-400" />
                    </PopoverButton>
                    <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
                        <PopoverPanel class="absolute left-0 z-10 mt-3 w-48 bg-white shadow-lg ring-1 ring-gray-900/5 rounded-lg">
                            <div class="p-2">
                                <a v-for="item in services" :key="item.name" :href="item.href" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    {{ item.name }}
                                </a>
                            </div>
                        </PopoverPanel>
                    </transition>
                </Popover>

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

                <div class="mt-6 flex flex-col space-y-4">
                    <a :href="route('site.home')" class="text-sm font-semibold text-gray-900">Home</a>
                    <a :href="route('site.about')" class="text-sm font-semibold text-gray-900">Sobre</a>

                    <!-- DROPDOWN MOBILE -->
                    <Disclosure v-slot="{ open }">
                        <DisclosureButton class="flex w-full justify-between text-sm font-semibold text-gray-900">
                            Serviços
                            <ChevronDownIcon :class="[open ? 'rotate-180' : '', 'size-5']" />
                        </DisclosureButton>
                        <DisclosurePanel class="mt-2 space-y-2">
                            <a v-for="item in services" :key="item.name" :href="item.href" class="block pl-4 text-sm text-gray-700 hover:bg-gray-100">
                                {{ item.name }}
                            </a>
                        </DisclosurePanel>
                    </Disclosure>

                    <a :href="route('site.blog')" class="text-sm font-semibold text-gray-900">Blog</a>
                    <a :href="route('site.contact')" class="text-sm font-semibold text-gray-900">Contato</a>
                </div>
            </DialogPanel>
        </Dialog>
</template>

