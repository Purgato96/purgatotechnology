<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\PostController;
use App\Http\Controllers\SiteController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::group(['prefix' => 'admin'], function () {
    Route::controller(AdminController::class)->group(function () {
        Route::get('/', 'login')->name('login');
        Route::group(['as' => 'admin.'], function () {
            Route::post('/login/do', 'attempt')->name('login.do');
            Route::get('/logout', 'logout')->name('logout');
            Route::middleware('auth')->group(function () {
                /*Dashboard*/
                Route::get('/dashboard', 'dashboard')->name('dashboard');
                /*Administrando Usuários*/
                Route::get('/users', 'users')->name('users');
                Route::post('/users', 'store')->name('users.store'); // Criar
                Route::get('/users/create', 'create')->name('users.create'); // Criar (view para formulário)
                Route::get('/users/{user}/edit', 'edit')->name('users.edit'); // Editar (view para formulário)
                Route::put('/users/{user}', 'update')->name('users.update'); // Atualizar
                Route::delete('/users/{user}', 'destroy')->name('users.destroy'); // Deletar

                Route::controller(PostController::class)->group(function () {
                    /*Administrando Posts*/
                    Route::get('posts', 'index')->name('posts');
                    Route::get('posts/create', 'create')->name('posts.create');
                    Route::post('posts', 'store')->name('posts.store');
                    Route::get('posts/{post}/edit', 'edit')->name('posts.edit');
                    Route::put('posts/{post}', 'update')->name('posts.update');
                    Route::delete('posts/{post}', 'destroy')->name('posts.destroy');
                });
            });
        });
    });
});

/**
 *Site
 */
Route::controller(SiteController::class)->group(function () {
    Route::get('/', 'index')->name('site.home');
    Route::get('/sobre', 'about')->name('site.about');
    Route::get('/hospedagem', 'hosting')->name('site.hosting');
    Route::get('/desenvolvimento', 'development')->name('site.development');
    Route::get('/blog', 'blog')->name('site.blog'); // Listagem
    Route::get('/blog/{post}', 'blogShow')->name('site.blog.show'); // Post individual
    Route::get('/contato', 'contact')->name('site.contact');
    Route::get('/guia-completo-de-seo-domine-as-estrategias-para-conquistar-o-topo-do-google', 'guideSeo')->name('site.guideSeo');
});


