import React from "react";
import IphoneIpad from "../images/iphone-ipad.png";
import {Link} from 'react-router-dom';
import '../App.css';
import Logo from "../images/logo.png"
export const Header = () => {
return(
    <>
     {/* <!--- Navbar  --> */}
    <nav className="navbar navbar-expand-md navbar-light">
        <Link className="navbar-brand" to="#"><img src={Logo} alt="logo" /></Link>
        <button className="navbar-toggler bg-light " type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className=" navbar-toggler-icon "></span>
        </button>
        <div className="collapse navbar-collapse " id="collapsibleNavbar">
          <ul className="navbar-nav ml-auto mr-auto">
            <li className="nav-item">
              <Link className="nav-link text-dark " to="/">Home</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link text-dark" to="/">Sell</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link text-dark" to="/">Repair</Link>
            </li>   
            <li className="nav-item">
            <Link className="nav-link text-dark" to="/">Shop</Link>
            </li> 
            <li className="nav-item">
            <Link className="nav-link text-dark" to="/">Contact</Link>
            </li> 
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
            <Link className="nav-link text-dark" to="/">0987563421</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link text-dark btn" id="btnbook" to="/">BOOK REPAIR</Link>
            </li>    
          </ul>
        </div>  
      </nav>
     {/* <!--- Ending of Navbar  -->  */}

     {/* <!--- header  --> */}
     <div className="container-fluid pl-5 pr-5" id="headerImage">
       <div className="container row p-5">
         <div className="col-md-6 pl-5">
           <img src={IphoneIpad} alt="iphone-ipad" className="w-100"/>
         </div>
         <div className="col-md-6 text-white p-3 pr-5">
           <h1>Repair Your Broken IPad or IPhone in Brisbane</h1>
           <div className="pt-3 pb-3">
           <p>We offer cost effective IPhone and IPad screen and logic board repairs in Brisbane</p>
           <p>All parts used are genuine and are backed by our 12 month warranty</p>
          </div>
           <button className="btn btn-light text-primary pl-4 pr-4 fontfamilypopRegular font-size18">Repair now</button>
         </div>
       </div>
     </div>
     {/* <!--- Ending of header  --> */}
    </>
)
}