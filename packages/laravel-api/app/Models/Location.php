<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Location extends Model
{
    use HasFactory;

    protected $fillable = [
        'locality_id',
        'slug',
        'designation',
        'address',
        'website',
        'phone',
    ];

    public function locality()
    {
        return $this->belongsTo(Locality::class);
    }

    public function shows()
    {
        return $this->hasMany(Show::class);
    }
}
