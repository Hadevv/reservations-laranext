<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Database\Factories\LocationFactory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Show>
 */
class ShowFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'slug' => fake()->unique()->slug(),
            'title' => fake()->sentence(),
            'description' => fake()->paragraph(),
            'poster_url' => fake()->imageUrl(),
            'location_id' => LocationFactory::new()->create()->id,
            'bookable' => fake()->boolean(),
            'price' => fake()->randomFloat(2, 0, 100),
            'created_at' => fake()->dateTimeBetween('now', '+1 year'),
        ];
    }
}
