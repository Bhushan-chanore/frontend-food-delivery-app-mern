import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../image/logo.png"
import Cart from "../screens/Cart";
import Modal from "../Model"


import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Bootstrap JavaScript
import "bootstrap-dark-5/dist/css/bootstrap-dark.min.css"; // Bootstrap Dark CSS
// Update the import statement to match the correct casing
// Correct import statement based on your file structure
// Corrected import statement based on the actual file name on disk

function Navbar() {

    // for cart view in 90 percent screen
    const[cartView , setCartView] = useState(false)

    const navigate = useNavigate();
    const handelLogout = () =>{
       
        localStorage.removeItem("authToken");
        navigate("/Login");
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
            <div className="container-fluid">
                <Link className="navbar-brand fs-1 fst-italic fst-bold" to="/"><img src={logo} alt="ISTA" style={{ "maxHeight": "50px" }} /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
                        </li>

                        {/* functionality adding what happen when user login and log out */}

                        {(localStorage.getItem("authToken")) ?

                            <li className="nav-item">
                                <Link className="nav-link active fs-5" aria-current="page" to="/myOrder">Order-history</Link>
                            </li>
                            :
                            ""
                        }
                    </ul>



                    {(!localStorage.getItem("authToken")) ?
                        <div className="d-flex">
                            <Link className="btn btn-white bg-white text-success mx-1" to="/login">Login</Link>

                            <Link className="btn btn-white bg-white text-success mx-1" to="/createuser">SignUp</Link>
                        </div>
                        :
                        
                        <div className="d-flex">
                            <div className="btn btn-white bg-white text-success mx-1" onClick={()=>{setCartView(true)}}>My Cart</div>
                            {cartView? <Modal onClose={()=>setCartView(false)}><Cart/></Modal>:null}

                            <div className="btn btn-white bg-white text-danger mx-1"  onClick={handelLogout}>Log-Out</div>
                        </div>
                    }

                </div>
            </div>
        </nav>
    );
}

export default Navbar;
