import { useSSRContext, mergeProps, resolveComponent, withCtx, createVNode, resolveDynamicComponent, ref, unref, createTextVNode, createBlock, openBlock, Fragment, renderList, toDisplayString, Transition, createSSRApp, h as h$1 } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderVNode, ssrRenderStyle, ssrRenderSlot } from "vue/server-renderer";
import { EnvelopeIcon, PhoneIcon, UserIcon, CloudArrowUpIcon, LockClosedIcon, ArrowPathIcon, FingerPrintIcon, Bars3Icon, ChevronDownIcon, XMarkIcon } from "@heroicons/vue/24/outline";
import { createInertiaApp, Link, Head } from "@inertiajs/vue3";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
import { PopoverGroup, Popover, PopoverButton, PopoverPanel, Dialog, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$8 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/admin/Dashboard.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const Dashboard = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$2]]);
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Dashboard
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$7 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-black py-12 sm:py-32" }, _attrs))}><div class="mx-auto max-w-7xl px-12 lg:px-16"><div class="mx-auto max-w-2xl lg:text-center"><h2 class="text-base/7 font-semibold text-sky-600">Sobre a Purgato Technology</h2><p class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-sky-300 sm:text-5xl lg:text-balance"> Tecnologia Web de Alta Performance para Micro e Pequenas Empresas</p><p class="mt-6 text-lg/8 text-sky-600">Aprimorando a presença digital com desenvolvimento eficaz, SEO avançado e hospedagem de alta performance.</p></div><div class="mt-16 space-y-16 lg:space-y-24"><section><h3 class="text-3xl font-semibold text-sky-300">Nossa História</h3><p class="mt-4 text-lg text-sky-600"> Fundada em 18 de março de 2021, a Purgato Technology nasceu do desejo de levar o melhor da tecnologia web para micro e pequenas empresas. Desde a infância, sempre tive o sonho de trabalhar com tecnologia e criar soluções inovadoras. Ao perceber a dificuldade que muitas empresas enfrentam com sites lentos e servidores de baixa qualidade, decidi criar uma empresa que oferecesse serviços modernos e eficientes. </p><p class="mt-4 text-lg text-sky-600"> Nosso compromisso é resolver problemas reais: sites que não performam bem e servidores que não garantem estabilidade. Queremos proporcionar uma experiência digital superior, permitindo que nossos clientes alcancem melhores posições nos mecanismos de busca e sejam reconhecidos por Inteligências Artificiais. </p></section><section><h3 class="text-3xl font-semibold text-sky-300">Especializações</h3><p class="mt-4 text-lg text-sky-600"> Somos especializados na stack LIVT (Laravel, Inertia, Vue, TailwindCSS), além de oferecermos hospedagem de alta performance e desenvolvimento em WordPress. Com formação técnica em informática e em andamento no bacharelado em Sistemas de Informação, buscamos sempre implementar sistemas mais eficazes e inovadores. </p></section><section><h3 class="text-3xl font-semibold text-sky-300">Missão, Visão e Valores</h3><div class="mt-8 space-y-8"><div><h4 class="text-2xl font-semibold text-sky-300">Missão</h4><p class="mt-2 text-lg text-sky-600"> Oferecer soluções de desenvolvimento web eficientes, com foco em desempenho, segurança e inovação, ajudando micro e pequenas empresas a prosperarem no ambiente digital. </p></div><div><h4 class="text-2xl font-semibold text-sky-300">Visão</h4><p class="mt-2 text-lg text-sky-600"> Ser referência em desenvolvimento web e hospedagem de alta performance, reconhecida pela qualidade, compromisso com o cliente e resultados que geram crescimento. </p></div><div><h4 class="text-2xl font-semibold text-sky-300">Valores</h4><ul class="mt-2 space-y-2 text-lg text-sky-600"><li><strong>Excelência:</strong> Entregar sempre a melhor solução com alta performance e segurança.</li><li><strong>Inovação:</strong> Buscar novas tecnologias e práticas para melhorar continuamente nossos serviços.</li><li><strong>Compromisso:</strong> Priorizar a satisfação dos nossos clientes e suas necessidades.</li><li><strong>Transparência:</strong> Agir com ética e clareza em todas as etapas do processo.</li></ul></div></div></section></div></div></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/site/About.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const About = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$1]]);
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: About
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$6 = {
  __name: "Blog",
  __ssrInlineRender: true,
  props: {
    posts: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = resolveComponent("Head");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Head, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Blog</title><meta head-key="description" name="description" content="Seja bem vindo a página blog do site Purgato Technology!"${_scopeId}><meta head-key="keywords" name="keywords" content="laravel, inertia, Vue, Tailwindcss, Hospedagem, Performance, Cloud, Blog"${_scopeId}><meta head-key="author" name="author" content="Matheus Purgato | Laravel Developer"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "Blog"),
              createVNode("meta", {
                "head-key": "description",
                name: "description",
                content: "Seja bem vindo a página blog do site Purgato Technology!"
              }),
              createVNode("meta", {
                "head-key": "keywords",
                name: "keywords",
                content: "laravel, inertia, Vue, Tailwindcss, Hospedagem, Performance, Cloud, Blog"
              }),
              createVNode("meta", {
                "head-key": "author",
                name: "author",
                content: "Matheus Purgato | Laravel Developer"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="bg-white py-24 sm:py-32"><div class="mx-auto max-w-7xl px-6 lg:px-8"><div class="mx-auto max-w-2xl lg:mx-0"><h2 class="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Últimas Postagens</h2><p class="mt-2 text-lg/8 text-gray-600">Fique por dentro de tudo o que está acontecendo no mundo da tecnologia</p></div><div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"><!--[-->`);
      ssrRenderList(__props.posts, (post) => {
        var _a, _b, _c;
        _push(`<article class="flex max-w-xl flex-col items-start justify-between"><div class="flex items-center gap-x-4 text-xs"><time${ssrRenderAttr("datetime", post.created_at)} class="text-gray-500">${ssrInterpolate(new Date(post.created_at).toLocaleDateString())}</time><span class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">${ssrInterpolate(((_a = post.category) == null ? void 0 : _a.title) || "Sem categoria")}</span></div><div class="group relative"><h3 class="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600"><a${ssrRenderAttr("href", "/blog/" + post.id)}><span class="absolute inset-0"></span> ${ssrInterpolate(post.title)}</a></h3><p class="mt-5 line-clamp-3 text-sm/6 text-gray-600">${ssrInterpolate(post.description)}</p></div><div class="relative mt-8 flex items-center gap-x-4"><div class="text-sm/6"><p class="font-semibold text-gray-900"><a href="#"><span class="absolute inset-0"></span> ${ssrInterpolate(((_b = post.author) == null ? void 0 : _b.name) || "Autor Desconhecido")}</a></p><p class="text-gray-600">${ssrInterpolate(((_c = post.author) == null ? void 0 : _c.position) || "Redator")}</p></div></div></article>`);
      });
      _push(`<!--]--></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/site/Blog.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$6
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$5 = {
  __name: "Contact",
  __ssrInlineRender: true,
  setup(__props) {
    const contactLinks = {
      email: "mailto:contato@purgatotechnology.com.br",
      instagram: "https://www.instagram.com/purgatotechnology/",
      facebook: "https://www.facebook.com/PurgatoTechnology/",
      whatsapp: "https://wa.me/+5519993492828"
      // Substitua "seunumerodetelefone" pelo número no formato internacional (ex.: 5511999999999)
    };
    const features = [
      {
        name: "Email",
        description: "Entre em contato por e-mail para dúvidas, suporte ou solicitações personalizadas.",
        link: contactLinks.email,
        icon: EnvelopeIcon
      },
      {
        name: "WhatsApp",
        description: "Converse diretamente conosco no WhatsApp para atendimento rápido e eficiente.",
        link: contactLinks.whatsapp,
        icon: PhoneIcon
      },
      {
        name: "Instagram",
        description: "Acompanhe nossas novidades e entre em contato pelo nosso perfil no Instagram.",
        link: contactLinks.instagram,
        icon: UserIcon
      },
      {
        name: "Facebook",
        description: "Fique por dentro de nossas atualizações e fale conosco pelo Facebook.",
        link: contactLinks.facebook,
        icon: UserIcon
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = resolveComponent("Head");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Head, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Contato</title><meta head-key="description" name="description" content="Entre em contato conosco na Purgato Technology!"${_scopeId}><meta head-key="keywords" name="keywords" content="Contato, Email, WhatsApp, Instagram, Facebook, TailwindCSS"${_scopeId}><meta head-key="author" name="author" content="Matheus Purgato | Laravel Developer"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "Contato"),
              createVNode("meta", {
                "head-key": "description",
                name: "description",
                content: "Entre em contato conosco na Purgato Technology!"
              }),
              createVNode("meta", {
                "head-key": "keywords",
                name: "keywords",
                content: "Contato, Email, WhatsApp, Instagram, Facebook, TailwindCSS"
              }),
              createVNode("meta", {
                "head-key": "author",
                name: "author",
                content: "Matheus Purgato | Laravel Developer"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="bg-black py-12 sm:py-32"><div class="mx-auto max-w-7xl px-12 lg:px-16"><div class="mx-auto max-w-2xl lg:text-center"><h2 class="text-base/7 font-semibold text-sky-600">Entre em Contato Conosco</h2><p class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-sky-300 sm:text-5xl lg:text-balance"> Estamos prontos para te atender!</p><p class="mt-6 text-lg/8 text-sky-600">Tem dúvidas, sugestões ou precisa de suporte? Fale conosco pelos canais abaixo.</p></div><div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl"><dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"><!--[-->`);
      ssrRenderList(features, (feature) => {
        _push(`<div class="relative pl-16"><a${ssrRenderAttr("href", feature.link)}><dt class="text-base/7 font-semibold text-sky-300"><div class="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-sky-600">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(feature.icon), {
          class: "size-6 text-white",
          "aria-hidden": "true"
        }, null), _parent);
        _push(`</div> ${ssrInterpolate(feature.name)}</dt><dd class="mt-2 text-base/7 text-sky-600">${ssrInterpolate(feature.description)}</dd></a></div>`);
      });
      _push(`<!--]--></dl></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/site/Contact.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$5
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$4 = {
  __name: "Home",
  __ssrInlineRender: true,
  setup(__props) {
    const features = [
      {
        name: "Hospedagem Escalável",
        description: "Infraestrutura moderna que cresce com o seu negócio, garantindo alta disponibilidade e desempenho.",
        icon: CloudArrowUpIcon
      },
      {
        name: "SSL Gratuito e Segurança Reforçada",
        description: "Proteja seu site e os dados dos seus clientes com SSL gratuito, backups automáticos e firewall avançado.",
        icon: LockClosedIcon
      },
      {
        name: "Desenvolvimento Sob Medida",
        description: "Sites e sistemas personalizados com tecnologias modernas (Laravel, Vue, Tailwind) para máxima performance.",
        icon: ArrowPathIcon
      },
      {
        name: "Suporte Especializado 24/7",
        description: "Atendimento especializado para manter seu site sempre online e otimizado, sem dor de cabeça.",
        icon: FingerPrintIcon
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = resolveComponent("Head");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Head, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Home</title><meta head-key="description" name="description" content="Seja bem vindo a página home do site Purgato Technology!"${_scopeId}><meta head-key="keywords" name="keywords" content="laravel, inertia, Vue, Tailwindcss, Hospedagem, Performance, Cloud, Blog"${_scopeId}><meta head-key="author" name="author" content="Matheus Purgato | Laravel Developer"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "Home"),
              createVNode("meta", {
                "head-key": "description",
                name: "description",
                content: "Seja bem vindo a página home do site Purgato Technology!"
              }),
              createVNode("meta", {
                "head-key": "keywords",
                name: "keywords",
                content: "laravel, inertia, Vue, Tailwindcss, Hospedagem, Performance, Cloud, Blog"
              }),
              createVNode("meta", {
                "head-key": "author",
                name: "author",
                content: "Matheus Purgato | Laravel Developer"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="bg-white"><div class="relative px-2 pt-2 lg:px-2"><div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true"><div class="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="${ssrRenderStyle({ "clip-path": "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" })}"></div></div><div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-48"><div class="text-center"><h1 class="text-5xl font-semibold tracking-tight text-balance text-[#2d3e50] sm:text-7xl">Purgato Technology</h1><div class="mt-8 text-center text-lg font-medium text-[#2d3e50] sm:text-xl/8"><h4 class="text-3xl font-bold tracking-tight text-[#2d3e50] sm:text-2xl">Soluções Web &amp; Cloud Sob Medida</h4><p class="mt-4 text-xl text-[#57789c] sm:text-lg"> Desenvolvimento, hospedagem e tecnologia para o seu negócio crescer sem limites. </p></div></div></div><div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true"><div class="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style="${ssrRenderStyle({ "clip-path": "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" })}"></div></div></div></div><div class="bg-black py-12 sm:py-32"><div class="mx-auto max-w-7xl px-12 lg:px-16"><div class="mx-auto max-w-2xl lg:text-center"><h2 class="text-base/7 font-semibold text-emerald-600">Hospedagem de Alta Performance</h2><p class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-emerald-300 sm:text-5xl lg:text-balance"> Seu site mais rápido, seguro e sempre no ar!</p><p class="mt-6 text-lg/8 text-emerald-600">Infraestrutura poderosa, escalável e confiável para garantir a melhor experiência para seus clientes.</p></div><div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl"><dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"><!--[-->`);
      ssrRenderList(features, (feature) => {
        _push(`<div class="relative pl-16"><dt class="text-base/7 font-semibold text-emerald-300"><div class="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-emerald-600">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(feature.icon), {
          class: "size-6 text-white",
          "aria-hidden": "true"
        }, null), _parent);
        _push(`</div> ${ssrInterpolate(feature.name)}</dt><dd class="mt-2 text-base/7 text-emerald-600">${ssrInterpolate(feature.description)}</dd></div>`);
      });
      _push(`<!--]--></dl></div></div></div><div class="bg-white"><div class="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8"><div class="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0"><svg viewBox="0 0 1024 1024" class="absolute top-1/2 left-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true"><circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7"></circle><defs><radialGradient id="759c1415-0410-454c-8f7c-9a820de03641"><stop stop-color="#7775D6"></stop><stop offset="1" stop-color="#E935C1"></stop></radialGradient></defs></svg><div class="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left"><h4 class="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">Precisando de uma Solução Rápida e Eficiente?</h4><p class="mt-6 text-lg/8 text-pretty text-gray-300">Estamos prontos para entender suas necessidades e oferecer as melhores soluções em hospedagem e desenvolvimento. Tire suas dúvidas ou solicite um orçamento agora mesmo!</p><div class="mt-10 flex items-center justify-center gap-x-6 lg:justify-start"><a${ssrRenderAttr("href", _ctx.route("site.contact"))} class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Contate-nos</a></div></div></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/site/Home.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$4
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<h1${ssrRenderAttrs(_attrs)}>Welcome to services page</h1>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/site/Services.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Services = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Services
}, Symbol.toStringTag, { value: "Module" }));
function t() {
  return t = Object.assign ? Object.assign.bind() : function(t4) {
    for (var e2 = 1; e2 < arguments.length; e2++) {
      var r2 = arguments[e2];
      for (var n2 in r2) ({}).hasOwnProperty.call(r2, n2) && (t4[n2] = r2[n2]);
    }
    return t4;
  }, t.apply(null, arguments);
}
var e = String.prototype.replace, r = /%20/g, n = "RFC3986", o = { default: n, formatters: { RFC1738: function(t4) {
  return e.call(t4, r, "+");
}, RFC3986: function(t4) {
  return String(t4);
} }, RFC1738: "RFC1738" }, i = Object.prototype.hasOwnProperty, u = Array.isArray, a = function() {
  for (var t4 = [], e2 = 0; e2 < 256; ++e2) t4.push("%" + ((e2 < 16 ? "0" : "") + e2.toString(16)).toUpperCase());
  return t4;
}(), s = function(t4, e2) {
  for (var r2 = e2 && e2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, n2 = 0; n2 < t4.length; ++n2) void 0 !== t4[n2] && (r2[n2] = t4[n2]);
  return r2;
}, f = { arrayToObject: s, assign: function(t4, e2) {
  return Object.keys(e2).reduce(function(t5, r2) {
    return t5[r2] = e2[r2], t5;
  }, t4);
}, combine: function(t4, e2) {
  return [].concat(t4, e2);
}, compact: function(t4) {
  for (var e2 = [{ obj: { o: t4 }, prop: "o" }], r2 = [], n2 = 0; n2 < e2.length; ++n2) for (var o2 = e2[n2], i2 = o2.obj[o2.prop], a2 = Object.keys(i2), s2 = 0; s2 < a2.length; ++s2) {
    var f2 = a2[s2], c2 = i2[f2];
    "object" == typeof c2 && null !== c2 && -1 === r2.indexOf(c2) && (e2.push({ obj: i2, prop: f2 }), r2.push(c2));
  }
  return function(t5) {
    for (; t5.length > 1; ) {
      var e3 = t5.pop(), r3 = e3.obj[e3.prop];
      if (u(r3)) {
        for (var n3 = [], o3 = 0; o3 < r3.length; ++o3) void 0 !== r3[o3] && n3.push(r3[o3]);
        e3.obj[e3.prop] = n3;
      }
    }
  }(e2), t4;
}, decode: function(t4, e2, r2) {
  var n2 = t4.replace(/\+/g, " ");
  if ("iso-8859-1" === r2) return n2.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(n2);
  } catch (t5) {
    return n2;
  }
}, encode: function(t4, e2, r2, n2, i2) {
  if (0 === t4.length) return t4;
  var u2 = t4;
  if ("symbol" == typeof t4 ? u2 = Symbol.prototype.toString.call(t4) : "string" != typeof t4 && (u2 = String(t4)), "iso-8859-1" === r2) return escape(u2).replace(/%u[0-9a-f]{4}/gi, function(t5) {
    return "%26%23" + parseInt(t5.slice(2), 16) + "%3B";
  });
  for (var s2 = "", f2 = 0; f2 < u2.length; ++f2) {
    var c2 = u2.charCodeAt(f2);
    45 === c2 || 46 === c2 || 95 === c2 || 126 === c2 || c2 >= 48 && c2 <= 57 || c2 >= 65 && c2 <= 90 || c2 >= 97 && c2 <= 122 || i2 === o.RFC1738 && (40 === c2 || 41 === c2) ? s2 += u2.charAt(f2) : c2 < 128 ? s2 += a[c2] : c2 < 2048 ? s2 += a[192 | c2 >> 6] + a[128 | 63 & c2] : c2 < 55296 || c2 >= 57344 ? s2 += a[224 | c2 >> 12] + a[128 | c2 >> 6 & 63] + a[128 | 63 & c2] : (c2 = 65536 + ((1023 & c2) << 10 | 1023 & u2.charCodeAt(f2 += 1)), s2 += a[240 | c2 >> 18] + a[128 | c2 >> 12 & 63] + a[128 | c2 >> 6 & 63] + a[128 | 63 & c2]);
  }
  return s2;
}, isBuffer: function(t4) {
  return !(!t4 || "object" != typeof t4 || !(t4.constructor && t4.constructor.isBuffer && t4.constructor.isBuffer(t4)));
}, isRegExp: function(t4) {
  return "[object RegExp]" === Object.prototype.toString.call(t4);
}, maybeMap: function(t4, e2) {
  if (u(t4)) {
    for (var r2 = [], n2 = 0; n2 < t4.length; n2 += 1) r2.push(e2(t4[n2]));
    return r2;
  }
  return e2(t4);
}, merge: function t2(e2, r2, n2) {
  if (!r2) return e2;
  if ("object" != typeof r2) {
    if (u(e2)) e2.push(r2);
    else {
      if (!e2 || "object" != typeof e2) return [e2, r2];
      (n2 && (n2.plainObjects || n2.allowPrototypes) || !i.call(Object.prototype, r2)) && (e2[r2] = true);
    }
    return e2;
  }
  if (!e2 || "object" != typeof e2) return [e2].concat(r2);
  var o2 = e2;
  return u(e2) && !u(r2) && (o2 = s(e2, n2)), u(e2) && u(r2) ? (r2.forEach(function(r3, o3) {
    if (i.call(e2, o3)) {
      var u2 = e2[o3];
      u2 && "object" == typeof u2 && r3 && "object" == typeof r3 ? e2[o3] = t2(u2, r3, n2) : e2.push(r3);
    } else e2[o3] = r3;
  }), e2) : Object.keys(r2).reduce(function(e3, o3) {
    var u2 = r2[o3];
    return e3[o3] = i.call(e3, o3) ? t2(e3[o3], u2, n2) : u2, e3;
  }, o2);
} }, c = Object.prototype.hasOwnProperty, l = { brackets: function(t4) {
  return t4 + "[]";
}, comma: "comma", indices: function(t4, e2) {
  return t4 + "[" + e2 + "]";
}, repeat: function(t4) {
  return t4;
} }, p = Array.isArray, h = String.prototype.split, y = Array.prototype.push, d = function(t4, e2) {
  y.apply(t4, p(e2) ? e2 : [e2]);
}, g = Date.prototype.toISOString, b = o.default, v = { addQueryPrefix: false, allowDots: false, charset: "utf-8", charsetSentinel: false, delimiter: "&", encode: true, encoder: f.encode, encodeValuesOnly: false, format: b, formatter: o.formatters[b], indices: false, serializeDate: function(t4) {
  return g.call(t4);
}, skipNulls: false, strictNullHandling: false }, m = function t3(e2, r2, n2, o2, i2, u2, a2, s2, c2, l2, y2, g2, b2, m2) {
  var j2, w2 = e2;
  if ("function" == typeof a2 ? w2 = a2(r2, w2) : w2 instanceof Date ? w2 = l2(w2) : "comma" === n2 && p(w2) && (w2 = f.maybeMap(w2, function(t4) {
    return t4 instanceof Date ? l2(t4) : t4;
  })), null === w2) {
    if (o2) return u2 && !b2 ? u2(r2, v.encoder, m2, "key", y2) : r2;
    w2 = "";
  }
  if ("string" == typeof (j2 = w2) || "number" == typeof j2 || "boolean" == typeof j2 || "symbol" == typeof j2 || "bigint" == typeof j2 || f.isBuffer(w2)) {
    if (u2) {
      var $2 = b2 ? r2 : u2(r2, v.encoder, m2, "key", y2);
      if ("comma" === n2 && b2) {
        for (var O2 = h.call(String(w2), ","), E2 = "", R2 = 0; R2 < O2.length; ++R2) E2 += (0 === R2 ? "" : ",") + g2(u2(O2[R2], v.encoder, m2, "value", y2));
        return [g2($2) + "=" + E2];
      }
      return [g2($2) + "=" + g2(u2(w2, v.encoder, m2, "value", y2))];
    }
    return [g2(r2) + "=" + g2(String(w2))];
  }
  var S2, x2 = [];
  if (void 0 === w2) return x2;
  if ("comma" === n2 && p(w2)) S2 = [{ value: w2.length > 0 ? w2.join(",") || null : void 0 }];
  else if (p(a2)) S2 = a2;
  else {
    var N2 = Object.keys(w2);
    S2 = s2 ? N2.sort(s2) : N2;
  }
  for (var T2 = 0; T2 < S2.length; ++T2) {
    var k2 = S2[T2], C = "object" == typeof k2 && void 0 !== k2.value ? k2.value : w2[k2];
    if (!i2 || null !== C) {
      var _ = p(w2) ? "function" == typeof n2 ? n2(r2, k2) : r2 : r2 + (c2 ? "." + k2 : "[" + k2 + "]");
      d(x2, t3(C, _, n2, o2, i2, u2, a2, s2, c2, l2, y2, g2, b2, m2));
    }
  }
  return x2;
}, j = Object.prototype.hasOwnProperty, w = Array.isArray, $ = { allowDots: false, allowPrototypes: false, arrayLimit: 20, charset: "utf-8", charsetSentinel: false, comma: false, decoder: f.decode, delimiter: "&", depth: 5, ignoreQueryPrefix: false, interpretNumericEntities: false, parameterLimit: 1e3, parseArrays: true, plainObjects: false, strictNullHandling: false }, O = function(t4) {
  return t4.replace(/&#(\d+);/g, function(t5, e2) {
    return String.fromCharCode(parseInt(e2, 10));
  });
}, E = function(t4, e2) {
  return t4 && "string" == typeof t4 && e2.comma && t4.indexOf(",") > -1 ? t4.split(",") : t4;
}, R = function(t4, e2, r2, n2) {
  if (t4) {
    var o2 = r2.allowDots ? t4.replace(/\.([^.[]+)/g, "[$1]") : t4, i2 = /(\[[^[\]]*])/g, u2 = r2.depth > 0 && /(\[[^[\]]*])/.exec(o2), a2 = u2 ? o2.slice(0, u2.index) : o2, s2 = [];
    if (a2) {
      if (!r2.plainObjects && j.call(Object.prototype, a2) && !r2.allowPrototypes) return;
      s2.push(a2);
    }
    for (var f2 = 0; r2.depth > 0 && null !== (u2 = i2.exec(o2)) && f2 < r2.depth; ) {
      if (f2 += 1, !r2.plainObjects && j.call(Object.prototype, u2[1].slice(1, -1)) && !r2.allowPrototypes) return;
      s2.push(u2[1]);
    }
    return u2 && s2.push("[" + o2.slice(u2.index) + "]"), function(t5, e3, r3, n3) {
      for (var o3 = n3 ? e3 : E(e3, r3), i3 = t5.length - 1; i3 >= 0; --i3) {
        var u3, a3 = t5[i3];
        if ("[]" === a3 && r3.parseArrays) u3 = [].concat(o3);
        else {
          u3 = r3.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
          var s3 = "[" === a3.charAt(0) && "]" === a3.charAt(a3.length - 1) ? a3.slice(1, -1) : a3, f3 = parseInt(s3, 10);
          r3.parseArrays || "" !== s3 ? !isNaN(f3) && a3 !== s3 && String(f3) === s3 && f3 >= 0 && r3.parseArrays && f3 <= r3.arrayLimit ? (u3 = [])[f3] = o3 : "__proto__" !== s3 && (u3[s3] = o3) : u3 = { 0: o3 };
        }
        o3 = u3;
      }
      return o3;
    }(s2, e2, r2, n2);
  }
}, S = function(t4, e2) {
  var r2 = /* @__PURE__ */ function(t5) {
    return $;
  }();
  if ("" === t4 || null == t4) return r2.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var n2 = "string" == typeof t4 ? function(t5, e3) {
    var r3, n3 = {}, o3 = (e3.ignoreQueryPrefix ? t5.replace(/^\?/, "") : t5).split(e3.delimiter, Infinity === e3.parameterLimit ? void 0 : e3.parameterLimit), i3 = -1, u3 = e3.charset;
    if (e3.charsetSentinel) for (r3 = 0; r3 < o3.length; ++r3) 0 === o3[r3].indexOf("utf8=") && ("utf8=%E2%9C%93" === o3[r3] ? u3 = "utf-8" : "utf8=%26%2310003%3B" === o3[r3] && (u3 = "iso-8859-1"), i3 = r3, r3 = o3.length);
    for (r3 = 0; r3 < o3.length; ++r3) if (r3 !== i3) {
      var a3, s3, c2 = o3[r3], l2 = c2.indexOf("]="), p2 = -1 === l2 ? c2.indexOf("=") : l2 + 1;
      -1 === p2 ? (a3 = e3.decoder(c2, $.decoder, u3, "key"), s3 = e3.strictNullHandling ? null : "") : (a3 = e3.decoder(c2.slice(0, p2), $.decoder, u3, "key"), s3 = f.maybeMap(E(c2.slice(p2 + 1), e3), function(t6) {
        return e3.decoder(t6, $.decoder, u3, "value");
      })), s3 && e3.interpretNumericEntities && "iso-8859-1" === u3 && (s3 = O(s3)), c2.indexOf("[]=") > -1 && (s3 = w(s3) ? [s3] : s3), n3[a3] = j.call(n3, a3) ? f.combine(n3[a3], s3) : s3;
    }
    return n3;
  }(t4, r2) : t4, o2 = r2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i2 = Object.keys(n2), u2 = 0; u2 < i2.length; ++u2) {
    var a2 = i2[u2], s2 = R(a2, n2[a2], r2, "string" == typeof t4);
    o2 = f.merge(o2, s2, r2);
  }
  return f.compact(o2);
};
class x {
  constructor(t4, e2, r2) {
    var n2, o2;
    this.name = t4, this.definition = e2, this.bindings = null != (n2 = e2.bindings) ? n2 : {}, this.wheres = null != (o2 = e2.wheres) ? o2 : {}, this.config = r2;
  }
  get template() {
    const t4 = `${this.origin}/${this.definition.uri}`.replace(/\/+$/, "");
    return "" === t4 ? "/" : t4;
  }
  get origin() {
    return this.config.absolute ? this.definition.domain ? `${this.config.url.match(/^\w+:\/\//)[0]}${this.definition.domain}${this.config.port ? `:${this.config.port}` : ""}` : this.config.url : "";
  }
  get parameterSegments() {
    var t4, e2;
    return null != (t4 = null == (e2 = this.template.match(/{[^}?]+\??}/g)) ? void 0 : e2.map((t5) => ({ name: t5.replace(/{|\??}/g, ""), required: !/\?}$/.test(t5) }))) ? t4 : [];
  }
  matchesUrl(t4) {
    var e2;
    if (!this.definition.methods.includes("GET")) return false;
    const r2 = this.template.replace(/[.*+$()[\]]/g, "\\$&").replace(/(\/?){([^}?]*)(\??)}/g, (t5, e3, r3, n3) => {
      var o3;
      const i3 = `(?<${r3}>${(null == (o3 = this.wheres[r3]) ? void 0 : o3.replace(/(^\^)|(\$$)/g, "")) || "[^/?]+"})`;
      return n3 ? `(${e3}${i3})?` : `${e3}${i3}`;
    }).replace(/^\w+:\/\//, ""), [n2, o2] = t4.replace(/^\w+:\/\//, "").split("?"), i2 = null != (e2 = new RegExp(`^${r2}/?$`).exec(n2)) ? e2 : new RegExp(`^${r2}/?$`).exec(decodeURI(n2));
    if (i2) {
      for (const t5 in i2.groups) i2.groups[t5] = "string" == typeof i2.groups[t5] ? decodeURIComponent(i2.groups[t5]) : i2.groups[t5];
      return { params: i2.groups, query: S(o2) };
    }
    return false;
  }
  compile(t4) {
    return this.parameterSegments.length ? this.template.replace(/{([^}?]+)(\??)}/g, (e2, r2, n2) => {
      var o2, i2;
      if (!n2 && [null, void 0].includes(t4[r2])) throw new Error(`Ziggy error: '${r2}' parameter is required for route '${this.name}'.`);
      if (this.wheres[r2] && !new RegExp(`^${n2 ? `(${this.wheres[r2]})?` : this.wheres[r2]}$`).test(null != (i2 = t4[r2]) ? i2 : "")) throw new Error(`Ziggy error: '${r2}' parameter '${t4[r2]}' does not match required format '${this.wheres[r2]}' for route '${this.name}'.`);
      return encodeURI(null != (o2 = t4[r2]) ? o2 : "").replace(/%7C/g, "|").replace(/%25/g, "%").replace(/\$/g, "%24");
    }).replace(this.config.absolute ? /(\.[^/]+?)(\/\/)/ : /(^)(\/\/)/, "$1/").replace(/\/+$/, "") : this.template;
  }
}
class N extends String {
  constructor(e2, r2, n2 = true, o2) {
    if (super(), this.t = null != o2 ? o2 : "undefined" != typeof Ziggy ? Ziggy : null == globalThis ? void 0 : globalThis.Ziggy, this.t = t({}, this.t, { absolute: n2 }), e2) {
      if (!this.t.routes[e2]) throw new Error(`Ziggy error: route '${e2}' is not in the route list.`);
      this.i = new x(e2, this.t.routes[e2], this.t), this.u = this.l(r2);
    }
  }
  toString() {
    const e2 = Object.keys(this.u).filter((t4) => !this.i.parameterSegments.some(({ name: e3 }) => e3 === t4)).filter((t4) => "_query" !== t4).reduce((e3, r2) => t({}, e3, { [r2]: this.u[r2] }), {});
    return this.i.compile(this.u) + function(t4, e3) {
      var r2, n2 = t4, i2 = function(t5) {
        if (!t5) return v;
        if (null != t5.encoder && "function" != typeof t5.encoder) throw new TypeError("Encoder has to be a function.");
        var e4 = t5.charset || v.charset;
        if (void 0 !== t5.charset && "utf-8" !== t5.charset && "iso-8859-1" !== t5.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var r3 = o.default;
        if (void 0 !== t5.format) {
          if (!c.call(o.formatters, t5.format)) throw new TypeError("Unknown format option provided.");
          r3 = t5.format;
        }
        var n3 = o.formatters[r3], i3 = v.filter;
        return ("function" == typeof t5.filter || p(t5.filter)) && (i3 = t5.filter), { addQueryPrefix: "boolean" == typeof t5.addQueryPrefix ? t5.addQueryPrefix : v.addQueryPrefix, allowDots: void 0 === t5.allowDots ? v.allowDots : !!t5.allowDots, charset: e4, charsetSentinel: "boolean" == typeof t5.charsetSentinel ? t5.charsetSentinel : v.charsetSentinel, delimiter: void 0 === t5.delimiter ? v.delimiter : t5.delimiter, encode: "boolean" == typeof t5.encode ? t5.encode : v.encode, encoder: "function" == typeof t5.encoder ? t5.encoder : v.encoder, encodeValuesOnly: "boolean" == typeof t5.encodeValuesOnly ? t5.encodeValuesOnly : v.encodeValuesOnly, filter: i3, format: r3, formatter: n3, serializeDate: "function" == typeof t5.serializeDate ? t5.serializeDate : v.serializeDate, skipNulls: "boolean" == typeof t5.skipNulls ? t5.skipNulls : v.skipNulls, sort: "function" == typeof t5.sort ? t5.sort : null, strictNullHandling: "boolean" == typeof t5.strictNullHandling ? t5.strictNullHandling : v.strictNullHandling };
      }(e3);
      "function" == typeof i2.filter ? n2 = (0, i2.filter)("", n2) : p(i2.filter) && (r2 = i2.filter);
      var u2 = [];
      if ("object" != typeof n2 || null === n2) return "";
      var a2 = l[e3 && e3.arrayFormat in l ? e3.arrayFormat : e3 && "indices" in e3 ? e3.indices ? "indices" : "repeat" : "indices"];
      r2 || (r2 = Object.keys(n2)), i2.sort && r2.sort(i2.sort);
      for (var s2 = 0; s2 < r2.length; ++s2) {
        var f2 = r2[s2];
        i2.skipNulls && null === n2[f2] || d(u2, m(n2[f2], f2, a2, i2.strictNullHandling, i2.skipNulls, i2.encode ? i2.encoder : null, i2.filter, i2.sort, i2.allowDots, i2.serializeDate, i2.format, i2.formatter, i2.encodeValuesOnly, i2.charset));
      }
      var h2 = u2.join(i2.delimiter), y2 = true === i2.addQueryPrefix ? "?" : "";
      return i2.charsetSentinel && (y2 += "iso-8859-1" === i2.charset ? "utf8=%26%2310003%3B&" : "utf8=%E2%9C%93&"), h2.length > 0 ? y2 + h2 : "";
    }(t({}, e2, this.u._query), { addQueryPrefix: true, arrayFormat: "indices", encodeValuesOnly: true, skipNulls: true, encoder: (t4, e3) => "boolean" == typeof t4 ? Number(t4) : e3(t4) });
  }
  p(e2) {
    e2 ? this.t.absolute && e2.startsWith("/") && (e2 = this.h().host + e2) : e2 = this.v();
    let r2 = {};
    const [n2, o2] = Object.entries(this.t.routes).find(([t4, n3]) => r2 = new x(t4, n3, this.t).matchesUrl(e2)) || [void 0, void 0];
    return t({ name: n2 }, r2, { route: o2 });
  }
  v() {
    const { host: t4, pathname: e2, search: r2 } = this.h();
    return (this.t.absolute ? t4 + e2 : e2.replace(this.t.url.replace(/^\w*:\/\/[^/]+/, ""), "").replace(/^\/+/, "/")) + r2;
  }
  current(e2, r2) {
    const { name: n2, params: o2, query: i2, route: u2 } = this.p();
    if (!e2) return n2;
    const a2 = new RegExp(`^${e2.replace(/\./g, "\\.").replace(/\*/g, ".*")}$`).test(n2);
    if ([null, void 0].includes(r2) || !a2) return a2;
    const s2 = new x(n2, u2, this.t);
    r2 = this.l(r2, s2);
    const f2 = t({}, o2, i2);
    if (Object.values(r2).every((t4) => !t4) && !Object.values(f2).some((t4) => void 0 !== t4)) return true;
    const c2 = (t4, e3) => Object.entries(t4).every(([t5, r3]) => Array.isArray(r3) && Array.isArray(e3[t5]) ? r3.every((r4) => e3[t5].includes(r4)) : "object" == typeof r3 && "object" == typeof e3[t5] && null !== r3 && null !== e3[t5] ? c2(r3, e3[t5]) : e3[t5] == r3);
    return c2(r2, f2);
  }
  h() {
    var t4, e2, r2, n2, o2, i2;
    const { host: u2 = "", pathname: a2 = "", search: s2 = "" } = "undefined" != typeof window ? window.location : {};
    return { host: null != (t4 = null == (e2 = this.t.location) ? void 0 : e2.host) ? t4 : u2, pathname: null != (r2 = null == (n2 = this.t.location) ? void 0 : n2.pathname) ? r2 : a2, search: null != (o2 = null == (i2 = this.t.location) ? void 0 : i2.search) ? o2 : s2 };
  }
  get params() {
    const { params: e2, query: r2 } = this.p();
    return t({}, e2, r2);
  }
  get routeParams() {
    return this.p().params;
  }
  get queryParams() {
    return this.p().query;
  }
  has(t4) {
    return this.t.routes.hasOwnProperty(t4);
  }
  l(e2 = {}, r2 = this.i) {
    null != e2 || (e2 = {}), e2 = ["string", "number"].includes(typeof e2) ? [e2] : e2;
    const n2 = r2.parameterSegments.filter(({ name: t4 }) => !this.t.defaults[t4]);
    return Array.isArray(e2) ? e2 = e2.reduce((e3, r3, o2) => t({}, e3, n2[o2] ? { [n2[o2].name]: r3 } : "object" == typeof r3 ? r3 : { [r3]: "" }), {}) : 1 !== n2.length || e2[n2[0].name] || !e2.hasOwnProperty(Object.values(r2.bindings)[0]) && !e2.hasOwnProperty("id") || (e2 = { [n2[0].name]: e2 }), t({}, this.m(r2), this.j(e2, r2));
  }
  m(e2) {
    return e2.parameterSegments.filter(({ name: t4 }) => this.t.defaults[t4]).reduce((e3, { name: r2 }, n2) => t({}, e3, { [r2]: this.t.defaults[r2] }), {});
  }
  j(e2, { bindings: r2, parameterSegments: n2 }) {
    return Object.entries(e2).reduce((e3, [o2, i2]) => {
      if (!i2 || "object" != typeof i2 || Array.isArray(i2) || !n2.some(({ name: t4 }) => t4 === o2)) return t({}, e3, { [o2]: i2 });
      if (!i2.hasOwnProperty(r2[o2])) {
        if (!i2.hasOwnProperty("id")) throw new Error(`Ziggy error: object passed as '${o2}' parameter is missing route model binding key '${r2[o2]}'.`);
        r2[o2] = "id";
      }
      return t({}, e3, { [o2]: i2[r2[o2]] });
    }, {});
  }
  valueOf() {
    return this.toString();
  }
}
function T(t4, e2, r2, n2) {
  const o2 = new N(t4, e2, r2, n2);
  return t4 ? o2.toString() : o2;
}
const k = { install(t4, e2) {
  const r2 = (t5, r3, n2, o2 = e2) => T(t5, r3, n2, o2);
  parseInt(t4.version) > 2 ? (t4.config.globalProperties.route = r2, t4.provide("route", r2)) : t4.mixin({ methods: { route: r2 } });
} };
const imageUrl = "/resources/img/site/logo-purgato-technology.png";
const _sfc_main$2 = {
  __name: "Navigation",
  __ssrInlineRender: true,
  setup(__props) {
    const mobileMenuOpen = ref(false);
    const services = [
      { name: "Desenvolvimento Web", href: "#" },
      { name: "Hospedagem Cloud PErsonalizada", href: "#" },
      { name: "Consultoria de SEO", href: "#" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global"><div class="flex lg:flex-1"><a${ssrRenderAttr("href", _ctx.route("site.home"))}><img class="h-17 w-auto"${ssrRenderAttr("src", imageUrl)} alt="Purgato Technology"></a></div><div class="flex lg:hidden"><button type="button" class="p-2 text-white">`);
      _push(ssrRenderComponent(unref(Bars3Icon), { class: "size-6" }, null, _parent));
      _push(`</button></div>`);
      _push(ssrRenderComponent(unref(PopoverGroup), { class: "hidden lg:flex lg:gap-x-12" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<a${ssrRenderAttr("href", _ctx.route("site.home"))} class="text-sm font-semibold text-white"${_scopeId}>Home</a><a${ssrRenderAttr("href", _ctx.route("site.about"))} class="text-sm font-semibold text-white"${_scopeId}>Sobre</a>`);
            _push2(ssrRenderComponent(unref(Popover), { class: "relative" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(PopoverButton), { class: "flex items-center gap-x-1 text-sm font-semibold text-white" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Serviços `);
                        _push4(ssrRenderComponent(unref(ChevronDownIcon), { class: "size-5 text-gray-400" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createTextVNode(" Serviços "),
                          createVNode(unref(ChevronDownIcon), { class: "size-5 text-gray-400" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(``);
                  _push3(ssrRenderComponent(unref(PopoverPanel), { class: "absolute left-0 z-10 mt-3 w-48 bg-white shadow-lg ring-1 ring-gray-900/5 rounded-lg" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="p-2"${_scopeId3}><!--[-->`);
                        ssrRenderList(services, (item) => {
                          _push4(`<a${ssrRenderAttr("href", item.href)} class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"${_scopeId3}>${ssrInterpolate(item.name)}</a>`);
                        });
                        _push4(`<!--]--></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "p-2" }, [
                            (openBlock(), createBlock(Fragment, null, renderList(services, (item) => {
                              return createVNode("a", {
                                key: item.name,
                                href: item.href,
                                class: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              }, toDisplayString(item.name), 9, ["href"]);
                            }), 64))
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(PopoverButton), { class: "flex items-center gap-x-1 text-sm font-semibold text-white" }, {
                      default: withCtx(() => [
                        createTextVNode(" Serviços "),
                        createVNode(unref(ChevronDownIcon), { class: "size-5 text-gray-400" })
                      ]),
                      _: 1
                    }),
                    createVNode(Transition, {
                      "enter-active-class": "transition ease-out duration-200",
                      "enter-from-class": "opacity-0 translate-y-1",
                      "enter-to-class": "opacity-100 translate-y-0",
                      "leave-active-class": "transition ease-in duration-150",
                      "leave-from-class": "opacity-100 translate-y-0",
                      "leave-to-class": "opacity-0 translate-y-1"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(PopoverPanel), { class: "absolute left-0 z-10 mt-3 w-48 bg-white shadow-lg ring-1 ring-gray-900/5 rounded-lg" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "p-2" }, [
                              (openBlock(), createBlock(Fragment, null, renderList(services, (item) => {
                                return createVNode("a", {
                                  key: item.name,
                                  href: item.href,
                                  class: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                }, toDisplayString(item.name), 9, ["href"]);
                              }), 64))
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<a${ssrRenderAttr("href", _ctx.route("site.blog"))} class="text-sm font-semibold text-white"${_scopeId}>Blog</a><a${ssrRenderAttr("href", _ctx.route("site.contact"))} class="text-sm font-semibold text-white"${_scopeId}>Contato</a>`);
          } else {
            return [
              createVNode("a", {
                href: _ctx.route("site.home"),
                class: "text-sm font-semibold text-white"
              }, "Home", 8, ["href"]),
              createVNode("a", {
                href: _ctx.route("site.about"),
                class: "text-sm font-semibold text-white"
              }, "Sobre", 8, ["href"]),
              createVNode(unref(Popover), { class: "relative" }, {
                default: withCtx(() => [
                  createVNode(unref(PopoverButton), { class: "flex items-center gap-x-1 text-sm font-semibold text-white" }, {
                    default: withCtx(() => [
                      createTextVNode(" Serviços "),
                      createVNode(unref(ChevronDownIcon), { class: "size-5 text-gray-400" })
                    ]),
                    _: 1
                  }),
                  createVNode(Transition, {
                    "enter-active-class": "transition ease-out duration-200",
                    "enter-from-class": "opacity-0 translate-y-1",
                    "enter-to-class": "opacity-100 translate-y-0",
                    "leave-active-class": "transition ease-in duration-150",
                    "leave-from-class": "opacity-100 translate-y-0",
                    "leave-to-class": "opacity-0 translate-y-1"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(PopoverPanel), { class: "absolute left-0 z-10 mt-3 w-48 bg-white shadow-lg ring-1 ring-gray-900/5 rounded-lg" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "p-2" }, [
                            (openBlock(), createBlock(Fragment, null, renderList(services, (item) => {
                              return createVNode("a", {
                                key: item.name,
                                href: item.href,
                                class: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              }, toDisplayString(item.name), 9, ["href"]);
                            }), 64))
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode("a", {
                href: _ctx.route("site.blog"),
                class: "text-sm font-semibold text-white"
              }, "Blog", 8, ["href"]),
              createVNode("a", {
                href: _ctx.route("site.contact"),
                class: "text-sm font-semibold text-white"
              }, "Contato", 8, ["href"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav>`);
      _push(ssrRenderComponent(unref(Dialog), {
        as: "div",
        class: "relative z-50 lg:hidden",
        onClose: ($event) => mobileMenuOpen.value = false,
        open: mobileMenuOpen.value
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="fixed inset-0 bg-black/30"${_scopeId}></div>`);
            _push2(ssrRenderComponent(unref(DialogPanel), { class: "fixed top-0 right-0 w-64 h-full bg-white shadow-lg p-6" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex justify-between items-center"${_scopeId2}><span class="text-lg font-semibold text-gray-900"${_scopeId2}>Menu</span><button${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(XMarkIcon), { class: "size-6 text-gray-700" }, null, _parent3, _scopeId2));
                  _push3(`</button></div><div class="mt-6 flex flex-col space-y-4"${_scopeId2}><a${ssrRenderAttr("href", _ctx.route("site.home"))} class="text-sm font-semibold text-gray-900"${_scopeId2}>Home</a><a${ssrRenderAttr("href", _ctx.route("site.about"))} class="text-sm font-semibold text-gray-900"${_scopeId2}>Sobre</a>`);
                  _push3(ssrRenderComponent(unref(Disclosure), null, {
                    default: withCtx(({ open }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(DisclosureButton), { class: "flex w-full justify-between text-sm font-semibold text-gray-900" }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Serviços `);
                              _push5(ssrRenderComponent(unref(ChevronDownIcon), {
                                class: [open ? "rotate-180" : "", "size-5"]
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createTextVNode(" Serviços "),
                                createVNode(unref(ChevronDownIcon), {
                                  class: [open ? "rotate-180" : "", "size-5"]
                                }, null, 8, ["class"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(DisclosurePanel), { class: "mt-2 space-y-2" }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(services, (item) => {
                                _push5(`<a${ssrRenderAttr("href", item.href)} class="block pl-4 text-sm text-gray-700 hover:bg-gray-100"${_scopeId4}>${ssrInterpolate(item.name)}</a>`);
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(), createBlock(Fragment, null, renderList(services, (item) => {
                                  return createVNode("a", {
                                    key: item.name,
                                    href: item.href,
                                    class: "block pl-4 text-sm text-gray-700 hover:bg-gray-100"
                                  }, toDisplayString(item.name), 9, ["href"]);
                                }), 64))
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(DisclosureButton), { class: "flex w-full justify-between text-sm font-semibold text-gray-900" }, {
                            default: withCtx(() => [
                              createTextVNode(" Serviços "),
                              createVNode(unref(ChevronDownIcon), {
                                class: [open ? "rotate-180" : "", "size-5"]
                              }, null, 8, ["class"])
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(unref(DisclosurePanel), { class: "mt-2 space-y-2" }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(services, (item) => {
                                return createVNode("a", {
                                  key: item.name,
                                  href: item.href,
                                  class: "block pl-4 text-sm text-gray-700 hover:bg-gray-100"
                                }, toDisplayString(item.name), 9, ["href"]);
                              }), 64))
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<a${ssrRenderAttr("href", _ctx.route("site.blog"))} class="text-sm font-semibold text-gray-900"${_scopeId2}>Blog</a><a${ssrRenderAttr("href", _ctx.route("site.contact"))} class="text-sm font-semibold text-gray-900"${_scopeId2}>Contato</a></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex justify-between items-center" }, [
                      createVNode("span", { class: "text-lg font-semibold text-gray-900" }, "Menu"),
                      createVNode("button", {
                        onClick: ($event) => mobileMenuOpen.value = false
                      }, [
                        createVNode(unref(XMarkIcon), { class: "size-6 text-gray-700" })
                      ], 8, ["onClick"])
                    ]),
                    createVNode("div", { class: "mt-6 flex flex-col space-y-4" }, [
                      createVNode("a", {
                        href: _ctx.route("site.home"),
                        class: "text-sm font-semibold text-gray-900"
                      }, "Home", 8, ["href"]),
                      createVNode("a", {
                        href: _ctx.route("site.about"),
                        class: "text-sm font-semibold text-gray-900"
                      }, "Sobre", 8, ["href"]),
                      createVNode(unref(Disclosure), null, {
                        default: withCtx(({ open }) => [
                          createVNode(unref(DisclosureButton), { class: "flex w-full justify-between text-sm font-semibold text-gray-900" }, {
                            default: withCtx(() => [
                              createTextVNode(" Serviços "),
                              createVNode(unref(ChevronDownIcon), {
                                class: [open ? "rotate-180" : "", "size-5"]
                              }, null, 8, ["class"])
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(unref(DisclosurePanel), { class: "mt-2 space-y-2" }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(services, (item) => {
                                return createVNode("a", {
                                  key: item.name,
                                  href: item.href,
                                  class: "block pl-4 text-sm text-gray-700 hover:bg-gray-100"
                                }, toDisplayString(item.name), 9, ["href"]);
                              }), 64))
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("a", {
                        href: _ctx.route("site.blog"),
                        class: "text-sm font-semibold text-gray-900"
                      }, "Blog", 8, ["href"]),
                      createVNode("a", {
                        href: _ctx.route("site.contact"),
                        class: "text-sm font-semibold text-gray-900"
                      }, "Contato", 8, ["href"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "fixed inset-0 bg-black/30" }),
              createVNode(unref(DialogPanel), { class: "fixed top-0 right-0 w-64 h-full bg-white shadow-lg p-6" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex justify-between items-center" }, [
                    createVNode("span", { class: "text-lg font-semibold text-gray-900" }, "Menu"),
                    createVNode("button", {
                      onClick: ($event) => mobileMenuOpen.value = false
                    }, [
                      createVNode(unref(XMarkIcon), { class: "size-6 text-gray-700" })
                    ], 8, ["onClick"])
                  ]),
                  createVNode("div", { class: "mt-6 flex flex-col space-y-4" }, [
                    createVNode("a", {
                      href: _ctx.route("site.home"),
                      class: "text-sm font-semibold text-gray-900"
                    }, "Home", 8, ["href"]),
                    createVNode("a", {
                      href: _ctx.route("site.about"),
                      class: "text-sm font-semibold text-gray-900"
                    }, "Sobre", 8, ["href"]),
                    createVNode(unref(Disclosure), null, {
                      default: withCtx(({ open }) => [
                        createVNode(unref(DisclosureButton), { class: "flex w-full justify-between text-sm font-semibold text-gray-900" }, {
                          default: withCtx(() => [
                            createTextVNode(" Serviços "),
                            createVNode(unref(ChevronDownIcon), {
                              class: [open ? "rotate-180" : "", "size-5"]
                            }, null, 8, ["class"])
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(unref(DisclosurePanel), { class: "mt-2 space-y-2" }, {
                          default: withCtx(() => [
                            (openBlock(), createBlock(Fragment, null, renderList(services, (item) => {
                              return createVNode("a", {
                                key: item.name,
                                href: item.href,
                                class: "block pl-4 text-sm text-gray-700 hover:bg-gray-100"
                              }, toDisplayString(item.name), 9, ["href"]);
                            }), 64))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("a", {
                      href: _ctx.route("site.blog"),
                      class: "text-sm font-semibold text-gray-900"
                    }, "Blog", 8, ["href"]),
                    createVNode("a", {
                      href: _ctx.route("site.contact"),
                      class: "text-sm font-semibold text-gray-900"
                    }, "Contato", 8, ["href"])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Navigation.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const year = (/* @__PURE__ */ new Date()).getFullYear();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "text-white text-center p-4 md:p-6 mt-10" }, _attrs))}><div class="max-w-screen-lg mx-auto space-y-2 text-sm md:text-base"><p> Criado e Desenvolvido por <span class="underline font-bold"><a href="https://purgatotechnology.com.br" target="_blank" rel="noopener noreferrer"> Purgato Technology </a></span></p><p>Purgato Technology - © Todos os Direitos Reservados 2021 - ${ssrInterpolate(unref(year))}</p><p class="text-xs md:text-sm">CNPJ: 41.270.594/0001-38 | I.E: 536.155.620.117</p></div></footer>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Guest",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><header class="bg-[#2d3e50] text-[#82b3e8] p-10"><div>`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`</div></header><main>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main><footer class="bg-[#57789c] text-white text-center flex justify-center py-4">`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</footer><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/Guest.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/admin/Dashboard.vue": __vite_glob_0_0, "./Pages/site/About.vue": __vite_glob_0_1, "./Pages/site/Blog.vue": __vite_glob_0_2, "./Pages/site/Contact.vue": __vite_glob_0_3, "./Pages/site/Home.vue": __vite_glob_0_4, "./Pages/site/Services.vue": __vite_glob_0_5 });
      let page2 = pages[`./Pages/${name}.vue`];
      page2.default.layout = page2.default.layout || _sfc_main;
      return page2;
    },
    setup({ App, props, plugin }) {
      return createSSRApp({
        render: () => h$1(App, props)
      }).use(plugin).use(k, {
        ...page.props.ziggy,
        locale: new URL(page.props.ziggy.location)
      }).component("Link", Link).component("Head", Head);
    }
  })
);
