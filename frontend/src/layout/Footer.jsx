

export default function Footer(){
    return (
        <div className="container-fluid bg-dark">
            <div className="row p-4">
                <div className="col-md-10 text-light ">
                    <p>© 2026 OSB (Online School Book)</p>
                    <p>
                        Sebagian buku yang tersedia bersumber dari situs resmi pemerintah untuk keperluan pembelajaran. Hak cipta<br/> sepenuhnya dimiliki oleh penulis dan penerbit terkait.
                         OSB hanya berperan sebagai media akses pembelajaran digital.
                    </p>
                </div>
                <div className="col-md-2 d-flex align-items-end text-light gap-3">
                    
                    <a href="https://www.linkedin.com/in/fitra-riyadi-041124378/" target="_blank"><i className="social-media bi bi-linkedin"></i></a>
                    <a href="https://api.whatsapp.com/send/?phone=62895344262060" target="_blank"><i className="social-media bi bi-whatsapp"></i></a>
                    <a href="https://www.instagram.com/fitra_riyadi._/" target="_blank"><i className="social-media bi bi-instagram"></i></a>
                    <a href="http://www.youtube.com/@IamFit01" target="_blank"><i className="social-media bi bi-youtube"></i></a>
                </div>
            </div>
        </div>
    )
}