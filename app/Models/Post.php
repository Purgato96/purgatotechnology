<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'content',
        'category_id',
        'author_id',
        'slug',
    ];
    public function authorRelationship() {
        return $this->belongsTo(User::class, 'author', 'id');
    }
    public function author()
    {
        return $this->belongsTo(User::class, 'author_id');
    }
}

