/* eslint-disable no-unused-vars */

import Deco1 from "../assets/images/deco1.png";
import Deco2 from "../assets/images/deco2.png";
import Deco3 from "../assets/images/deco3.png";
import Socrates from "../assets/images/socrates.png";

import "./LandingPage.css";

// Layout
import { LandingHero } from "../layout/HeroLanding";
import Footer from "../layout/Footer";


// Depencie
import { BookShelf } from "../component/Buku";
import { motion } from "framer-motion";
// import ScrollFloat from "../component/ScrollFloat";
import ScrollVelocity from "../component/ScrollVelocity";
import { useState } from "react";



export default function LandingPage({books}){
    const [showAll, setShowAll] = useState(false);
    return (
      <>
        <motion.div 
          initial={{ y: -50, opacity:0 }}
          animate={{ y: 0 , opacity:1}}
          exit={{ y: 50 , opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
        <div key={"content"} className='container-fluid fade-in'>

          {/* Deco 1 */}
          <div className='deco-1 leftToRight'></div>
          
          {/* Deco 2 */}
          <div className='deco-2 rightToLeft'></div>

          <div className="row">
            <div className="col-md-12">
              <LandingHero />
              <ScrollVelocity
                texts={['EXPLORASI BUKU','OSB - ONLINE SCHOOL BOOK']} 
                velocity={30}
                className="custom-scroll-text"
                numCopies={6}
                damping={50}
                stiffness={400}
              />

              <h1 className="hero-title mt-5"><i className="bi bi-book me-3"></i>TEMUKAN BUKUMU!</h1>                  

              {/* Deco - Socrates */}
              <div className="deco-socrates rightToLeft"></div>


              {/* Deco 3 */}
              <div className='deco-3 leftToRight'></div>


              {/* <HeroWriting /> */}
              {/* <p className='hero-sub'>Menyediakan Ebook Sekolah dengan bervariasi</p> */}
              <div className="downToUp">
              <BookShelf books={books} usePagination={true} itemPerPage={12} />
              </div>
              {/* <BookShelf books={books} maksItem={3} randomItem={true} setOnWebPage={setOnWebPage}/> */}
            </div>
          </div>
         </div> 

      

        {/* ABOUT */}
        <div className="container mt-5 mb-5 fade-in " id="about">
          <div className="row d-flex justify-content-center">
            <div className="col-md-12 text-center">
              <h1 className='hero-title' style={{fontWeight:"800"}}>APA TANGGAPAN MEREKA ?</h1>
            </div>
            { 
              [1,1,1].map(() => (
                <div className="comment-item col-md-4 ">
                  <img className='comment-profile rounded-circle w-50' src="/profile/Rectangle 52 (3).png" alt="" />
                  <div className="comment-text">
                    <h3>Freza Tirta</h3>
                    <p>Belajar di OSB sangat menyenangkan, banyak refrensi ebook yang menarik mantap well</p>
                  </div>
                </div>  
              ))
            }

            <div className="col-md-12 mt-5 rounded-5 d-flex justify-content-center align-items-center" style={{backgroundColor:"#00ff80bd"}}>
              <div className='text-center w-75 p-4'>
                <h1 className='' style={{fontWeight:"800",color:"#2A94EB"}}>TENTANG WEBSITE</h1>
                <p>
                  OSB (Online School Book) adalah platform buku sekolah digital yang 
                  membantu siswa mengakses materi pelajaran{ showAll ?  <span> dengan lebih praktis tanpa harus membawa banyak buku fisik. Melalui OSB, pengguna dapat membaca buku secara online, mengunduh dalam format PDF, 
                  serta mencari buku berdasarkan judul atau mata pelajaran.
                  Platform ini bertujuan membuat proses belajar lebih mudah dan efisien. Sebagian buku berasal dari
                  situs resmi pemerintah untuk keperluan pembelajaran, dengan hak cipta tetap dimiliki oleh penulis dan penerbit terkait. <a className="text-primary" style={{cursor:"pointer"}} onClick={() => setShowAll(prev => !prev)}> Baca Sedikit</a></span> : <span>... <a className="text-primary" style={{cursor:"pointer"}} onClick={() => setShowAll(prev => !prev)}> Lihat Semua</a></span>}
                </p>
              </div>
            </div>

            <div className="col-md-12 mt-5 d-flex me ">
                <img className="me-img  rounded-circle " src="/profile/Rectangle 52 (3).png" alt="" />
                <div className="me-info ">
                    <h3 style={{color:"#2A94EB",fontWeight:"800"}}>TENTANG PENGEMBANG</h3>
                    <p>Fitra Riadi merupakan siswa yang bersekolah di SMK Merdeka Bandung. Ia mengembangkan aplikasi OSB (Online School Book) sebagai proyek berbasis web yang bertujuan membantu siswa mengakses buku pelajaran dengan lebih mudah, praktis, dan efisien melalui media digital.</p>
                </div>
            </div>

            



          </div>
        </div>
        </motion.div>
        <Footer />
      </>
    )
}