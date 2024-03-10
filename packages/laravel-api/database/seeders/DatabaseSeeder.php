<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Database\Seeders\ArtistsTableSeeder;
use Database\Seeders\LocalitiesTableSeeder;
use Database\Seeders\LocationsTableSeeder;
use Database\Seeders\ShowsTableSeeder;
use Database\Seeders\TypesTableSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);

        $this->call([
            // UsersTableSeeder::class,
            ArtistsTableSeeder::class,
            LocalitiesTableSeeder::class,
            LocationsTableSeeder::class,
            ShowsTableSeeder::class,
            TypesTableSeeder::class,

        ]);


    }
}
