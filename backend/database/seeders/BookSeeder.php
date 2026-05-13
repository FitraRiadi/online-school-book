<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BookSeeder extends Seeder
{
    public function run(): void
    {

      


        // categories
        $categories = ['Sains & Filosofi', 'Biologi', 'Astronomi'];
        foreach ($categories as $name) {
            DB::table('categories')->insert([
                'name' => $name,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }

        // books
        DB::table('books')->insert([
           
            [
                'title' => 'Filosofi Teras',
                'author' => 'Henry Manampiring',
                'isbn' => '9786024125189',
                'publisher' => 'Kompas',
                'edition' => '2019',
                'price' => 95000,
                'file_path' => 'books/filosofi_teras.pdf',
                'category_id' => 1,
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'title' => 'Dunia Sophie',
                'author' => 'Jostein Gaarder',
                'isbn' => '9789794335741',
                'publisher' => 'Mizan',
                'edition' => 'Revisi',
                'price' => 120000,
                'file_path' => 'books/dunia_sophie.pdf',
                'category_id' => 1,
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'title' => 'Sapiens',
                'author' => 'Yuval Noah Harari',
                'isbn' => '9786024410209',
                'publisher' => 'KPG',
                'edition' => '2017',
                'price' => 150000,
                'file_path' => 'books/sapiens.pdf',
                'category_id' => 1,
                'created_at' => now(), 'updated_at' => now(),
            ],

          
            [
                'title' => 'Biologi Campbell Jilid 1',
                'author' => 'Jane B. Reece',
                'isbn' => '9780321543257',
                'publisher' => 'Erlangga',
                'edition' => 'Edisi 8',
                'price' => 450000,
                'file_path' => 'books/campbell_1.pdf',
                'category_id' => 2,
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'title' => 'Struktur dan Fungsi Tubuh',
                'author' => 'Anne Waugh',
                'isbn' => '9789814371452',
                'publisher' => 'Elsevier',
                'edition' => 'Edisi 12',
                'price' => 210000,
                'file_path' => 'books/anatomi.pdf',
                'category_id' => 2,
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'title' => 'Mikrobiologi Dasar',
                'author' => 'Michael J. Pelczar',
                'isbn' => '9780070492585',
                'publisher' => 'UI Press',
                'edition' => '2010',
                'price' => 135000,
                'file_path' => 'books/mikro.pdf',
                'category_id' => 2,
                'created_at' => now(), 'updated_at' => now(),
            ],

           
            [
                'title' => 'Cosmos',
                'author' => 'Carl Sagan',
                'isbn' => '9780345331359',
                'publisher' => 'Kepustakaan Populer Gramedia',
                'edition' => 'Edisi Khusus',
                'price' => 115000,
                'file_path' => 'books/cosmos.pdf',
                'category_id' => 3,
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'title' => 'A Brief History of Time',
                'author' => 'Stephen Hawking',
                'isbn' => '9780553380163',
                'publisher' => 'Bantam Books',
                'edition' => 'Illustrated',
                'price' => 180000,
                'file_path' => 'books/hawking_history.pdf',
                'category_id' => 3,
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'title' => 'Astronomi Dasar',
                'author' => 'Bambang Hidayat',
                'isbn' => '9789794132103',
                'publisher' => 'ITB Press',
                'edition' => '2015',
                'price' => 80000,
                'file_path' => 'books/astronomi_dasar.pdf',
                'category_id' => 3,
                'created_at' => now(), 'updated_at' => now(),
            ],
        ]);
    }
}
