/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from "react";
import "./Dashboard.css";

//Komponent
import GrafikPenjualan from "../../component/Chart";
import PageIntro from "../../component/PageIntro";
import { Popup } from "../../component/Popup";
import Footer from "../../layout/Footer";



export default function Dashboard(){
    // Hook
    const [totalBuku,setTotalBuku]= useState(0);
    const [totalUnduhan,setTotalUnduhan]= useState(0);
    const [totalPengguna,setTotalPengguna] = useState(0);
    const [totalTransaksi,setTotalTransaksi] = useState(0);

    const [onload,setOnLoad] = useState(false);

    useEffect(() => {
        if (totalPengguna < 86) setTotalPengguna(p => p + 1);
        if (totalUnduhan < 78 ) setTotalUnduhan(p => p + 1);
        if (totalTransaksi < 21 ) setTotalTransaksi(p => p + 1);
        if (totalBuku < 60 ) setTotalBuku(p => p + 1);
    },[totalBuku,totalPengguna,totalTransaksi,totalUnduhan])

    return (
        <>
            <PageIntro delay={5000} title={"Dashboard"} subTitle={"Halo Admin! Selamat Datang Kembali."} load={setOnLoad} />
            {
            onload ? <>
            {/* <Popup /> */}
            <div className="dashboard container-fluid fade-in">
                <div className="row">
                    
                    {/* Head */}
                    <div className="col-md-12 bg-primary p-3 dashboard-head">
                        <h5>Dashboard</h5>
                    </div>

                    {/* Profile */}
                    <div className="dashboard-profile col-md-12 d-flex align-items-center p-2 ">
                        <img className="w-15 rounded-circle ms-3" src="/profile/Rectangle 52 (1).png" alt="" />
                        <div className="d-flex flex-column ms-3">
                            <h4>Hai!</h4>
                            <h4>Fitra Riadi</h4>
                        </div>
                    </div>

                    {/* Status Detail Info */}
                    <div className="col-md-12 mt-4 leftToRight">
                        <div className="container-fluid">
                            <div className="row d-flex gap-3 justify-content-center p-3" style={{width:"100%"}}>
                                
                                {/* Total Penguna */}
                                <div className="dashboard-status-info col-md-3  p-0 " style={{backgroundColor:"#24D5F4"}}>
                                    <h4 className="count">{totalPengguna}</h4>
                                    <div className="status-detail bg-light">
                                        <h5>TOTAL PENGGUNA</h5>
                                        <p>Jumlah Akun yang terdaftar</p>
                                    </div>
                                </div>

                                {/* Total Buku */}
                                <div className="dashboard-status-info col-md-3  p-0 " style={{backgroundColor:"#A3CF2B"}} >
                                    <h4 className="count">{totalBuku}</h4>
                                    <div className="status-detail bg-light">
                                        <h5>TOTAL BUKU</h5>
                                        <p>Jumlah Buku Yang Ditambahkan</p>
                                    </div>
                                </div>

                                {/* Total Unduhan */}
                                <div className="dashboard-status-info col-md-3 p-0 " style={{backgroundColor:"#DFF0B1"}}>
                                    <h4 className="count">{totalUnduhan}</h4>
                                    <div className="status-detail bg-light">
                                        <h5>TOTAL UNDUHAN</h5>
                                        <p>Jumlah Buku yang diunduh</p>
                                    </div>
                                </div>

                                {/* Total Transaksi */}
                                <div className="dashboard-status-info col-md-3 p-0 " style={{backgroundColor:"#DD2B2E"}} >
                                    <h4 className="count">{totalTransaksi}</h4>
                                    <div className="status-detail bg-light">
                                        <h5>TOTAL TRANSAKSI</h5>
                                        <p>Jumlah Transaksi yang dibuat</p>
                                    </div>
                                </div>

                               

                            </div>
                        </div>
                    </div>

                    {/* Salary */}
                    <div className="col-md-12  salary">
                        <h6><span style={{color:"#42CD1F"}}>TOTAL PENDAPATAN</span> - Rp<span class="total-salary">30.000.000</span></h6>
                    </div>

                    {/* Chart */}
                    <div className="col-md-12 mt-2 ">
                        <GrafikPenjualan/>   
                    </div>   

                </div>
            </div>
            
            {/* Table Riwayat */}
            <h1 className="hero-title mb-4">RIWAYAT TRANSAKSI TERBARU</h1>
            <div className="table-responsive">
                <table class="table table-striped table-inverse table-bordered text-center">
                    <thead class="thead-inverse table-primary " >
                        <tr>
                            <th><i className="bi bi-calendar mx-2"></i>TANGGAL</th>
                            <th><i className="bi bi-person mx-2"></i>USERNAME</th>
                            <th><i className="bi bi-book mx-2"></i>JUDUL BUKU</th>
                            <th><i className="bi bi-cash mx-2"></i>HARGA</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr >
                            <td>2026-02-11 05:06:59</td>
                            <td>Freza Tirta</td>
                            <td>Cara Menjadi Sigma Volume 1</td>
                            <td>Rp. 12000</td>
                        </tr>

                        <tr >
                            <td>2026-02-11 05:06:59</td>
                            <td>Freza Tirta</td>
                            <td>Cara Menjadi Sigma Volume 1</td>
                            <td>Rp. 12000</td>
                        </tr>

                        <tr>
                            <td>2026-02-11 05:06:59</td>
                            <td>Freza Tirta</td>
                            <td>Cara Menjadi Sigma Volume 1</td>
                            <td>Rp. 12000</td>
                        </tr>
                        <tr>
                            <td>2026-02-11 05:06:59</td>
                            <td>Freza Tirta</td>
                            <td>Cara Menjadi Sigma Volume 1</td>
                            <td>Rp. 12000</td>
                        </tr>

                        <tr>
                            <td>2026-02-11 05:06:59</td>
                            <td>Freza Tirta</td>
                            <td>Cara Menjadi Sigma Volume 1</td>
                            <td>Rp. 12000</td>
                        </tr>

                    </tbody>
                </table>
            </div>


            {/* ACTIVY LOG */}
            <h1 className="hero-title mb-2">ACTIVITY LOG</h1>
            <div className="container activity-log">
                {/* ACTIVITY */}
                 <p><i className="bi bi-person mx-2"></i><span class="activity-username">Azka</span> mendaftar akun - 2 menit lalu</p>
                 <hr />
                 <p><i className="bi bi-person mx-2"></i><span class="activity-username">Mr Robot</span> mendaftar akun - 2 menit lalu</p>
                 <hr />
                 <p><i className="bi bi-person mx-2"></i><span class="activity-username">Ucok Nicholas</span> mendaftar akun - 2 menit lalu</p>
                 <hr />
                 <p><i className="bi bi-book mx-2"></i><span class="activity-username">Matematika Asik</span> Telah Ditambahkan  - 2 menit lalu</p>
                 <hr />
                 <p><i className="bi bi-person mx-2"></i><span class="activity-username">Ujang</span> mendaftar akun - 2 menit lalu</p>
            
            </div>
            <Footer/>
           </> : ''    
            }
        </>
    )
}