/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Stack , Pagination } from "@mui/material";
// import { HashLink } from 'react-router-hash-link';
import { Link, useNavigate } from "react-router-dom";

{/* <HashLink smooth to="/halaman-tujuan#detail">
  Lihat Detail
</HashLink> */}

// Dependencie
import { motion } from "framer-motion";


const UpdateBook = ( books , exceptId , randomItem, maksItem ) => {
    // Filter
    books =  exceptId ? books.filter((p) => p.id != exceptId) : books;

    // Random
    const shuffleBooks = (array) => {
        const newArray = [...array]; 
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; 
        }
        return newArray;
    };

    const booksRandom = randomItem ? shuffleBooks(books) : books;
    books = booksRandom;


    // MaksItem
    books = maksItem ? books.slice(0,maksItem) : books;
    
    return books;
}

// ==================================================
//               COMPONENT RAK BUKU
// ==================================================
export function BookShelf({ books , usePagination , exceptId, randomItem, maksItem , itemPerPage}){

   
    books = UpdateBook(books,exceptId,randomItem,maksItem);
    
    const navigate = useNavigate();
    
    

    // Pagination
    const [activePage,setActivePage] = useState(1);

    itemPerPage = itemPerPage ? itemPerPage : 3;
    const totalPage = Math.ceil(books.length  / itemPerPage);
    const indexAkhir = activePage * itemPerPage;
    const indexAwal = indexAkhir - itemPerPage;
    if (usePagination) {
        books = books.slice(indexAwal,indexAkhir);
    }
    
    const handlePage = (event,value) => {
        // console.log(value);
        setActivePage(value)
        }

  
    
    return (
        <>
        <div className="container mt-4">
        <div className="row" id='booksh'>
            {
            usePagination ?
            <div id='pagination' style={{marginTop:"30px" , marginBottom:"30px",display:"flex" , justifyContent:"center"}}>
                <Stack spacing={2}>
                <Pagination 
                    page={activePage}
                    onChange={handlePage}
                    count={totalPage}
                    color="primary" 
                    shape="rounded" 
                />
                </Stack>
            </div> : ''
            }
            
            
            {books.map((item) => (
            

            // <HashLink smooth to="#detail">
            <div
                onClick={() => navigate(`/detail_book/${item.id}`)} className=" col-md-4 col-sm-6 mb-4" key={item.id} 
            >

                    <div className="card card-buku h-100 " style={{cursor:"pointer"}} >
                    
                    <motion.img 
                        // layoutId={`card-${item.id}`}
                        className="card-img-top img-fluid sampul-buku" 
                        src={"/sampul_buku/" + item.sampul} 
                        alt="Buku" 
                        style={{ objectFit: 'contain', maxHeight: '150px', marginTop:"20px"}}
                    />
                    <div className="card-body ">
                        <h3 className="card-title h5">{item.judul}</h3>
                        <hr />
                        <div className="d-flex justify-content-between">
                            <p className="card-text text-muted">{item.materi} | {item.pengembang} | XI</p>
                            <a href="index" className="bi bi-heart"></a>
                        </div>
                    </div>
                    </div>
            
            </div>
            // </HashLink>
            ))}
        </div>
    </div>
    </>)
}
