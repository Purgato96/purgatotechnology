<script setup>

</script>

<template>
    <header >
        <nav>
            <div>
                <h1>LOGO</h1>
                <ul>
                    <li>
                        <Link :href="route('site.home')">Home</Link>
                    </li>
                    <li>
                        <Link :href="route('users.index')">Listagem</Link>
                    </li>
                    <li>
                        <Link :href="route('site.contact')">Contato</Link>
                    </li>
                </ul>
            </div>

        </nav>
    </header>

    <main>
        <slot/>
    </main>
    <footer>
        <p>&copy;Copyright Todos os Direitos Reservados - Purgato Technology </p>
    </footer>
</template>

<style scoped>

</style>
