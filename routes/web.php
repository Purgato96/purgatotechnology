<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    sleep(2);
    return Inertia::render('Home');
})->name('site.home');

Route::resource('users', UserController::class);
Route::get('/contato', function () {
    sleep(3);
    return Inertia::render('Contact');
})->name('site.contact');
