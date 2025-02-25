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
        $posts = Post::orderBy('created_at', 'desc')->paginate(10); // 10 posts por página
        return Inertia::render('site/Blog', [
            'posts' => $posts]);
//        return Inertia::render('site/Blog');
    }

    public function contact() {
        return Inertia::render('site/Contact');
    }
}
