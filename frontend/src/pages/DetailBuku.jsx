/* eslint-disable no-unused-vars */
import React from "react";
import { BookShelf } from "../component/Buku";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";

// Dependencie
import { motion } from "framer-motion";

import "./DetailBuku.css";

import Footer from "../layout/Footer";

export  default function DetailBuku ({ books }) {
    const { id } = useParams();
    const getIndex = books.findIndex(n => n.id === Number(id));
    const bookInfo = books[getIndex];
    if (!bookInfo) return <NotFound />
    console.log(`Detail Buku : Id => ${id} | index => ${getIndex}`);
    
    return (
        <>  
            <div className="container fade-in" style={{marginTop:"70px"}}>
                <div className="card shadow-lg">
                    <div className="row">

                        <div className="col-md-4 bg-light d-flex flex-column align-items-center p-4">
                            <motion.img 
                            // layoutId={`card-${id}`}
                            style={{marginTop:"5px",objectFit:"contain",height:"300px"}}  src={`/sampul_buku/${bookInfo.sampul}`} className="img-fluid rounded shadow-sm mb-3 detail-sampul"/>
                        </div>
                        
                
                        <div className="col-md-8 p-4">
                            <h2 className="fw-bold mb-0">{bookInfo.judul}</h2>
                            <p className="text-primary fw-semibold">{bookInfo.materi}</p>
                            
                            <h5 className="fw-bold mt-4">Materi</h5>
                            <p className="text-secondary small">{bookInfo.materi}</p>
                            
                            
                            <div className="row g-3 py-3 border-top border-bottom my-3">
                                <div className="col-6 col-sm-3">
                                    <small className="text-muted d-block">Penerbit</small>
                                    <span className="fw-bold">{bookInfo.pengembang}</span>
                                </div>    
                                <div className="col-6 col-sm-3">
                                    <small className="text-muted d-block">Halaman</small>
                                    <span className="fw-bold">125</span>
                                </div>
                                <div className="col-6 col-sm-3">
                                    <small className="text-muted d-block">Edisi</small>
                                    <span className="fw-bold">{bookInfo.edisi}</span>
                                </div>
                                <div className="col-6 col-sm-3">
                                    <small className="text-muted d-block">Harga</small>
                                    <span className="fw-bold">Gratis</span>
                                </div>
                            </div>

                            <div className="d-flex mt-3 gap-2">

                                <a className="btn btn-success shadow-sm"
                                    href="link"
                                    target="_blank">
                                    Lihat Buku
                                </a>

                                <button className="btn btn-outline-danger ml-3 shadow-sm">
                                    <i className="bi bi-heart mx-1"></i>Favorite
                                </button>

                            </div>



                        </div>

                    </div>
                </div>
            </div>

            <motion.h1
            initial={{x:-100}}
            animate={{x:0}}
            exit={{x:100}}
            transition={{ease:"easeInOut",duration:0.4}}
            className="hero-title">REKOMENDASI BUKU LAINYA</motion.h1>
            <div className="rightToLeft">
                <BookShelf  books={books} maksItem={3} exceptId={bookInfo.id} randomItem={true} />
            </div> 
            <Footer/>
        </>
    )
}