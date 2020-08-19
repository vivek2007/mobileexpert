/* eslint-disable no-restricted-globals */
import React from "react";
import "../App.css";
import IphoneRepair from "../images/iphone-repair.png";
import IpadRepair from "../images/ipad-repair.png";
import SamsungRepair from "../images/samsung-repair.png";
import MacRepair from "../images/mac-repair.png";
import LaptopRepair from "../images/laptop-repair.png";
import MotherRepair from "../images/motherboard-repair.png";
import Store from "../images/store.png";
import { FaMapMarkerAlt } from "react-icons/fa";

export const MobileExperts = () => {
  return (
    <>
      <div className="container">
        <div className=" row ">
          <div
            className="col-md-4 pt-5 pb-5 pr-5 d-flex align-items-center justify-content-center "
            style={{ flexDirection: "column" }}
          >
            <h1 className="fontfamilypopMedium font-size32">
              Mobile expert services
            </h1>
            <p className="fontfamilypoplight font-size18">
              Get your device repaired in just three easy steps
            </p>

            <button
              className="btn btn-outline-primary btn-block p-2 mt-3"
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >
              View Price
            </button>

            <div
              id="modal"
              className="modal w-100"
              style={{ height: "40vh", maxWidth: "750px" }}
            >
              <div className="mt-5">
                <div className="container">
                  <div class="row">
                    <div className="col">
                      <img
                        src={Store}
                        alt="mobileexpert"
                        class="img text-dark w-75 pl-5"
                      />
                    </div>

                    <div className="col">
                      <h5 className="text-center mt-5">
                        {" "}
                        Select your local Store
                      </h5>
                      <select class="custom-select " id="inputGroupSelect01">
                        <option selected>Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8 pt-3 pb-3">
            <div className="row pt-2 pb-2">
              <div className="col-md-4 px-2">
                <div className="col-md-12 feature-box">
                  <img src={IphoneRepair} alt="iphoneRepair" />
                  <h4 className="fontfamilypopMedium font-size18">
                    IPhone Repair
                  </h4>
                </div>
              </div>
              <div className="col-md-4 px-2">
                <div className="col-md-12 feature-box">
                  <img src={IpadRepair} alt="ipadRepair" />
                  <h4 className="fontfamilypopMedium font-size18">
                    IPad Repair
                  </h4>
                </div>
              </div>
              <div className="col-md-4 px-2">
                <div className="col-md-12 feature-box">
                  <img src={SamsungRepair} alt="SamsungRepair" />
                  <h4 className="fontfamilypopMedium font-size18">
                    Samsung Repair
                  </h4>
                </div>
              </div>
            </div>
            <div className="row pt-2 pb-2">
              <div className="col-md-4 px-2">
                <div className="col-md-12 feature-box">
                  <img src={MacRepair} alt="MacRepair" />
                  <h4 className="fontfamilypopMedium font-size18">
                    Macbook Repair
                  </h4>
                </div>
              </div>
              <div className="col-md-4 px-2">
                <div className="col-md-12 feature-box">
                  <img src={LaptopRepair} alt="LaptopRepair" />
                  <h4 className="fontfamilypopMedium font-size18">
                    Laptop Repair
                  </h4>
                </div>
              </div>
              <div className="col-md-4 px-2">
                <div className="col-md-12 feature-box">
                  <img src={MotherRepair} alt="MotherRepair" />
                  <h4 className="fontfamilypopMedium font-size18">
                    Iphone Motherboard Repair
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
