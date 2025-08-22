<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/png" sizes="32x32" href="resources/img/site/logo-purgato-technology.png">
    <link rel="apple-touch-icon" sizes="180x180" href="resources/img/site/logo-purgato-technology.png">
    <link rel="shortcut icon" href="{{ asset('img/site/favicon.ico') }}" type="image/png">

    <!-- Scripts -->
    @routes
    @vite(['resources/js/app.js'])
    @inertiaHead
    @vite('resources/css/app.css')

    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-NG28XJQV');</script>
    <!-- End Google Tag Manager -->
    <!-- Schema.org JSON-LD -->
    <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Purgato Technology",
            "url": "https://purgatotechnology.com.br",
            "description": "Empresa especializada em desenvolvimento web, SEO e hospedagem de alta performance.",
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+55 19 99349-2828",
                "contactType": "customer service",
                "email": "contato@purgatotechnology.com.br"
            },
            "sameAs": [
                "https://www.instagram.com/purgatotechnology",
                "https://www.facebook.com/purgatotechnology",
                "https://www.linkedin.com/company/purgato-technology/"
            ],
            "potentialAction": {
                "@type": "SearchAction",
                "target": "https://purgatotechnology.com.br/?s={search_term_string}",
                "query-input": "required name=search_term_string"
            }
        }
    </script>
</head>
<body class="font-sans antialiased">
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NG28XJQV"
                  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
@inertia
</body>
</html>
