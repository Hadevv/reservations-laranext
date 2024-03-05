<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('artist_type', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('artist_id');
            $table->unsignedBigInteger('type_id');
            $table->timestamps();

            $table->foreign('artist_id')->references('id')->on('artists');
            $table->foreign('type_id')->references('id')->on('types');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('artist_type');
    }
};
