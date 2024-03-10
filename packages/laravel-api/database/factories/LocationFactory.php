<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Database\Factories\LocalityFactory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Location>
 */
class LocationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

     // protected $model = Location::class;
    public function definition(): array
    {
        return [
            'locality_id' => LocalityFactory::new()->create()->id,
            'slug' => fake()->unique()->slug(),
            'designation' => fake()->company(),
            'address' => fake()->streetAddress(),
            'website' => fake()->domainName(),
            'phone' => fake()->e164PhoneNumber(),
        ];
    }
}
