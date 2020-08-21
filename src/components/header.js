import React from "react";
import IphoneIpad from "../images/iphone-ipad.png";
import { Link } from "react-router-dom";
import "../App.css";
import Logo from "../images/logo.png";
import Map from "../images/map.png";
import { FaMapMarkerAlt } from "react-icons/fa";
import Store from "../images/store.png";
import Stars from "../images/stars.webp";
import Testi from "../images/testinomial.png";
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
          class="modal-dialog  modal-lg "
          role="document"
        >
          
          <div
            class="modal-content"
            style={{
              height: "60vh",
             
            }}
          >
          <div class="modal-header">  <img src={Logo} alt="logo" className="mx-auto" /> <button
                type="button"
                class="close position-absolute"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button></div>
            <div class="modal-body">
             
              <div className="">
                <div class="row align-items-center">
                  <div className="col-12 text-center">
                    <h5 className="text-center my-3">
                      Select Your Local Store
                    </h5>
                    
                  </div>

                  <div className="col-12 text-center">
                    <button
                      className=" btn btn-primary mb-4 d-flex mx-auto"
                      
                    >
                      <FaMapMarkerAlt className="mt-2 mr-3" size="40" />
                      <p class="text-left">
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
                      className="btn btn-primary  d-flex mx-auto"
                      
                    >
                      <FaMapMarkerAlt className="mt-2 mr-3" size="40" />
                      <p class="text-left">
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
    </>
  );
};
