<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostController extends Controller {
    /**
     * Display a listing of the resource.
     */
    public function index() {
        $posts = Post::all(); // Busca todos os posts do banco de dados
        return inertia('admin/Posts',
            ['posts' => $posts]); // Envia para o componente Vue

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
            'author' => 'required|exists:users,id',
            'tags' => 'nullable|string',
            'image' => 'nullable|image|max:2048',
            'slug' => 'nullable|string|max:255|unique:posts,slug',
        ]);

        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('posts', 'public');
        }

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
        $authors = User::query()->select('id', 'name')->get();

        return Inertia::render('admin/PostEdit', [
            'post' => $post,
            'authors' => $authors,
        ]);
        dd($post, $authors);
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
            'author' => 'required|exists:users,id',
            'tags' => 'nullable|string',
            'image' => 'nullable|image|max:2048',
        ]);

        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('posts', 'public');
        }

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
