<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class PostController extends Controller
{
    /**
     * Lista de posts (admin)
     */
    public function index()
    {
        $posts = Post::with('author')
            ->orderBy('created_at', 'desc')
            ->paginate(10)
            ->onEachSide(1);

        return Inertia::render('admin/Posts', [
            'posts' => $posts->through(fn ($post) => [
                'id' => $post->id,
                'slug' => $post->slug, // ✅ necessário no front
                'title' => $post->title,
                'content' => Str::limit(strip_tags($post->content), 100),
                'created_at' => $post->created_at->format('d/m/Y'),
                'author' => $post->author ? $post->author->name : 'Anônimo',
                'author_position' => $post->author ? $post->author->position : 'Escritor',
                'href' => route('site.blog.show', $post->slug), // ✅ usa slug no site
                'category' => $post->category,
                'image' => $post->image ? asset("storage/{$post->image}") : null,
            ]),
        ]);
    }

    /**
     * Form de criação
     */
    public function create()
    {
        $authors = User::query()->select('id', 'name')->get();

        return Inertia::render('admin/PostCreate', [
            'post' => new Post(),
            'authors' => $authors,
        ]);
    }

    /**
     * Cria post
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title'      => 'required|string|max:255',
            'subtitle'   => 'nullable|string|max:255',
            'content'    => 'required|string',
            'category'   => 'nullable|string|max:255',
            'author_id'  => 'required|exists:users,id',
            'tags'       => 'nullable|string',
            'image'      => 'nullable|image|max:2048',
            'slug'       => 'nullable|string|max:255|unique:posts,slug',
        ]);

        // slug vindo do form OU gerado do title
        $validated['slug'] = $validated['slug']
            ? Str::slug($validated['slug'])
            : Str::slug($validated['title']);

        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('posts', 'public');
        }

        Post::create($validated);

        return redirect()->route('admin.posts')->with('success', 'Post criado com sucesso!');
    }

    /**
     * Form de edição
     */
    public function edit(Post $post)
    {
        return Inertia::render('admin/PostEdit', [
            'post' => $post,
            'authors' => User::select('id','name')->get(),
        ]);
    }

    /**
     * Atualiza post
     */
    public function update(Request $request, Post $post)
    {
        $validated = $request->validate([
            'title'      => 'required|string|max:255',
            'subtitle'   => 'nullable|string|max:255',
            'content'    => 'required|string',
            'category'   => 'nullable|string|max:255',
            'author_id'  => 'required|exists:users,id',
            'tags'       => 'nullable|string',
            'image'      => 'nullable|image|max:2048',
            'slug'       => ['required','string','max:255', Rule::unique('posts','slug')->ignore($post->id)],
        ]);

        // mantém slug enviado, senão regenera do title
        $validated['slug'] = $validated['slug']
            ? Str::slug($validated['slug'])
            : Str::slug($validated['title']);

        if ($request->hasFile('image')) {
            if ($post->image) {
                Storage::disk('public')->delete($post->image);
            }
            $validated['image'] = $request->file('image')->store('posts', 'public');
        }

        $post->update($validated);

        return redirect()->route('admin.posts')->with('success', 'Post atualizado com sucesso!');
    }

    /**
     * Remove post
     */
    public function destroy(Post $post)
    {
        if ($post->image) {
            Storage::disk('public')->delete($post->image);
        }

        $post->delete();

        return redirect()->route('admin.posts')->with('success', 'Post deletado com sucesso!');
    }
}
