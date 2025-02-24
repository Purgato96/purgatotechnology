<script setup>
import {EnvelopeIcon, PhoneIcon, UserIcon} from '@heroicons/vue/24/outline'


const contactLinks = {
    email: "mailto:contato@purgatotechnology.com.br",
    instagram: "https://www.instagram.com/purgatotechnology/",
    facebook: "https://www.facebook.com/PurgatoTechnology/",
    whatsapp: "https://wa.me/+5519993492828", // Substitua "seunumerodetelefone" pelo número no formato internacional (ex.: 5511999999999)
};
const features = [
    {
        name: 'Email',
        description:
            'Entre em contato por e-mail para dúvidas, suporte ou solicitações personalizadas.',
        link: contactLinks.email,
        icon: EnvelopeIcon,
    },
    {
        name: 'WhatsApp',
        description: 'Converse diretamente conosco no WhatsApp para atendimento rápido e eficiente.',
        link: contactLinks.whatsapp,
        icon: PhoneIcon,
    },
    {
        name: 'Instagram',
        description: 'Acompanhe nossas novidades e entre em contato pelo nosso perfil no Instagram.',
        link: contactLinks.instagram,
        icon: UserIcon,
    },
    {
        name: 'Facebook',
        description: 'Fique por dentro de nossas atualizações e fale conosco pelo Facebook.',
        link: contactLinks.facebook,
        icon: UserIcon,
    }
];
</script>

<template>
    <Head>
        <title>Contato</title>
        <meta head-key="description" name="description"
              content="Entre em contato conosco na Purgato Technology!">
        <meta head-key="keywords" name="keywords"
              content="Contato, Email, WhatsApp, Instagram, Facebook, TailwindCSS">
        <meta head-key="author" name="author" content="Matheus Purgato | Laravel Developer">

        <!-- Schema.org -->
        <script type="application/ld+json">
            {
                "@context": "https://schema.org",
                "@type": "ContactPage",
                "name": "Contato - Purgato Technology",
                "url": "https://purgatotechnology.com.br/contato",
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+55 19 99349-2828",
                    "contactType": "customer service",
                    "email": "contato@purgatotechnology.com.br"
                }
            }
        </script>

    </Head>

    <div class="dark:bg-black py-12 sm:py-32">
        <div class="mx-auto max-w-7xl px-12 lg:px-16">
            <div class="mx-auto max-w-2xl lg:text-center">
                <h2 class="text-base/7 font-semibold text-[#57789c] dark:text-sky-600">Entre em Contato Conosco</h2>
                <p class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-[#2d3e50] dark:text-sky-300 sm:text-5xl lg:text-balance">
                    Estamos prontos para te atender!</p>
                <p class="mt-6 text-lg/8 text-[#57789c] dark:text-sky-600">Tem dúvidas, sugestões ou precisa de suporte?
                    Fale conosco pelos canais abaixo.</p>
            </div>
            <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                    <div v-for="feature in features" :key="feature.name" class="relative pl-16">
                        <a :href="feature.link">
                            <dt class="text-base/7 font-semibold dark:text-sky-300">
                                <div
                                    class="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-[#2d3e50] dark:bg-sky-600">
                                    <component :is="feature.icon" class="size-6 text-white dark:text-white"
                                               aria-hidden="true"/>
                                </div>
                                {{ feature.name }}
                            </dt>
                            <dd class="mt-2 text-base/7 text-[#57789c] dark:text-sky-600">{{ feature.description }}</dd>
                        </a>
                    </div>
                </dl>
            </div>
        </div>
    </div>


</template>


<style scoped>

</style>
