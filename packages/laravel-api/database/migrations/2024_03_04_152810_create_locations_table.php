<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
{
    Schema::create('locations', function (Blueprint $table) {
        $table->id();
        $table->unsignedBigInteger('locality_id')->nullable();
        $table->string('slug', 60)->unique();
        $table->string('designation', 60);
        $table->string('address', 255)->nullable();
        $table->string('website', 255)->nullable();
        $table->string('phone', 30)->nullable();
        $table->timestamps();

        $table->foreign('locality_id')->references('id')->on('localities');
    });
}

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('locations');
    }
};
