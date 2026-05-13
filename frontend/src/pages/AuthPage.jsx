/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AuthPage.css";

import GifAnimate from "./../assets/gif/aha-i-see.gif";

// Dependencie
import Tippy from "@tippyjs/react";
import 'tippy.js/dist/tippy.css';


// Component
import { motion } from "framer-motion";
import Footer from "../layout/Footer";

export default function AuthPage({ type }) {
  const navigate = useNavigate();

  // Hook 
  const [nama, setNama] = useState('');
  const [username, setUsername] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Reset Form
  const resetForm = () => {
    setNama('');
    setUsername('');
    setMail('');
    setPassword('');
    setConfirmPassword('');
  }

  // Handle Login Submit
  const handleLogin = () => {
    if (username === "adminGanteng") {
      if (password === "admin123") {
        navigate('/dashboard');
      }
    }
  }

  const handleRegister = () => { }

  type = type ?? "login";
  const [authType, setAuthType] = useState(type);
  const isRegister = authType === "register";

  return (
    <>
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 0, y: 0 }}
      exit={{ y: 50, opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      
    >
      <div className="container-fluid mt-2 text-light mb-5 auth-container" style={{marginBottom:"200px !important"}}>
        <div className="row d-flex gap-4 p-2 justify-content-center align-items-stretch auth">
          <div className="s bg-form col-md-6 d-flex rounded-5 flex-column hero-auth">
            <div className="p-2 d-flex flex-column ">
              <h1 style={{ fontWeight: "50", fontSize: "50px" }}>OSB</h1>
              <h6 style={{ fontWeight: "500", fontSize: "20px" }}>Online School Book</h6>
              <div className="d-flex justify-content-center">
                {/* <Tippy content="Scroll Kebawah!" visible={true}> */}
                  <img className="gifAnim" src={GifAnimate} alt="GIF" />
                {/* </Tippy> */}
              </div>
            </div>
          </div>


          {/* Mobile Hero Auth */}
          <div className="col-md-12 bg-dark mobile-hero">
            <img className="gifAnim" src={GifAnimate} alt="GIF" />
              <div>
                <h1 style={{ fontWeight: "50", fontSize: "50px" }}>OSB</h1>
                <h6 style={{ fontWeight: "500", fontSize: "20px" }}>Online School Book</h6>
              </div>
          </div>



          <div id="form" key={authType} className="s col-md-5 fade-in text-dark rounded-5 p-3 d-flex flex-column">
            <h5 className="m-2 fade-in" style={{ fontWeight: "50" }}>
              {isRegister ? "Daftar disini!" : "Selamat Datang!"}
            </h5>

            <div className="form bg-light shadow-sm rounded-5 gap-4 py-4 flex-grow-1">
              {isRegister ? <h1 className=" text-dark" style={{fontSize:"20px"}}><i className="bi bi-door-open mx-1"></i>Register</h1> :  <h1 className="mb-5 text-dark"><i className="bi bi-door-open mx-1"></i>Login</h1>}

              <div className="w-75 d-flex flex-column gap-4">
                {isRegister && (
                  <>
                    <div className="d-flex align-items-center gap-2">
                      <i className="bi bi-tag fs-4"></i>
                      <div className="form-floating flex-grow-1">
                        <input value={nama} onChange={(e) => setNama(e.target.value)} className="form-control input-underline" id="floNama" placeholder="Nama Pengguna" type="text" />
                        <label htmlFor="floNama">Nama Pengguna</label>
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <i className="bi bi-envelope fs-4"></i>
                      <div className="form-floating flex-grow-1">
                        <input value={mail} onChange={(e) => setMail(e.target.value)} className="form-control input-underline" id="floMail" placeholder="Email" type="email" />
                        <label htmlFor="floMail">Email</label>
                      </div>
                    </div>
                  </>
                )}
                
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-person fs-4"></i>
                  <div className="form-floating flex-grow-1">
                    <input value={username} onChange={(e) => setUsername(e.target.value)} className="form-control input-underline" id="floUser" placeholder="Username" type="text" />
                    <label htmlFor="floUser">Username</label>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-key fs-4"></i>
                  <div className="form-floating flex-grow-1">
                    <input value={password} onChange={(e) => setPassword(e.target.value)} className="form-control input-underline" id="floPass" placeholder="Password" type="password" />
                    <label htmlFor="floPass">Password</label>
                  </div>
                </div>

                {isRegister && (
                  <>
                    <div className="d-flex align-items-center gap-2">
                      <i className="bi bi-key-fill fs-4"></i>
                      <div className="form-floating flex-grow-1">
                        <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="form-control input-underline" id="floConfirm" placeholder="Konfirmasi Password" type="password" />
                        <label htmlFor="floConfirm">Konfirmasi Password</label>
                      </div>
                    </div>
                    
                  </>
                )}
              </div>

              <div style={{ width: "100%" }} className="d-flex justify-content-center flex-column align-items-center">
                
                {isRegister ?
                <div className="register-btn w-100 d-flex justify-content-center gap-4" style={{height:"70px"}}>
                    <button
                      onClick={handleRegister}
                      className="btn rounded-5 mb-4"
                      style={{ backgroundColor: "#22b3df", width: "35%", fontSize: "20px", color: "white", marginTop: `${isRegister ? "0" : "50px"}` }}
                    >
                      Register
                    </button>

                  
                    <button
                      onClick={isRegister ? handleRegister : handleLogin}
                      className="google-btn btn-ouline-dark rounded-5 mb-4"
                      style={{ width: "35%", fontSize: "12px", marginTop: `${isRegister ? "0" : "50px"}` }}
                    >
                      <i className="bi bi-google me-2"></i>Daftar Dengan Google
                    </button>
                    
                </div> :
                <button
                  onClick={handleLogin}
                  className="login-btn btn rounded-5 mb-4"
                  style={{ backgroundColor: "#22b3df", width: "35%", fontSize: "20px", color: "white", marginTop: `${isRegister ? "0" : "50px"}` }}
                >
                  Login
                </button>
                }

                <p>{isRegister ? "Sudah memiliki akun?" : "Tidak punya akun?"}</p>
                <p
                  onClick={() => { resetForm(); setAuthType(a => a === "login" ? "register" : "login") }}
                  style={{ marginTop: "-10px", cursor: "pointer", color: "blue" }}
                >
                  {isRegister ? "Login" : "Register"}
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-12 pad" style={{height:"300px"}}>
            <h1>TEST</h1>
          </div>
        </div>
      </div>
     
    </motion.div>
    <Footer/>
    </>
  );
}
