<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\SiteController;
use Illuminate\Support\Facades\Route;

/**
 *Admin
 */
Route::group(['prefix' => 'admin', 'controller' => AdminController::class], function () {
    Route::get('/',  'login')->name('login');
    Route::group(['as'=> 'admin.'], function () {
        Route::post('/login/do',  'attempt')->name('login.do');
        Route::get('/logout',  'logout')->name('logout');

        Route::group(['middleware' => ['auth']], function () {
            /*Dashboard*/
            Route::get('/dashboard',  'dashboard')->name('dashboard');
            /*Administrando Usuários*/
            Route::get('/users',  'users')->name('users');
            Route::post('/users', 'store')->name('users.store'); // Criar
            Route::get('/users/create', 'create')->name('users.create'); // Criar (view para formulário)
            Route::get('/users/{user}/edit', 'edit')->name('users.edit'); // Editar (view para formulário)
            Route::put('/users/{user}','update')->name('users.update'); // Atualizar
            Route::delete('/users/{user}', 'destroy')->name('users.destroy'); // Deletar
            /*Administrando Blog*/

        });
    });

});
/**
 *Site
*/

Route::controller(SiteController::class)->group(function () {
    Route::get('/',  'index')->name('site.home');
    Route::get('/sobre',  'about')->name('site.about');
    Route::get('/hospedagem',  'hosting')->name('site.hosting');
    Route::get('/desenvolvimento',  'development')->name('site.development');
    Route::get('/blog',  'blog')->name('site.blog');
    Route::get('/form',  'form')->name('site.form');
    Route::get('/contato', 'contact')->name('site.contact');

});

