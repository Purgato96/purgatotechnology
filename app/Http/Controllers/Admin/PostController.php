<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Spatie\Image\Image;

class PostController extends Controller {
    /**
     * Display a listing of the resource.
     */
    public function index() {
        $posts = Post::with('author')
            ->orderBy('created_at', 'desc')
            ->paginate(10) // 10 posts por página
            ->onEachSide(1); // Define quantas páginas vizinhas aparecem nos links
            return Inertia::render('admin/Posts', [
                'posts' => $posts->through(fn($post) => [
                    'id' => $post->id,
                    'title' => $post->title,
                    'content' => Str::limit(strip_tags($post->content), 100), // Exibir resumo (removendo tags HTML)
                    'created_at' => $post->created_at->format('d/m/Y'),
                    'author' => $post->author ? $post->author->name : 'Anônimo',
                    'author_position' => $post->author ? $post->author->position : 'Escritor',
                    'href' => route('site.blog.show', $post->id), // Link para o post individual
                    'category' => $post->category, // Se a categoria existir no modelo.
                    'image' => $post->image ? asset("storage/{$post->image}") : null,
                ]),
            ]);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create() {
        $authors = User::query()->select('id', 'name')->get();
        return Inertia::render('admin/PostCreate', [
            'post' => new Post(),
            'authors' => $authors,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request) {
//        dd($request->all());
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'subtitle' => 'nullable|string|max:255',
            'content' => 'required|string',
            'category' => 'nullable|string|max:255',
            'author_id' => 'required|exists:users,id',
            'tags' => 'nullable|string',
            'image' => 'nullable|image|max:2048',
            'slug' => 'nullable|string|max:255|unique:posts,slug',
        ]);

        Post::query()->create($validated);

        return redirect()->route('admin.posts')->with('success', 'Post criado com sucesso!');
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post) {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post) {
        return Inertia::render('admin/PostEdit', [
            'post' => $post,
            'authors' => User::all(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Post $post) {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'subtitle' => 'nullable|string|max:255',
            'content' => 'required|string',
            'category' => 'nullable|string|max:255',
            'author_id' => 'required|exists:users,id',
            'tags' => 'nullable|string',
            'image' => 'nullable|image|max:2048',
        ]);

        $post->update($validated);

        return redirect()->route('admin.posts')->with('success', 'Post atualizado com sucesso!');
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post) {
        $post->delete();

        return redirect()->route('admin.posts')->with('success', 'Post deletado com sucesso!');
    }
}
