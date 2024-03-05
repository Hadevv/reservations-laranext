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
        Schema::create('artist_type_show', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('artist_type_id');
            $table->unsignedBigInteger('show_id');
            $table->timestamps();

            $table->foreign('artist_type_id')->references('id')->on('artist_type');
            $table->foreign('show_id')->references('id')->on('shows');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('artist_type_show');
    }
};
