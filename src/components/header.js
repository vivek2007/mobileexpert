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

import IphoneRepair from "../images/iphone-repair.png";
import IpadRepair from "../images/ipad-repair.png";
import SamsungRepair from "../images/samsung-repair.png";
import MacRepair from "../images/mac-repair.png";
import LaptopRepair from "../images/laptop-repair.png";
import MotherRepair from "../images/motherboard-repair.png";

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
                data-target="#store"
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
                data-target="#store"
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
        id="store"
        tabindex="-1"
        role="dialog"
        aria-labelledby="storeTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog  modal-md modal-lg" role="document">
          <div
            class="modal-content"
            style={{
              height: "80vh",
            }}
          >
            <div class="modal-header">
              {" "}
              <img src={Logo_white} alt="logo" className="mr-auto" />{" "}
              <button
                type="button"
                class="close position-absolute"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body align-items-center h-100 overflow-auto">
              <div className="h-100">
                <div class="row align-items-center h-100 ">
                  <div class="col-12">
                    <div class="row">
                      <div className="col-12 text-center mb-5">
                        <h5 className="text-center my-2 heading-title">
                          Select Your Local Store
                        </h5>
                        <p class="pb-2 subtitle">
                          Please select your near store by selection Button
                        </p>
                      </div>

                      <div className="col-12 text-center">
                        <button
                          className="btn btn-outline-primary mb-4 d-flex mx-auto"
                          id="location"
                        >
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
                          id="loaction"
                          data-dismiss="modal"
                          data-target="#brand"
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade bd-example-modal-lg"
        id="brand"
        tabindex="-1"
        role="dialog"
        aria-labelledby="storeTitle"
        aria-hidden="true">
        <div class="modal-dialog  modal-md modal-lg" role="document">
          <div
            class="modal-content"
            style={{
              height: "80vh",
            }}
          >
            <div class="modal-header">
              {" "}
              <img src={Logo_white} alt="logo" className="mr-auto" />{" "}
              <button
                type="button"
                class="close position-absolute"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body align-items-center h-100 overflow-auto">
              <div class="row h-100  align-items-center ">
                <div class="col-12">
                  <div class="row text-center text-lg-left">
                    <div class="col-12 text-center mb-3">
                      <h5 className="text-center my-2 heading-title">
                        Chose Your Brand
                      </h5>
                      <p class="pb-2 subtitle">
                        Please select your near store by selection Button
                      </p>
                    </div>
                  </div>
                  <div class="row align-items-center text-center  select-phonebrand">
                    <div class="col-lg-4 col-md-4 col-4">
                      <a href="#" class="d-block mb-4 h-100" data-dismiss="modal" data-toggle="modal" data-target="#choosedevice" >
                        <img
                          class="img-fluid img-thumbnail"
                          src={Googlepixel}
                          alt=""
                        />
                      </a>
                    </div>
                    <div class="col-lg-4 col-md-4 col-4">
                      <a href="#" class="d-block mb-4 h-100" data-dismiss="modal" data-toggle="modal" data-target="#choosedevice" >
                        <img
                          class="img-fluid img-thumbnail"
                          src={SamsungLogo}
                          alt=""
                        />
                      </a>
                    </div>
                    <div class="col-lg-4 col-md-4 col-4">
                      <a href="#" class="d-block mb-4 h-100" data-dismiss="modal" data-toggle="modal" data-target="#choosedevice">
                        <img
                          class="img-fluid img-thumbnail"
                          src={Hplogo}
                          alt=""
                        />
                      </a>
                    </div>
                    <div class="col-lg-4 col-md-4 col-4">
                      <a href="#" class="d-block mb-4 h-100" data-dismiss="modal" data-toggle="modal" data-target="#choosedevice">
                        <img
                          class="img-fluid img-thumbnail"
                          src={Sonylogo}
                          alt=""
                        />
                      </a>
                    </div>
                    <div class="col-lg-4 col-md-4 col-4">
                      <a href="#" class="d-block mb-4 h-100" data-dismiss="modal" data-toggle="modal" data-target="#choosedevice">
                        <img
                          class="img-fluid img-thumbnail"
                          src={Applelogo}
                          alt=""
                        />
                      </a>
                    </div>
                    <div class="col-lg-4 col-md-4 col-4">
                      <a href="#" class="d-block mb-4 h-100" data-dismiss="modal" data-toggle="modal" data-target="#choosedevice">
                        <img
                          class="img-fluid img-thumbnail"
                          src={Windowslogo}
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade bd-example-modal-lg"
        id="choosedevice"
        tabindex="-1"
        role="dialog"
        aria-labelledby="storeTitle"
        aria-hidden="true">
        <div class="modal-dialog  modal-md modal-lg" role="document">
          <div
            class="modal-content"
            style={{
              height: "80vh",
            }}
          >
            <div class="modal-header">
              {" "}
              <img src={Logo_white} alt="logo" className="mr-auto" />{" "}
              <button
                type="button"
                class="close position-absolute"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body align-items-center h-100 overflow-auto">
              <div class="row h-100  align-items-center">
                  <div class="col-12">
                    <div class="row text-center text-lg-left align-items-center">
                      <div class="col-12 text-center mb-3">
                        <h5 className="text-center my-2 heading-title">
                          Chose Your Devise
                        </h5>
                        <p class="pb-2 subtitle">
                          Please select your near store by selection Button
                        </p>
                      </div>
                    </div>
                    <div class="row align-items-center text-center select-phone">
                      <div class="col-lg-4 col-md-4 col-4">
                        <a href="#" class="d-block mb-3 h-100" data-dismiss="modal" data-toggle="modal" data-target="#choosemodel">
                          <img src={IphoneRepair} alt="ipadRepair" />

                          <h4 class="fontfamilypopMedium font-size16 my-3">
                            IPhone Repair
                          </h4>
                        </a>
                      </div>
                      <div class="col-lg-4 col-md-4 col-4">
                        <a href="#" class="d-block mb-3 h-100" data-dismiss="modal" data-toggle="modal" data-target="#choosemodel">
                          <img src={IpadRepair} alt="ipadRepair" />

                          <h4 class="fontfamilypopMedium font-size16 my-3">
                            Ipad Repair
                          </h4>
                        </a>
                      </div>
                      <div class="col-lg-4 col-md-4 col-4">
                        <a href="#" class="d-block mb-3 h-100" data-dismiss="modal" data-toggle="modal" data-target="#choosemodel">
                          <img src={MacRepair} alt="ipadRepair" />

                          <h4 class="fontfamilypopMedium font-size16 my-3">
                            Mac Repair
                          </h4>
                        </a>
                      </div>
                      <div class="col-lg-4 col-md-4 col-4">
                        <a href="#" class="d-block mb-3 h-100" data-dismiss="modal" data-toggle="modal" data-target="#choosemodel">
                          <img src={MotherRepair} alt="ipadRepair" />

                          <h4 class="fontfamilypopMedium font-size16 my-3">
                            Motherboard Repair
                          </h4>
                        </a>
                      </div>
                      <div class="col-lg-4 col-md-4 col-4">
                        <a href="#" class="d-block mb-3 h-100" data-dismiss="modal" data-toggle="modal" data-target="#choosemodel">
                          <img src={MotherRepair} alt="ipadRepair" />

                          <h4 class="fontfamilypopMedium font-size16 my-3">
                            Watch
                          </h4>
                        </a>
                      </div>
                      <div class="col-lg-4 col-md-4 col-4">
                        <a href="#" class="d-block mb-3 h-100" data-dismiss="modal" data-toggle="modal" data-target="#choosemodel">
                          <img src={MotherRepair} alt="ipadRepair" />

                          <h4 class="fontfamilypopMedium font-size16 my-3">
                            Watch
                          </h4>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade bd-example-modal-lg"
        id="choosemodel"
        tabindex="-1"
        role="dialog"
        aria-labelledby="storeTitle"
        aria-hidden="true">
        <div class="modal-dialog  modal-md modal-lg" role="document">
          <div
            class="modal-content"
            style={{
              height: "80vh",
            }}
          >
            <div class="modal-header">
              {" "}
              <img src={Logo_white} alt="logo" className="mr-auto" />{" "}
              <button
                type="button"
                class="close position-absolute"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body align-items-center h-100 overflow-auto">
              <div class="row h-100  align-items-center">
                  <div class="col-12">
                    <div class="row text-center text-lg-left align-items-center">
                      <div class="col-12 text-center mb-3">
                        <h5 className="text-center my-2 heading-title">
                          Chose Your Devise
                        </h5>
                        <p class="pb-2 subtitle">
                           Chose Your Model
                        </p>
                      </div>
                    </div>
                    <div class="row align-items-center text-center select-phone">
                      <div class="col-lg-4 col-md-4 col-6">
                        <a href="#" class="d-block mb-3 h-100" data-dismiss="modal" data-toggle="modal" data-target="#whatisissue">
                          <img
                            class="img-fluid img-thumbnail"
                            src="https://www.mobileexpert.com.au/upload/device/1559295070-iPhone-8.jpg"
                            alt=""
                          />

                          <h4 class="fontfamilypopMedium font-size16 my-3">
                            IPhone 8
                          </h4>
                        </a>
                      </div>
                      <div class="col-lg-4 col-md-4 col-6">
                        <a href="#" class="d-block mb-3 h-100" data-dismiss="modal" data-toggle="modal" data-target="#whatisissue">
                          <img
                            class="img-fluid img-thumbnail"
                            src="https://www.mobileexpert.com.au/upload/device/1559295070-iPhone-8.jpg"
                            alt=""
                          />

                          <h4 class="fontfamilypopMedium font-size16 my-3">
                            IPhone 8 Plus
                          </h4>
                        </a>
                      </div>
                      <div class="col-lg-4 col-md-4 col-6">
                        <a href="#" class="d-block mb-3 h-100" data-dismiss="modal" data-toggle="modal" data-target="#whatisissue">
                          <img
                            class="img-fluid img-thumbnail"
                            src="https://www.mobileexpert.com.au/upload/device/1559295238-iPhone-XR.jpg"
                            alt=""
                          />

                          <h4 class="fontfamilypopMedium font-size16 my-3">
                            IPhone XR
                          </h4>
                        </a>
                      </div>
                      <div class="col-lg-4 col-md-4 col-6">
                        <a href="#" class="d-block mb-3 h-100" data-dismiss="modal" data-toggle="modal" data-target="#whatisissue">
                          <img
                            class="img-fluid img-thumbnail"
                            src="https://www.mobileexpert.com.au/upload/device/1559295070-iPhone-8.jpg"
                            alt=""
                          />

                          <h4 class="fontfamilypopMedium font-size16 my-3">
                            IPhone 8
                          </h4>
                        </a>
                      </div>
                      <div class="col-lg-4 col-md-4 col-6">
                        <a href="#" class="d-block mb-3 h-100" data-dismiss="modal" data-toggle="modal" data-target="#whatisissue">
                          <img
                            class="img-fluid img-thumbnail"
                            src="https://www.mobileexpert.com.au/upload/device/1559295070-iPhone-8.jpg"
                            alt=""
                          />

                          <h4 class="fontfamilypopMedium font-size16 my-3">
                            IPhone 8
                          </h4>
                        </a>
                      </div>
                      <div class="col-lg-4 col-md-4 col-6">
                        <a href="#" class="d-block mb-3 h-100" data-dismiss="modal" data-toggle="modal" data-target="#whatisissue">
                          <img
                            class="img-fluid img-thumbnail"
                            src="https://www.mobileexpert.com.au/upload/device/1559295070-iPhone-8.jpg"
                            alt=""
                          />

                          <h4 class="fontfamilypopMedium font-size16 my-3">
                            IPhone 8
                          </h4>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade bd-example-modal-lg"
        id="whatisissue"
        tabindex="-1"
        role="dialog"
        aria-labelledby="storeTitle"
        aria-hidden="true">
        <div class="modal-dialog  modal-md modal-lg" role="document">
          <div
            class="modal-content"
            style={{
              height: "80vh"
            }}
          >
            <div class="modal-header">
              {" "}
              <img src={Logo_white} alt="logo" className="mr-auto" />{" "}
              <button
                type="button"
                class="close position-absolute"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body align-items-center h-100 overflow-auto">
              <div class="row">
                <div class="col-12">
                  <div class="row position-absolute w-100 border-bottom">
                    <div class="col-4 py-3">
                      Iphone XS Max
                    </div>
                    <div class="col-4"></div>
                    <div class="col-4 py-3 text-right">
                      $159 ins GST & Repair
                    </div> 
                  </div>
                </div>               
              </div>
              <div class="row h-100  align-items-center">
                  <div class="col-12">
                    <div class="row text-center text-lg-left align-items-center">
                      
                      <div class="col-12 text-center mb-3">
                        <h5 className="text-center my-2 heading-title">
                          Chose Your Devise
                        </h5>
                        <p class="pb-2 subtitle">
                           What's the issue? 
                        </p>
                      </div>
                    </div>
                    <div class="row align-items-center text-left select-phone">
                      <div class="col-12">
                        <div id="accordion">
                          <div class="card">
                            <div class="card-header" id="headingOne">
                              <h5 class="mb-0">
                                <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                  <div class="form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label class="form-check-label" for="exampleCheck1">Broken Screen</label>
                                  </div>
                                </button>
                              </h5>
                            </div>

                            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                              <div class="card-body">
                                <div class="list-group flex-row">
                                  <button type="button" class="list-group-item list-group-item-action">
                                    Aftermarket Part <br />$59 inc GST
                                  </button>
                                  <button type="button" class="list-group-item list-group-item-action">
                                    Premium Part <br />$290 inc GST
                                  </button>
                                 
                                  
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="card">
                            <div class="card-header" id="headingTwo">
                              <h5 class="mb-0">
                                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                  <div class="form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck2" />
                                    <label class="form-check-label" for="exampleCheck2">Battery Replacement</label>
                                  </div>
                                </button>
                              </h5>
                            </div>
                            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                              <div class="card-body">
                                <div class="list-group flex-row">
                                  <button type="button" class="list-group-item list-group-item-action">
                                    Aftermarket Part <br />$59 inc GST
                                  </button>
                                  <button type="button" class="list-group-item list-group-item-action">
                                    Premium Part <br />$290 inc GST
                                  </button>                                                                   
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="card">
                            <div class="card-header" id="headingThree">
                              <h5 class="mb-0">
                                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                  <div class="form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck3" />
                                    <label class="form-check-label" for="exampleCheck3">Water Damage</label>
                                  </div>
                                </button>
                              </h5>
                            </div>
                            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                              <div class="card-body">
                                <div class="list-group flex-row">
                                  <button type="button" class="list-group-item list-group-item-action">
                                    Aftermarket Part <br />$59 inc GST
                                  </button>
                                  <button type="button" class="list-group-item list-group-item-action">
                                    Premium Part <br />$290 inc GST
                                  </button>                                                                   
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col-lg-12">
                        <button class="btn btn-primary btn-block p-2 mt-3 btn-lg" data-dismiss="modal" data-toggle="modal" data-target="#datetime">Continue</button>
                      </div>
                      
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade bd-example-modal-lg"
        id="datetime"
        tabindex="-1"
        role="dialog"
        aria-labelledby="storeTitle"
        aria-hidden="true">
        <div class="modal-dialog  modal-md modal-lg" role="document">
          <div
            class="modal-content"
            style={{
              height: "80vh"
            }}
          >
            <div class="modal-header">
              {" "}
              <img src={Logo_white} alt="logo" className="mr-auto" />{" "}
              <button
                type="button"
                class="close position-absolute"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body align-items-center h-100 overflow-auto">
              <div class="row">
                <div class="col-12">
                  <div class="row position-absolute w-100 border-bottom">
                    <div class="col-4 py-3">
                      Iphone XS Max
                    </div>
                    <div class="col-4"></div>
                    <div class="col-4 py-3 text-right">
                      $159 ins GST & Repair
                    </div> 
                  </div>
                </div>               
              </div>
              <div class="row h-100  align-items-center">
                  <div class="col-12">
                    <div class="row text-center text-lg-left align-items-center">
                      
                      <div class="col-12 text-center mb-3">
                        <h5 className="text-center my-2 heading-title">
                           Date & Time
                        </h5>
                        <p class="pb-2 subtitle">
                           Pick a date and time for your appointment, and we'll be there
                        </p>
                      </div>
                    </div>
                    <div class="row align-items-center text-left select-phone">
                      <div class="col-12">
                        <ul class="list-group flex-row mb-3 text-center">
                          <button type="button" class="list-group-item list-group-item-action border flex-fill px-1">Sun <br /> Aug 23</button>
                          <button type="button" class="list-group-item list-group-item-action border flex-fill px-1 active">Mon <br /> Aug 24</button>
                          <button type="button" class="list-group-item list-group-item-action border flex-fill px-1">Tue <br /> Aug 25</button>
                          <button type="button" class="list-group-item list-group-item-action border flex-fill px-1">Wed <br /> Aug 26</button>
                          <button type="button" class="list-group-item list-group-item-action border flex-fill px-1">Thu <br /> Aug 27</button>
                          <button type="button" class="list-group-item list-group-item-action border flex-fill px-1">Fri <br /> Aug 28</button>
                        </ul>                        
                      </div>
                      <div class="col-12 mb-3">
                        <div class="list-group flex-row text-center w-100">
                          <button type="button" class="list-group-item list-group-item-action border">
                            9AM - 11AM
                          </button>
                          <button type="button" class="list-group-item list-group-item-action border">
                            11AM - 1PM
                          </button>
                          <button type="button" class="list-group-item list-group-item-action border">
                             1PM - 3PM
                          </button>
                        </div>                                                
                      </div>
                      <div class="col-12">
                        <div class="list-group flex-row text-center">
                          <button type="button" class="list-group-item list-group-item-action border">
                            3PM - 5PM
                          </button>
                          <button type="button" class="list-group-item list-group-item-action border">
                            9AM - 11AM
                          </button>
                          <button type="button" class="list-group-item list-group-item-action border">
                            5PM - 7PM
                          </button>
                        </div>                                                
                      </div>


                      <div class="col-lg-12">
                        <button class="btn btn-primary btn-block p-2 mt-3 btn-lg" data-dismiss="modal" data-toggle="modal" data-target="#almostdone">Continue</button>
                      </div>
                      
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade bd-example-modal-lg"
        id="almostdone"
        tabindex="-1"
        role="dialog"
        aria-labelledby="storeTitle"
        aria-hidden="true">
        <div class="modal-dialog  modal-md modal-lg" role="document">
          <div
            class="modal-content"
            style={{
              height: "80vh"
            }}
          >
            <div class="modal-header">
              {" "}
              <img src={Logo_white} alt="logo" className="mr-auto" />{" "}
              <button
                type="button"
                class="close position-absolute"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body align-items-center h-100 overflow-auto">
              <div class="row">
                <div class="col-12">
                  <div class="row position-absolute w-100 border-bottom">
                    <div class="col-4 py-3">
                      Iphone XS Max
                    </div>
                    <div class="col-4"></div>
                    <div class="col-4 py-3 text-right">
                      $159 ins GST & Repair
                    </div> 
                  </div>
                </div>               
              </div>
              <div class="row h-100  align-items-center">
                  <div class="col-12">
                    <div class="row text-center text-lg-left align-items-center">
                      
                      <div class="col-12 text-center mb-3">
                        <h5 className="text-center my-2 heading-title">
                           Almost Done
                        </h5>
                        <p class="pb-2 subtitle">
                           Enter your contact info to finalize your appointment
                        </p>
                      </div>
                    </div>
                    <div class="row align-items-center text-left select-phone">
                      <div class="col-12">
                         <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                         <div class="row mb-2">
                              <div class="col-md-12">
                                  <div class="md-form">
                                       <label for="subject" class="">Full Name</label>
                                      <input type="text" id="subject" name="subject" class="form-control form-control-lg" />
                                     
                                  </div>
                              </div>
                          </div>
                          <div class="row mb-2">
                              
                              <div class="col-md-6">
                                  <div class="md-form">
                                      <label for="name" class="">Phone</label>
                                      <input type="text" id="name" name="name" class="form-control form-control-lg" />
                                      
                                  </div>
                              </div>
                              
                              <div class="col-md-6">
                                  <div class="md-form">
                                      <label for="email" class="">Your email</label>
                                      <input type="text" id="email" name="email" class="form-control form-control-lg" />
                                     
                                  </div>
                              </div>
                         
                          </div>
                          <div class="form-group">
                            <div class="form-check">
                              <input class="form-check-input" type="checkbox" id="gridCheck" />
                              <label class="form-check-label" for="gridCheck">
                                Send me notifications about this appointment via text message
                              </label>
                            </div>
                          </div>
                    
                          
                          
                          
                          
                      </form>                     
                      </div>
                      <div class="col-lg-12">
                        <button class="btn btn-secondary btn-lg disabled btn-block p-2 mt-3 disabled btn-lg" data-dismiss="modal" data-toggle="modal" data-target="">Book Now</button>
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
