<script setup>

</script>

<template>
    <header>
        <nav>
            <div>
                <h1>LOGO</h1>
                <ul>
                    <li>
                        <Link :href="route('site.home')">Home - JEITO BlackDev</Link>
                    </li>
                    <li>
                        <Link :href="route('users.index')">Listagem - JEITO BlackDev</Link>
                    </li>
                    <li>
                        <Link :href="route('site.contact')">Contato - JEITO BlackDev</Link>
                    </li>
                </ul>
            </div>

        </nav>
    </header>

    <main>
        <slot/>
    </main>
    <footer>
        <p>Copyright Todos os Direitos Reservados - Purgato Technology </p>
    </footer>
</template>

<style scoped>

</style>
