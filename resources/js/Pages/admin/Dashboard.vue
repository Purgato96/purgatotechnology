<script setup>
import { ref } from 'vue';
import { BellIcon } from '@heroicons/vue/24/outline';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';

const collapsed = ref(false);

const user = {
    name: 'Tom Cook',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};

const navigation = [
    { name: 'Dashboard', href: '/' },
    { name: 'Usuários', href: '/usuarios' },
    { name: 'Configurações', href: '/configuracoes' },
];

const userNavigation = [
    { name: 'Perfil', href: '#' },
    { name: 'Configurações', href: '#' },
    { name: 'Sair', href: '#' },
];
</script>

<template>
    <div class="flex h-screen bg-gray-100">
        <!-- Sidebar -->
        <aside
            :class="[
        'w-64 bg-white shadow-md h-full transition-all duration-300',
        { 'w-16': collapsed }
      ]"
        >
            <div class="p-4 flex justify-between items-center">
                <span v-if="!collapsed" class="text-xl font-bold">Painel</span>
                <button @click="collapsed = !collapsed" class="p-2 rounded hover:bg-gray-200">
                    <svg
                        class="w-6 h-6"
                        :class="{ 'rotate-180': collapsed }"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
            </div>

            <nav class="mt-4">
                <router-link
                    v-for="item in navigation"
                    :key="item.name"
                    :to="item.href"
                    class="block py-2 px-4 rounded hover:bg-gray-200"
                    :class="{ 'bg-gray-300': $route.path === item.href }"
                >
                    <span v-if="!collapsed">{{ item.name }}</span>
                </router-link>
            </nav>
        </aside>

        <!-- Main Content -->
        <div class="flex-1 flex flex-col">
            <!-- Header -->
            <header class="bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
                <h1 class="text-xl font-semibold">Dashboard</h1>
                <div class="flex items-center">
                    <button class="relative p-2 text-gray-300 hover:text-white">
                        <BellIcon class="size-6" />
                    </button>
                    <Menu as="div" class="relative ml-3">
                        <MenuButton class="flex items-center space-x-2 text-white">
                            <img class="w-8 h-8 rounded-full" :src="user.imageUrl" />
                            <span>{{ user.name }}</span>
                        </MenuButton>
                        <transition
                            enter-active-class="transition ease-out duration-100"
                            enter-from-class="transform opacity-0 scale-95"
                            enter-to-class="transform opacity-100 scale-100"
                            leave-active-class="transition ease-in duration-75"
                            leave-from-class="transform opacity-100 scale-100"
                            leave-to-class="transform opacity-0 scale-95"
                        >
                            <MenuItems class="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md">
                                <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }">
                                    <a :href="item.href" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">
                                        {{ item.name }}
                                    </a>
                                </MenuItem>
                            </MenuItems>
                        </transition>
                    </Menu>
                </div>
            </header>

            <!-- Main Content Area -->
            <main class="p-6 flex-1 bg-white">
                <slot />
            </main>
        </div>
    </div>
</template>

