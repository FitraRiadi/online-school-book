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
        Schema::create('books', function (Blueprint $table) {
            $table->id();
            $table->string('title')->unique(); //Judul Buku
            $table->string('author'); //Penulis 
            $table->string('isbn')->unique(); //ISBN
            $table->string('publisher'); //Penerbit
            $table->string('edition'); //Edisi
            $table->integer('price'); //Harga
            $table->string('file_path'); //Path File
            $table->foreignId('category_id')->constrained()->onDelete('cascade'); //category_id ( Foreign )
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('books');
    }
};
