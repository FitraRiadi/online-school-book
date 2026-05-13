/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CollectionPage.css";

// Dependencie
import { motion } from "framer-motion";

// Layout
import Footer from "../layout/Footer";


export default function CollectionPage(){
    const navigate = useNavigate();

    // Status Hook
    const [readTotal,setReadTotal] = useState(0);
    const [collectionTotal,setCollectionTotal] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            if (readTotal < 67) setReadTotal(r => r+1);
            if (collectionTotal < 30) setCollectionTotal(c => c+1); 
        },10)
    },[readTotal,collectionTotal]);

    return (
        <>
        <motion.div
            initial={{y:-50,opacity:0}}
            animate={{y:0,opacity:1}}
            exit={{y:50,opacity:0}}
            transition={{ease:"easeInOut",duration:0.4}}
        >  
            {/* PROFILE */}
            <div className="profile-container fade-in d-flex p-4">
                <div className="profile-body container  mt-3" >
                    <div className="row  d-flex justify-content-center align-items-center profile-row" >
                        <div className="profile-section col-md-3  d-flex justify-content-center align-items-center flex-column" style={{height:"100%"}}>
                            <img className="profile-img rounded-circle" src="profile/Rectangle 52 (1).png" alt="" />
                            <p className="mt-2">Edit Profile</p>
                        </div>

                        <div className="profile-info col-md-9  text-dark" style={{height:"100%"}}>
                            <h3>Halo!</h3>
                            <h3>Fitra Riadi</h3>
                            <hr />
                            <div className="profile-status h-25">
                                <div>
                                    <p>Total Buku yang dibaca</p>
                                    <h1 className="text-warning">{readTotal}</h1>
                                </div>

                                <div>
                                    <p>Jumlah Koleksi Buku</p>
                                    <h1 className="text-primary">{collectionTotal}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Fiture */}
            <div className="container-fluid collection-container">
                <div className="container p-5">
                    <div className="row gap-5 d-flex justify-content-center align-items-center text-center">
                        
                        {/* Kelompok Fitur Favorite */}
                        
                        <motion.div 
                            onClick={() => navigate('/favorite')}
                            whileHover={{scale:1.05}}
                            transition={{ease:"easeInOut"}}
                            className="col-md-5 d-flex flex-column gap-2 p-0"
                        >
                            <div className="collection-label">Favorite</div>
                            <div className="favorite collection-fiture bg-warning p-5">
                                {/* Isi Fitur */}
                            </div>
                        </motion.div>

                        {/* Kelompok Fitur My Library */}
                        <motion.div 
                            onClick={() => navigate('/mylibrary')}
                            whileHover={{scale:1.05}}
                            transition={{ease:"easeInOut"}}
                            className="col-md-5 d-flex flex-column gap-2 p-0"
                        >
                            <div className="collection-label">My Library</div>
                            <div className="library collection-fiture bg-primary p-5">
                                {/* Isi Fitur */}
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>

        </motion.div>
        <Footer />
        </>
    )
}