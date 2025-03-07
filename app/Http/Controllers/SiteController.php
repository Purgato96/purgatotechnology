<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class SiteController extends Controller {
    public function index() {
        return Inertia::render('site/Home');
    }

    public function about() {
        return Inertia::render('site/About');
    }

    public function hosting() {
        return Inertia::render('site/Hosting');
    }

    public function development() {
        return Inertia::render('site/Development');
    }

    public function blog() {
        $posts = Post::with('author')
            ->orderBy('created_at', 'desc')
            ->paginate(9); // 9 posts por página

        return Inertia::render('site/Blog', [
            'posts' => $posts->through(fn($post) => [
                'id' => $post->id,
                'title' => $post->title,
                'content' => Str::limit(strip_tags($post->content), 100), // Exibir resumo (removendo tags HTML)
                'created_at' => $post->created_at->format('d/m/Y'),
                'author' => $post->author ? $post->author->name : 'Anônimo',
                'author_position' => $post->author ? $post->author->position : 'Escritor',
                'href' => route('site.blog.show', $post->id), // Link para o post individual
                'category' => $post->category, // Se a categoria existir no modelo.
                'image' => $post->image,
            ]),
        ]);
    }


    public function blogShow(Post $post) {
        // O benefício do Route Model Binding é que o post já será encontrado.

        return Inertia::render('site/PostShow', [
            'post' => [
                'id' => $post->id,
                'title' => $post->title,
                'content' => $post->content, // Conteúdo completo
                'created_at' => $post->created_at->format('d/m/Y'),
                'author' => $post->author ? $post->author->name : 'Anônimo',
                'category' => $post->category,
                'tags' => $post->tags, // Se existirem
            ],
        ]);
    }


    public function contact() {
        return Inertia::render('site/Contact');
    }

    public function login() {
        return Inertia::render('auth/Login');
    }
}
