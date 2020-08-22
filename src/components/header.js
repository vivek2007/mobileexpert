import React from "react";
import IphoneIpad from "../images/iphone-ipad.png";
import { Link } from "react-router-dom";
import "../App.css";
import Logo from "../images/logo.png";
import Logo_white from "../images/popup_tansparent.png";

import Map from "../images/map.png";
import { FaMapMarkerAlt } from "react-icons/fa";
import Store from "../images/store.png";
import Stars from "../images/stars.webp";
import Testi from "../images/testinomial.png";

import Googlepixel from "../images/googlepixel.png";
import SamsungLogo from "../images/samsung-logo.png";
import Hplogo from "../images/hp-logo.png";
import Sonylogo from "../images/sony-logo.png";

import Applelogo from "../images/apple_brand.png";
import Windowslogo from "../images/windows_brand.png";




export const Header = () => {
  return (
    <>
      {/* <!--- Navbar  --> */}
      <nav className="navbar navbar-expand-md navbar-light">
        <Link className="navbar-brand" to="#">
          <img src={Logo} alt="logo" />
        </Link>
        <button
          className="navbar-toggler bg-light "
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className=" navbar-toggler-icon "></span>
        </button>
        <div className="collapse navbar-collapse " id="collapsibleNavbar">
          <ul className="navbar-nav ml-auto mr-auto">
            <li className="nav-item">
              <Link className="nav-link text-dark " to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/">
                Sell
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-dark"
                data-toggle="modal"
                data-target="#exampleModalCenter"
              >
                Repair
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/">
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/">
                Contact
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/">
                0987563421
              </Link>
            </li>
            <li className="nav-item">
              <button
                className="nav-link text-dark btn"
                id="btnbook"
                data-toggle="modal"
                data-target="#exampleModalCenter"
              >
                BOOK REPAIR
              </button>
            </li>
          </ul>
        </div>
      </nav>
      {/* <!--- Ending of Navbar  -->  */}

   
      {/* model starts here */}
      <div
        class="modal fade bd-example-modal-lg"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div
          class="modal-dialog  modal-md modal-lg"
          role="document"
        >
          
          <div
            class="modal-content"
            style={{
              height: "80vh",
             
            }}
          >
          <div class="modal-header">  <img src={Logo_white} alt="logo" className="mr-auto" /> <button
                type="button"
                class="close position-absolute"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button></div>
            <div class="modal-body align-items-center h-100 overflow-auto">
             
              <div className="h-100">
                <div class="row align-items-center h-100 d-none">
                  <div class="col-12">
                    <div class="row">
                       <div className="col-12 text-center mb-5">
                    <h5 className="text-center my-2 heading-title">
                      Select Your Local Store
                    </h5>
                    <p class="pb-2 subtitle">Please select your near store by selection Button</p>
                    
                  </div>

                  <div className="col-12 text-center">
                    <button
                      className="btn btn-outline-primary mb-4 d-flex mx-auto">
                      <FaMapMarkerAlt className="mt-2 mr-3" size="40" />
                      <p class="text-left mb-2">
                        <span>
                          <strong style={{ fontSize: "x-large" }}>
                            Peddington
                          </strong>
                          <br />
                          brisbane CBD
                        </span>
                      </p>
                    </button>
                   
                   
                  </div>
                  <div className="col-12">
                   <button
                      className="btn btn-outline-primary d-flex mx-auto"
                      
                    >
                      <FaMapMarkerAlt className="mt-2 mr-3" size="40" />
                      <p class="text-left mb-2">
                        <span>
                          <strong style={{ fontSize: "x-large" }}>
                          Calamvale
                          </strong>
                          <br />
                          South brisbane
                        </span>
                      </p>
                    </button>
                  </div>
                    </div>
                  </div>
                </div>


                  <div class="row h-100  align-items-center">
                    <div class="col-12">
                      <div class="row text-center text-lg-left">

                    <div class="col-12 text-center mb-3">
                      <h5 className="text-center my-2 heading-title">
                      Chose Your Brand
                      </h5>
                      <p class="pb-2 subtitle">Please select your near store by selection Button</p>
                    </div>
                   
                  </div>
                  <div class="row align-items-center text-center select-phone">
                     <div class="col-lg-6 col-md-4 col-6">
                      <a href="#" class="d-block mb-4 h-100">
                            <img class="img-fluid img-thumbnail" src={Googlepixel} alt="" />
                          </a>
                    </div>
                    <div class="col-lg-6 col-md-4 col-6">
                      <a href="#" class="d-block mb-4 h-100">
                            <img class="img-fluid img-thumbnail" src={SamsungLogo} alt="" />
                          </a>
                    </div>
                    <div class="col-lg-6 col-md-4 col-6">
                      <a href="#" class="d-block mb-4 h-100">
                            <img class="img-fluid img-thumbnail" src={Hplogo} alt="" />
                          </a>
                    </div>
                    <div class="col-lg-6 col-md-4 col-6">
                      <a href="#" class="d-block mb-4 h-100">
                            <img class="img-fluid img-thumbnail" src={Sonylogo} alt="" />
                          </a>
                    </div>
                    <div class="col-lg-6 col-md-4 col-6">
                      <a href="#" class="d-block mb-4 h-100">
                            <img class="img-fluid img-thumbnail" src={Applelogo} alt="" />
                          </a>
                    </div>
                    <div class="col-lg-6 col-md-4 col-6">
                      <a href="#" class="d-block mb-4 h-100">
                            <img class="img-fluid img-thumbnail" src={Windowslogo} alt="" />
                          </a>
                    </div>




                  </div>

                    </div>
                  </div>



                  <div class="row h-100  align-items-center d-none">
                    <div class="col-12">

                   <div class="row text-center text-lg-left align-items-center">

                    <div class="col-12 text-center mb-5">
                      <h5 className="text-center my-2 heading-title">
                      Chose Your Model
                      </h5>
                      <p class="pb-2 subtitle">Please select your near store by selection Button</p>
                    </div>

                  
                  </div>
                    <div class="row align-items-center text-center select-phone">
                    <div class="col-lg-6 col-md-4 col-6">
                      <a href="#" class="d-block mb-3 h-100">
                            <img class="img-fluid img-thumbnail" src="https://www.mobileexpert.com.au/upload/device/1559295070-iPhone-8.jpg" alt="" />
                          
                            <h4 class="fontfamilypopMedium font-size16 my-3">IPhone Repair</h4>
                          </a>
                          
                    </div>
                    <div class="col-lg-6 col-md-4 col-6">
                      <a href="#" class="d-block mb-3 h-100">
                            <img class="img-fluid img-thumbnail" src="https://www.mobileexpert.com.au/upload/device/1559295070-iPhone-8.jpg" alt="" />
                          
                            <h4 class="fontfamilypopMedium font-size16 my-3">IPhone Repair</h4>
                          </a>
                          
                    </div>
                    <div class="col-lg-6 col-md-4 col-6">
                      <a href="#" class="d-block mb-3 h-100">
                            <img class="img-fluid img-thumbnail" src="https://www.mobileexpert.com.au/upload/device/1559295238-iPhone-XR.jpg" alt="" />
                          
                            <h4 class="fontfamilypopMedium font-size16 my-3">IPhone Repair</h4>
                          </a>
                          
                    </div>
                    <div class="col-lg-6 col-md-4 col-6">
                      <a href="#" class="d-block mb-3 h-100">
                            <img class="img-fluid img-thumbnail" src="https://www.mobileexpert.com.au/upload/device/1559295070-iPhone-8.jpg" alt="" />
                          
                            <h4 class="fontfamilypopMedium font-size16 my-3">IPhone Repair</h4>
                          </a>
                          
                    </div>
                    </div>
                     </div>
                    </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


