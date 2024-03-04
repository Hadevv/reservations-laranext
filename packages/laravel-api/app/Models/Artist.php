<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Artist extends Model
{
    use HasFactory;

    protected $fillable = [
        'firstname',
        'lastname',
    ];

    public function types()
    {
        return $this->belongsToMany(Type::class, 'artist_type', 'artist_id', 'type_id');
    }

    public function shows()
    {
        return $this->belongsToMany(Show::class, 'artist_type_show', 'artist_id', 'show_id');
    }
}
