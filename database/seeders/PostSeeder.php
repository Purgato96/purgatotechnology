<?php

namespace Database\Seeders;

use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class PostSeeder extends Seeder {
    /**
     * Run the database seeds.
     */

    public function run(): void {

        Post::factory(90)->create();
        /*DB::table('posts')->insert([
            'title' => Str::of($this->faker->paragraph())->limit(200)->value(),
            'subtitle' => Str::of($this->faker->paragraph())->limit(200)->value(),
            'content' => Str::of($this->faker->text())->limit(200)->value(),
            'author' => User::all()->random()->id,
        ]);*/
    }
}
