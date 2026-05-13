/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// App
import "./style.css";

//  Dependenci
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import  { Pagination , Stack, Typography } from "@mui/material";
import { AnimatePresence } from "framer-motion";


// API CONFIG
const API_URL = import.meta.env.VITE_API_CONFIG;

// Component Import
import { ScrollToTop } from './component/Component';
import { Navigation } from './component/Navigation';

// Page Import
import CollectionPage from './pages/CollectionPage';
import DetailBuku from './pages/DetailBuku';
import AuthPage from './pages/AuthPage';
import LandingPage from './pages/LandingPage';
import NotFound from './pages/NotFound';
import Dashboard from './pages/admin/Dashboard';
import FavoritePage from './pages/FavoritePage';
import LibraryPage from './pages/LibraryPage';


// Layout Import
import UserLayout from './layout/UserLayout';
import AdminLayout from './layout/AdminLayout';



// App Wrap
function App(){
  const location = useLocation();
  const [books,setBooks] = useState([
    {
      id : 1,
      judul : 'Buku Matematika XI',
      materi : 'Matematika',
      sampul : 'Cover_Kelas_X_Matematika_BS.png',
      pengembang:"Kamendikbud",
      isbn : "D-3435",
      edisi : 2023,
    },
    {
      id : 2,
      judul : 'Buku Inggris',
      materi : 'Inggris',
      sampul : 'Cover_Kelas_XI_B_Inggris_BS.png',
      pengembang:"Kamendikbud",
      isbn : "D-3435",
      edisi : 2024,
    },
    {
      id : 3,
      judul : 'Buku IPAS',
      materi : 'IPAS',
      sampul : 'Projek-IPAS-BS-KLS-X-Cover.png',
      pengembang:"Kamendikbud",
      isbn : "D-3435",
      edisi : 2024,
    },
    {
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
    },
    {
      id : 8,
      judul : 'Buku Indonesia',
      materi : 'Indonesia',
      sampul : 'Cover_Kelas_XII_B_Indonesia_BS.png',
      pengembang:"Kamendikbud",
      isbn : "D-3435",
      edisi : 2024,
    },
    {
      id : 9,
      judul : 'Buku Indonesia',
      materi : 'Indonesia',
      sampul : 'Cover_Kelas_XII_B_Indonesia_BS.png',
      pengembang:"Kamendikbud",
      isbn : "D-3435",
      edisi : 2024,
    },
  {
      id : 10,
      judul : 'Buku Matematika X',
      materi : 'Matematika',
      sampul : 'Cover_Kelas_X_Matematika_BS.png',
      pengembang:"Kamendikbud",
      isbn : "D-3435",
      edisi : 2024,
    },
    {
      id :11,
      judul : 'Buku Indonesia',
      materi : 'Indonesia',
      sampul : 'Cover_Kelas_XII_B_Indonesia_BS.png',
      pengembang:"Kamendikbud",
      isbn : "D-3435",
      edisi : 2024,
    },
    {
      id : 12,
      judul : 'Buku Indonesia',
      materi : 'Indonesia',
      sampul : 'Cover_Kelas_XII_B_Indonesia_BS.png',
      pengembang:"Kamendikbud",
      isbn : "D-3435",
      edisi : 2024,
    },
  ]);

  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>


          {/* Admin view */}
          <Route element={<AdminLayout />}> 
            <Route path='/dashboard' element={<Dashboard />} />
          </Route>


          {/* User view */}
          <Route element={<UserLayout/>}>   
            <Route path='/' index element={<LandingPage books={books}/>}></Route>
            <Route path='/detail_book/:id' element={<DetailBuku books={books} />}></Route>
            {/* <Route path='/detail_book' element={<DetailBuku books={books} />}></Route> */}
            <Route path='/auth' element={<AuthPage/>}></Route>
            <Route path='/collection' element={<CollectionPage />}></Route>
            <Route path='/favorite' element={<FavoritePage />}></Route>
            <Route path='/mylibrary' element={<LibraryPage/>}></Route>

            {/* Handle 404 */}
            <Route path='*' element={<NotFound/>}></Route>
          </Route>
    
        </Routes>
      </AnimatePresence>
    </>
  )
}






export default App
