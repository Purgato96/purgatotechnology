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

        Route::group([''], function () {
            Route::get('/dashboard',  'dashboard')->name('dashboard');
        });
    });

});
//Route::get('/admin', [AdminController::class, 'login'])->name('login');
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
//    Route::get('/login', 'login')->name('login');
});

