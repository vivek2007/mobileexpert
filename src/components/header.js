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

      {/* <!--- header  --> */}
      <div className="pl-5 pr-5" id="headerImage">
        <div className="pt-5 pb-5">
          <div class="row p-5">
            <div class="col-md-3">
              <img src={IphoneIpad} alt="iphone-ipad" className="w-100" />
            </div>
            <div class="col-md-5">
              <h1>Repair Your Broken IPad or IPhone in Brisbane</h1>
              <div className="pt-3 pb-3">
                <p>
                  We offer cost effective IPhone and IPad screen and logic board
                  repairs in Brisbane
                </p>
                <p>
                  All parts used are genuine and are backed by our 12 month
                  warranty
                </p>
              </div>
              <button
                type="button"
                class="btn btn-light text-primary pl-4 pr-4 fontfamilypopRegular font-size18"
                data-toggle="modal"
                data-target="#exampleModalCenter"
              >
                Repair now
              </button>
            </div>
            <div class="col align-self-center">
              <span style={{ display: "block" }} className="text-warning ml-3">
                <b>5.0</b>
                <img className="mb-1 pl-2" alt="rating" src={Stars} />&#160;&#160;&#160;
                <span className="text-light">
                  <b>
                    (based on <u>Google Reviews</u>)
                  </b>
                </span>
              </span>
              <div className="row mt-3">
                <div className="col-md-2">
                  <img
                    alt="sara"
                    src={Testi}
                    width="75px"
                    className="img mr-5"
                  />
                </div>
                <div className="col-md-10">
                  <span className="text-light">
                    <i>
                      “They’ve helped us tremendously and are seriously
                      <br /> knowledgeable and honest. Couldn’t recommend the{" "}
                      <br />
                      crew at sprintlaw more!” - <b>Amit, Soul Burger</b>
                    </i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--- Ending of header  --> */}
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
          class="modal-dialog  modal-lg modal-dialog-centered "
          role="document"
        >
          <div
            class="modal-content"
            style={{
              height: "40vh",
              backgroundImage: `url(${Map})`,
              backgroundSize: "cover",
            }}
          >
            <div class="modal-body">
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <div className="container mt-5">
                <div class="row">
                  <div className="col">
                    <h5 className="text-center mr-5">
                      <u> Select Store </u>
                    </h5>
                    <img
                      src={Store}
                      alt="mobileexpert"
                      class="img color-primary w-75 pl-5"
                    />
                  </div>

                  <div className="col align-self-center">
                    <button
                      className=" btn btn-light"
                      style={{ display: "inline-flex", marginLeft:'70px' }}
                    >
                      <FaMapMarkerAlt className="mt-2" size="40" />
                      <p>
                        <span>
                          <strong style={{ fontSize: "x-large" }}>
                            &#160;&#160;Peddington
                          </strong>
                          <br />
                          &#160;&#160;&#160;brisbane CBD
                        </span>
                      </p>
                    </button>
                    <hr />
                    <button
                      className="btn btn-light "
                      style={{ display: "inline-flex", marginLeft:'70px' }}
                    >
                      <FaMapMarkerAlt className="mt-2" size="40" />
                      <p>
                        <span>
                          <strong style={{ fontSize: "x-large" }}>
                          &#160;&#160;&#160;&#160;Calamvale
                          </strong>
                          <br />
                          &#160;&#160;&#160;&#160;&#160;&#160;South brisbane
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
