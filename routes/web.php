<?php

use App\Http\Controllers\SiteController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::controller(SiteController::class)->group(function () {
    Route::get('/',  'index')->name('site.home');
    Route::get('/sobre',  'about')->name('site.about');
    Route::get('/serviços',  'services')->name('site.services');
    Route::get('/blog',  'blog')->name('site.blog');
    Route::get('/contato', 'contact')->name('site.contact');
});
/*Route::get('/admin', function () {
    return Inertia::render('admin/Dashboard');
});*/
