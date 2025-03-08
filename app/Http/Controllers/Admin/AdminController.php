<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class AdminController extends Controller {
    public function login() {
        return Inertia::render('auth/Login');
    }

    public function attempt(Request $request) {
        $credentials = [
            'email' => $request->get('email'),
            'password' => $request->get('password'),
        ];

        if (Auth::attempt($credentials)) {
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

    public function users() {
        $users = User::all();
        return Inertia::render('admin/Users', [
            'users' => $users
        ]);
    }

    public function create() {
        return Inertia::render('admin/UserCreate', [
            'user' => new User()
        ]);

    }

    public function store(Request $request) {


        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users',
            'password' => 'required|string|min:6',
        ]);

        User::query()->create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);
        //dump($request->all());
       return redirect()->route('admin.users')->with('success', 'Usuário criado com sucesso!');
    }


    public function edit(User $user) {
        return Inertia::render('admin/UserEdit', [
            'user' => $user,
        ]);
    }

    public function update(Request $request, User $user) {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email,' . $user->id,
        ]);

        $user->update($request->only('name', 'email'));

        return redirect()->route('admin.users')->with('success', 'Usuário atualizado com sucesso!');
    }


    public function destroy(User $user) {
        $user->delete();

        return redirect()->route('admin.users')->with('success', 'Usuário deletado com sucesso!');
    }

}
