<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class AdminController extends Controller {
    public function login() {
        return Inertia::render('auth/Login');
    }

    public function attempt(Request $request) {
//      dump($request->all());
        $credentials = [
            'email' => $request->get('email'),
            'password' => $request->get('password'),
        ];

       if (Auth::attempt($credentials)){
           return redirect()->route('admin.dashboard');
       }
      return back()
          ->withErrors([
          'message' => 'Os dados informados não conferem!'
      ])
          ->withInput($request->only('email'));
    }

    public function logout() {
        Auth::logout();
        Session::invalidate();
        Session::regenerateToken();
        return redirect()->route('login');
    }

    public function dashboard() {
        return Inertia::render('admin/Dashboard');
    }
}
