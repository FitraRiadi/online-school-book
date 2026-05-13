import React from "react";
import { useState  } from "react";
import { Link } from "react-router-dom";








// Global Nav
export function Navigation () { 
    const [search,setSearch] = useState('');
    // console.log(search);    

    const handleSearch = () => {
        console.log("Tombol Diclick");
    }
    

    return (
        <>
            <nav className="navbar bg-body-tertiary shadow-sm sticky-top">
                <div className="container-fluid">
                    <Link to="/auth">
                        <h1 style={{cursor:"pointer"}} className="navbar-brand "><i className="bi bi-book mx-2"></i>OSB</h1>
                    </Link>
                    <div className="d-flex gap-3">
                        <Link to="/">
                            <p className="nav-link">Home</p>
                        </Link>

                        <Link to="/">
                            <p className="nav-link">About</p>
                        </Link>
                        
                        <Link to="/collection">
                            <p className="nav-link">Collection</p>
                        </Link>
                        
                    </div>

                    <div className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" name="keyword"  value={search} onChange={(e) => setSearch(e.target.value) }/>
                        <button className="btn btn-outline-success" name="submit" type="submit" onClick={handleSearch}>Search</button>
                    </div>
                    
                </div>
            </nav>
        </>
    );
}


// Admin Navigation
export function AdminNavigation () { 
    return (
        <>
            <nav className="navbar bg-body-tertiary shadow-sm sticky-top">
                <div className="container-fluid">
                    <Link to="/auth">
                        <h1 style={{cursor:"pointer"}} className="navbar-brand "><i className="bi bi-book mx-2"></i>OSB</h1>
                    </Link>
                    <div className="d-flex gap-3">
                        <Link to="/">
                            <a className="nav-link">Rekap</a>
                        </Link>

                        <Link to="/manage">
                            <a className="nav-link">Manage</a>
                        </Link>
                        
                        <Link to="/logout">
                            <a className="nav-link">Logout</a>
                        </Link>
                        
                    </div>

                    {/* <div className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" name="keyword"  value={search} onChange={(e) => setSearch(e.target.value) }/>
                        <button className="btn btn-outline-success" name="submit" type="submit" onClick={handleSearch}>Search</button>
                    </div> */}
                    
                </div>
            </nav>
        </>
    );
}