<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\SiteController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

/**
 *Admin
 */

Route::controller( AdminController::class )->group(function () {
    Route::get('/admin',  'index')->name('admin.home');
});

