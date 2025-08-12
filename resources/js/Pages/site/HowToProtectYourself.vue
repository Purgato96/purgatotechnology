<template>
    <Head>
        <title>{{ seoTitle }}</title>
        <meta name="description" :content="seoDescription" />
        <meta property="og:title" :content="seoTitle" />
        <meta property="og:description" :content="seoDescription" />
        <meta property="og:type" content="website" />
        <meta property="og:image" :content="ogImageUrl" />
        <meta property="og:url" :content="canonicalUrl" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" :href="canonicalUrl" />
<!--        <script type="application/ld+json">{{ jsonLd }}</script>-->
    </Head>

    <div id="top" class="font-sans antialiased text-slate-200 bg-slate-950 selection:bg-emerald-300/30 selection:text-slate-900">
        <!-- Header -->
        <header class="sticky top-0 z-50 bg-slate-950/80 backdrop-blur border-b border-slate-800">
            <nav class="container mx-auto px-4 py-3 flex justify-between items-center">
                <a href="#top" class="font-semibold text-sm tracking-widest uppercase text-slate-300 hover:text-white">
                    How to Protect Yourself in the Age of AI
                </a>
                <a :href="amazonUrl" target="_blank" rel="noopener noreferrer" class="px-4 py-2 rounded-xl bg-emerald-500 text-slate-900 font-bold hover:bg-emerald-400 transition-colors duration-200" data-analytics="header-cta-amazon">
                    Get on Amazon
                </a>
            </nav>
        </header>

        <main>
            <!-- Hero -->
            <section class="relative overflow-hidden">
                <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-600/20 via-transparent to-transparent"></div>
                <div class="container mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                            Stop AI Scams in 2025
                        </h1>
                        <p class="mt-5 text-lg md:text-xl text-slate-300">
                            A hands-on shield against deepfakes, voice clones, and AI-powered fraud. No jargon. Just what works.
                        </p>
                        <div class="mt-8">
                            <a :href="amazonUrl" target="_blank" rel="noopener noreferrer" class="px-6 py-3 rounded-2xl bg-emerald-500 text-slate-900 font-extrabold hover:bg-emerald-400 shadow-lg shadow-emerald-500/20 transition" data-analytics="hero-cta-amazon">
                                Get the eBook on Amazon
                            </a>
                        </div>
                        <ul class="mt-8 space-y-2 text-slate-300">
                            <li class="flex items-start gap-2"><span class="mt-1 h-2 w-2 rounded-full bg-emerald-400"></span> Spot deepfakes in seconds</li>
                            <li class="flex items-start gap-2"><span class="mt-1 h-2 w-2 rounded-full bg-emerald-400"></span> Protect your identity & money</li>
                            <li class="flex items-start gap-2"><span class="mt-1 h-2 w-2 rounded-full bg-emerald-400"></span> Parent-tested safety routines</li>
                            <li class="flex items-start gap-2"><span class="mt-1 h-2 w-2 rounded-full bg-emerald-400"></span> Step-by-step, no tech degree required</li>
                        </ul>
                    </div>
                    <div class="flex justify-center md:justify-end">
                        <img :src="imageUrl" alt="Book cover: How to Protect Yourself in the Age of AI" class="w-64 md:w-80 lg:w-96 rounded-2xl shadow-2xl ring-1 ring-white/10" width="384" height="576" loading="lazy" />
                    </div>
                </div>
            </section>

            <!-- Problem -->
            <section id="problem" class="py-16 md:py-20 border-t border-slate-800 bg-slate-950">
                <div class="container mx-auto px-4 max-w-4xl text-center">
                    <h2 class="text-3xl md:text-4xl font-bold">Why AI Changed Everything</h2>
                    <p class="mt-6 text-lg md:text-xl text-slate-300">
                        AI made scams faster, cheaper, and ultra-realistic. Voice clones, face swaps, and AI-crafted emails are tricking families and businesses every day. Here’s what’s at stake:
                    </p>
                    <ul class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                        <li class="p-6 rounded-2xl bg-slate-900/60 ring-1 ring-white/5">
                            <p class="font-semibold text-emerald-300">Financial Loss</p>
                            <p class="text-slate-300 mt-2">From bank drains to crypto theft—fraud loves speed. AI gives it wings.</p>
                        </li>
                        <li class="p-6 rounded-2xl bg-slate-900/60 ring-1 ring-white/5">
                            <p class="font-semibold text-emerald-300">Identity Theft</p>
                            <p class="text-slate-300 mt-2">Your images, voice, and data can be weaponized against you.</p>
                        </li>
                        <li class="p-6 rounded-2xl bg-slate-900/60 ring-1 ring-white/5">
                            <p class="font-semibold text-emerald-300">Psychological Impact</p>
                            <p class="text-slate-300 mt-2">Stress and fear thrive when everything looks “real.” Learn the tells.</p>
                        </li>
                    </ul>
                </div>
            </section>

            <!-- Benefits -->
            <section id="benefits" class="py-16 md:py-20 bg-slate-950">
                <div class="container mx-auto px-4 max-w-5xl">
                    <h2 class="text-3xl md:text-4xl font-bold text-center">What You’ll Learn</h2>
                    <div class="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div class="p-6 rounded-2xl bg-slate-900/60 ring-1 ring-white/5">
                            <h3 class="font-semibold text-lg text-emerald-300">Rapid Deepfake Detection</h3>
                            <p class="mt-2 text-slate-300">Micro-glitches, lighting, motion—spot the patterns fast.</p>
                        </div>
                        <div class="p-6 rounded-2xl bg-slate-900/60 ring-1 ring-white/5">
                            <h3 class="font-semibold text-lg text-emerald-300">Family Code System</h3>
                            <p class="mt-2 text-slate-300">Simple code-words that beat voice clones asking for money.</p>
                        </div>
                        <div class="p-6 rounded-2xl bg-slate-900/60 ring-1 ring-white/5">
                            <h3 class="font-semibold text-lg text-emerald-300">Post-Scam Recovery</h3>
                            <p class="mt-2 text-slate-300">A calm, step-by-step playbook when things go wrong.</p>
                        </div>
                        <div class="p-6 rounded-2xl bg-slate-900/60 ring-1 ring-white/5">
                            <h3 class="font-semibold text-lg text-emerald-300">Protection Stack</h3>
                            <p class="mt-2 text-slate-300">Curated tools for identity, devices, and accounts.</p>
                        </div>
                        <div class="p-6 rounded-2xl bg-slate-900/60 ring-1 ring-white/5">
                            <h3 class="font-semibold text-lg text-emerald-300">Privacy Routines</h3>
                            <p class="mt-2 text-slate-300">Weekly habits that quietly harden your life online.</p>
                        </div>
                        <div class="p-6 rounded-2xl bg-slate-900/60 ring-1 ring-white/5">
                            <h3 class="font-semibold text-lg text-emerald-300">Phishing Immunity</h3>
                            <p class="mt-2 text-slate-300">See through AI-crafted emails, DMs, and calls.</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Inside -->
            <section id="inside" class="py-16 md:py-20 border-t border-slate-800 bg-slate-950">
                <div class="container mx-auto px-4 max-w-5xl">
                    <h2 class="text-3xl md:text-4xl font-bold text-center">Inside the Book</h2>
                    <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="p-6 rounded-2xl bg-slate-900/60 ring-1 ring-white/5">
                            <h3 class="text-xl font-semibold text-emerald-300">Chapters</h3>
                            <ul class="mt-3 list-disc list-inside space-y-2 text-slate-300">
                                <li>The Rise of AI & New Threats</li>
                                <li>Deepfakes & Voice Cloning: How They Work</li>
                                <li>AI Phishing & Social Engineering</li>
                                <li>Protecting Money & Identity</li>
                                <li>Online Safety for Kids & Teens</li>
                                <li>What to Do After a Scam</li>
                                <li>Your Everyday Security Stack</li>
                            </ul>
                        </div>
                        <div class="p-6 rounded-2xl bg-slate-900/60 ring-1 ring-white/5">
                            <h3 class="text-xl font-semibold text-emerald-300">Quick Wins</h3>
                            <ul class="mt-3 list-disc list-inside space-y-2 text-slate-300">
                                <li><span class="font-semibold text-slate-100">Rule:</span> Never send money from a call—call back on a saved contact.</li>
                                <li><span class="font-semibold text-slate-100">Checklist:</span> Hover links, verify domains, assume urgency is a trap.</li>
                                <li><span class="font-semibold text-slate-100">2FA:</span> Everywhere that matters. Auth app > SMS.</li>
                                <li><span class="font-semibold text-slate-100">Family:</span> Set your code-word tonight. Five minutes.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Testimonials -->
            <section id="testimonials" class="py-16 md:py-20 bg-slate-950">
                <div class="container mx-auto px-4 max-w-5xl text-center">
                    <h2 class="text-3xl md:text-4xl font-bold">What Readers Say</h2>
                    <div class="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <figure class="p-6 rounded-2xl bg-slate-900/60 ring-1 ring-white/5">
                            <blockquote class="italic text-slate-300">“Clear, practical, and timely. We adopted the family code in one evening.”</blockquote>
                            <figcaption class="mt-4 font-semibold text-emerald-300">— A. P., Parent</figcaption>
                        </figure>
                        <figure class="p-6 rounded-2xl bg-slate-900/60 ring-1 ring-white/5">
                            <blockquote class="italic text-slate-300">“Finally a guide without fluff. The deepfake section is gold.”</blockquote>
                            <figcaption class="mt-4 font-semibold text-emerald-300">— C. E., Freelancer</figcaption>
                        </figure>
                        <figure class="p-6 rounded-2xl bg-slate-900/60 ring-1 ring-white/5">
                            <blockquote class="italic text-slate-300">“Made me calm and prepared. Exactly what I needed.”</blockquote>
                            <figcaption class="mt-4 font-semibold text-emerald-300">— J. C., Student</figcaption>
                        </figure>
                    </div>
                </div>
            </section>

            <!-- Final CTA -->
            <section id="buy" class="py-16 md:py-20 border-t border-slate-800 bg-gradient-to-b from-slate-950 to-slate-900 text-center">
                <div class="container mx-auto px-4 max-w-3xl">
                    <h2 class="text-3xl md:text-4xl font-bold">Don’t Wait to Be a Victim</h2>
                    <p class="mt-4 text-lg md:text-xl text-slate-300">Invest in peace of mind. Get the guide today.</p>
                    <div class="mt-8">
                        <a :href="amazonUrl" target="_blank" rel="noopener noreferrer" class="px-6 py-3 rounded-2xl bg-emerald-500 text-slate-900 font-extrabold hover:bg-emerald-400 shadow-lg shadow-emerald-500/20 transition" data-analytics="final-cta-amazon">
                            Get on Amazon
                        </a>
                    </div>
                </div>
            </section>
        </main>

        <!-- Footer -->
        <footer class="bg-slate-950 border-t border-slate-800 text-slate-400 py-8">
            <div class="container mx-auto px-4 text-center text-sm">
                <div class="mb-4 space-x-2">
                    <a href="#inside" class="hover:text-slate-200">Inside</a>
                    <span>·</span>
                    <a href="#benefits" class="hover:text-slate-200">Benefits</a>
                    <span>·</span>
                    <a href="#problem" class="hover:text-slate-200">Why Now</a>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { Head } from '@inertiajs/vue3'
import GuestLP from '@/Layouts/GuestLP.vue'

defineOptions({ layout: GuestLP })

const imageUrl = '/resources/img/site/how-to-protect-yourself-in-the-age-of-ai.jpg'

const props = defineProps({
    amazonUrl: { type: String, default: 'www.amazon.com/dp/B0FM4H787T/' },
    canonicalUrl: { type: String, default: 'www.amazon.com/dp/B0FM4H787T/' },
    ogImageUrl: { type: String, default: imageUrl }
})

const seoTitle = 'How to Protect Yourself in the Age of AI — Stop Deepfakes & Voice Clones (2025)'
const seoDescription = 'Practical, no‑jargon defense against AI scams: deepfakes, voice cloning, and phishing. Protect your family and money with checklists and routines that work.'

const jsonLd = computed(() => {
    return JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Organization',
                'name': 'Matheus de Souza Purgato',
                'url': props.canonicalUrl
            },
            {
                '@type': 'Book',
                'name': 'How to Protect Yourself in the Age of AI',
                'author': { '@type': 'Person', 'name': 'Matheus de Souza Purgato' },
                'bookFormat': 'https://schema.org/EBook',
                'inLanguage': 'en-US',
                'image': props.ogImageUrl,
                'description': seoDescription,
                'url': props.canonicalUrl,
                'publisher': { '@type': 'Organization', 'name': 'Matheus de Souza Purgato' }
            }
        ]
    })
})
</script>

<style scoped>
:focus-visible { outline: 2px solid #34d399; outline-offset: 3px; }
</style>
