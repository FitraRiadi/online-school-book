/* eslint-disable no-unused-vars */
import "./FavoritePage.css";

// Component
import { useState } from "react";
import PageIntro from "../component/PageIntro";
import { BookShelf } from "../component/Buku";

// Dependenncie
import { motion } from "framer-motion";
import Footer from "../layout/Footer";

export default function LibraryPage () {
    const [myBook,setMyBook] =  useState([{
      id : 4,
      judul : 'Buku Sejarah',
      materi : 'Sejarah',
      sampul : 'Cover_Kelas_X_Sejarah_BS.png',
      pengembang:"Kamendikbud",
      isbn : "D-3435",
      edisi : 2024,
    },
    {
      id : 5,
      judul : 'Buku Prakarya',
      materi : 'Prakarya',
      sampul : 'Cover_Kelas_XII_Prakarya_KWU_BS.png',
      pengembang:"Kamendikbud",
      isbn : "D-3435",
      edisi : 2024,
    },
    {
      id : 6,
      judul : 'Buku Indonesia',
      materi : 'Indonesia',
      sampul : 'Cover_Kelas_XII_B_Indonesia_BS.png',
      pengembang:"Kamendikbud",
      isbn : "D-3435",
      edisi : 2024,
    },
    {
      id : 7,
      judul : 'Buku Matematika X',
      materi : 'Matematika',
      sampul : 'Cover_Kelas_X_Matematika_BS.png',
      pengembang:"Kamendikbud",
      isbn : "D-3435",
      edisi : 2024,
    }])
    const [onload,setOnload] = useState(false);
    return ( <>
        <PageIntro title={"My Library"} subTitle={"Buku Yang Aku Koleksi!"} load={setOnload} />
        {
            onload ?
            <>
            <motion.div
                initial={{y:-100,opacity:0}}
                animate={{y:0,opacity:1}}
                end={{y:100,opacity:0}}
                transition={{ease:"easeInOut", duration:1}}
            >
                <div className="container  mt-4 text-light p-5 rounded-4 hero-favorite" >
                    <h1>My Library</h1>
                </div>
                
                <BookShelf books={myBook} usePagination={true} itemPerPage={3} />
            </motion.div>
            <Footer/>
            </>
            : ''
        }
        
    </>
    )
}