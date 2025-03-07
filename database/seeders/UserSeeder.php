<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserSeeder extends Seeder {
    /**
     * Run the database seeds.
     */
    public function run(): void {
        DB::table('users')->insert([
            'name' => 'Matheus Purgato',
            'email' => 'matheuspurgato@gmail.com',
            'password' => Hash::make('Purgato$123*'),
            'email_verified_at' => now(),
            'remember_token' => Str::random(10),
            'role' => 'admin',
            'position' => 'Desenvolvedor Laravel e Especialista em SEO',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        //User::factory(50)->create();
    }
}
