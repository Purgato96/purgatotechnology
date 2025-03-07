<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class PostFactory extends Factory {
    public function definition(): array {
        return [
            'title' => Str::of($this->faker->paragraph())->limit(60)->value(),
            'subtitle' => Str::of($this->faker->paragraph())->limit(180)->value(),
            'content' => Str::of($this->faker->text())->limit(200)->value(),
            'author_id' => User::all()->random()->id,
            'slug' => Str::of($this->faker->paragraph())->limit(200)->value(),
            'image' => $this->faker->imageUrl(),
            'tags' => $this->faker->words(3, true),
        ];
    }
}
