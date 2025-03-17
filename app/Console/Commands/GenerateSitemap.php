<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;
use App\Models\Post;

class GenerateSitemap extends Command {
    protected $signature = 'sitemap:generate';
    protected $description = 'Gera o sitemap.xml com apenas as páginas públicas';

    public function handle() {
        $sitemap = Sitemap::create()
            ->add(Url::create('/'))
            ->add(Url::create('/sobre'))
            ->add(Url::create('/hospedagem'))
            ->add(Url::create('/desenvolvimento'))
            ->add(Url::create('/blog'))
            ->add(Url::create('/guia-completo-de-seo-domine-as-estrategias-para-conquistar-o-topo-do-google'))
            ->add(Url::create('/contato'));

        // Adiciona os posts dinamicamente
        $posts = Post::all();
        foreach ($posts as $post) {
            $sitemap->add(Url::create("/blog/{$post->slug}"));
        }

        // Salva o sitemap no diretório public/
        $sitemap->writeToFile(public_path('sitemap.xml'));

        $this->info('✅ Sitemap gerado com sucesso!');
    }
}
