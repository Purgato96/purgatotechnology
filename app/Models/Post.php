<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model {
    use HasFactory;

    protected $fillable = [
        'title',
        'subtitle', // Deve estar listado aqui
        'content',
        'category',
        'author',
        'tags',
        'image',
        'slug',
    ];

    public function authorRelationship() {
        return $this->belongsTo(User::class, 'author', 'id');
    }

    public function author(): \Illuminate\Database\Eloquent\Relations\BelongsTo {
        return $this->belongsTo(User::class, 'author_id');
    }
}

