<template>
<!--  header  -->
    <header class="bg-[#2d3e50] text-[#82b3e8] p-10 ">
        <div>
                <Navigation/>
        </div>
    </header>
<!--  Conteúdo Principal da página  -->
    <main>
        <slot/>
    </main>

<!--  Footer  -->
    <footer class="bg-[#57789c] text-white text-center flex justify-center py-4" >
        <Footer/>
    </footer>
</template>

<script setup>
import Navigation from "@/Components/Navigation.vue";
import Footer from "@/Components/Footer.vue";
</script>
