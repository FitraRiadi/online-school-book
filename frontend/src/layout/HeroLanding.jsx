import React from "react";

import GifAnim from "./../assets/gif/pengu-pudgy.gif"

// Component
import { Writing } from "../component/Component";

export function LandingHero() {
  return (
    <>
      <div className="container mt-5">
        <div className="card text-white border-0 shadow-lg hero-card">
          <div className="row g-0 align-items-center">
            <div className="col-md-12 ">
              <div className="card-body p-5 d-flex  justify-content-between ">
                <div>
                  <h1 className="fw-bold display-4">OSB</h1>
                  <h3 className="fw-semibold"><Writing/></h3>
                  <p className="mt-3 ">
                      Belajar jadi lebih ringan tanpa membawa buku berat.OSB menghadirkan buku pelajaran <br/>digital yang dapat
                      dibaca dan diunduh kapan saja, di mana saja.
                  </p>
                  <a href="#booksh" className="btn btn-outline-warning mt-3 px-4 fw-bold">
                  Lihat Buku
                </a>
                </div>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </div>

      {/* Materi Section */}
      <section className="py-5 bg-light" id="rekomendasi">
        <div className="container">
          <h4 className="mb-4 fw-bold" >Rekomendasi Materi</h4>
          <div className="row g-4">
            
            {/* CARD 1 */}
            <div className="col-12 col-sm-6 col-md-4">
              <div className="card h-100 shadow-sm rekom-card">
                <img src="sampul_buku/philosofi.jpg" className="card-img-top rekom-img" alt="Philosofi" />
                <div className="card-body">
                  <p className="card-text text-center">Sains & Philosofi</p>
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="col-12 col-sm-6 col-md-4">
              <div className="card h-100 shadow-sm rekom-card">
                <img src="sampul_buku/biologi.jpg" className="card-img-top rekom-img" alt="Biologi" />
                <div className="card-body">
                  <p className="card-text text-center">Biologi Alam & Sosial</p>
                </div>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="col-12 col-sm-6 col-md-4">
              <div className="card h-100 shadow-sm rekom-card">
                <img src="sampul_buku/astronomi.jpg" className="card-img-top rekom-img" alt="Astronomi" />
                <div className="card-body">
                  <p className="card-text text-center">Astronomi Ruang Angkasa</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
