<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SiteController extends Controller {
    public function index() {
        return Inertia::render('site/Home');
    }

    public function about() {
        return Inertia::render('site/About');
    }

    public function services() {
        return Inertia::render('site/Services');
    }

    public function blog() {
        $posts = Post::with('author')->latest()->get()->map(function ($post) {
            return [
                'id' => $post->id,
                'title' => $post->title,
                'description' => $post->description,
                'content' => $post->content,
                'date' => $post->created_at->format('d/m/Y'),
                'datetime' => $post->created_at->toISOString(),
                'author' => $post->author,
            ];
        });
        return Inertia::render('site/Blog', compact('posts'));
//        return Inertia::render('site/Blog');
    }

    public function contact() {
        return Inertia::render('site/Contact');
    }
}
