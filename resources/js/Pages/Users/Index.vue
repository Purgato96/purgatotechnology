<script setup>

const props = defineProps({
        users: {
            type: Array,
            required: true,
        }
    }
)

</script>

<template>
    <Head>
        <title>Listagem de Usuários</title>
    </Head>
    <h1>Listagem de Usuários</h1>
    <h2>Tabela</h2>
    <table>
        <tr>
            <td>Nome</td>
            <td>Email</td>
        </tr>

        <tr v-for="user in users" :key="user.id">
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
        </tr>
    </table>
    <th></th>
    <h2>Lista</h2>
    <ul>
        <li v-for="user in users" :key="user.id">{{ user.name }} - {{ user.email }}</li>
    </ul>
</template>

<style scoped>

</style>
