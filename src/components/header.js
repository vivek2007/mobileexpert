import React from "react";
import IphoneIpad from "../images/iphone-ipad.png";
import {Link} from 'react-router-dom';
import '../App.css';
import Logo from "../images/logo.png"
import Map from "../images/map.png"
import { FaMapMarkerAlt } from "react-icons/fa";
import Store from "../images/store.png"
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
            <a href="#modal" className="nav-link text-dark" rel="modal:open">Repair</a>
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
            <a href="#modal" className="nav-link text-dark btn" id="btnbook" rel="modal:open">BOOK REPAIR</a>
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
          <a href="#modal" className="btn btn-light text-primary pl-4 pr-4 fontfamilypopRegular font-size18" rel="modal:open">Repair now</a>
          <div id="modal" className="modal" style={{height:'40vh', maxWidth:"750px",backgroundImage:`url(${Map})`,backgroundSize:"cover"}}>
            <div className="mt-5">
              <div className="container">
               <div class="row">
                 <div className="col">
                 <h5 className="text-center mr-3"><u> Select Store </u></h5>
                     <img src={Store} alt="mobileexpert" class="img color-primary w-75 pl-5"/>
                 </div>
            
                <div className="col">
                     
                      <span style={{display:"inline-flex"}}><FaMapMarkerAlt className="mt-2" size="40"/><p> <span><strong style={{fontSize:'x-large'}}>&#160;&#160;Peddington</strong><br/>&#160;&#160;&#160;brisbane CBD</span></p></span> 
                    <hr/>
                    <span style={{display:"inline-flex"}}><FaMapMarkerAlt className="mt-2" size="40"/><p> <span><strong style={{fontSize:'x-large'}}>&#160;&#160;Calamvale</strong><br/>&#160;&#160;&#160;&#160;South brisbane</span></p></span> 
                </div>
              </div>
              </div>
            </div>
            </div>
         </div>
       </div>
     </div>
     {/* <!--- Ending of header  --> */}
    </>
)
}