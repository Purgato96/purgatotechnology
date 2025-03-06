<script setup>
import { router } from '@inertiajs/vue3'
// Função de logout (usando Laravel/Inertia)
const logout = () => {
    router.get('/admin/logout')
}
</script>

<template>
    <div class="flex h-screen bg-gray-100">
    <!-- Sidebar -->
      <aside class="w-64 bg-gray-800 text-white flex flex-col">
        <div class="p-4 text-lg font-bold">Painel Admin</div>
        <nav class="flex-1 px-2 space-y-2">
          <a :href="route('admin.dashboard')" class="block px-4 py-2 rounded hover:bg-gray-700">Dashboard</a>
          <a :href="route('admin.users')" class="block px-4 py-2 rounded hover:bg-gray-700">Usuários</a>
          <a :href="route('admin.posts')" class="block px-4 py-2 rounded hover:bg-gray-700">Posts</a>
      </nav>
    </aside>

      <!-- Main Content -->
      <div class="flex-1 flex flex-col">
      <!-- Navbar -->
        <header class="bg-white shadow-sm py-4 px-6 flex justify-between items-center">
          <h1 class="text-xl font-bold">Painel Administrativo</h1>
          <div class="flex items-center space-x-4">
          <!-- Perfil -->
            <div class="flex items-center space-x-2">
              <span class="text-gray-700">{{ $page.props.auth.user.name ?? 'Usuário não identificado' }}</span>
          </div>

            <!-- Botão de Logout -->
            <button @click="logout" class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
            Logout
          </button>
        </div>
      </header>

        <!-- Page Content -->
        <main class="flex-1 p-6">
          <slot />
      </main>
    </div>
  </div>
</template>

