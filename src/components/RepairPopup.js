import React, { Component } from "react";
// import {
//   Container,
//   Row,
//   Col,
//   Button,
//   Form,
//   FormGroup,
//   Label,
//   Input,
//   FormText,
// } from "reactstrap";
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

class RepairPopup extends React.Component {
  constructor(props, context) {
    super(props, context);

    //Step form Function
    this.state = {
      info1: true,
      info2: false,
      info3: false,
      info4: false,
      info5: false,
      info6: false,
      info7: false,
      showBasic: true,
      showCertInfo: false,
      showSocialInfo: false,
      showContactInfo: false,
      showStep5: false,
      showStep6: false,
      showStep7: false,
    };
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this.handleBasic = this.handleBasic.bind(this);
    this.handleContactInfo = this.handleContactInfo.bind(this);
    this.handleCertInfo = this.handleCertInfo.bind(this);
    this.handleSocialInfo = this.handleSocialInfo.bind(this);
    this.handleStep5 = this.handleStep5.bind(this);
    this.handleStep6 = this.handleStep6.bind(this);
    this.handleStep7 = this.handleStep7.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  show() {
    this.setState({ showCertInfo: true });
  }
  hide() {
    this.setState({ showCertInfo: false });
  }

  handleBasic(e) {
    e.preventDefault();

    // this.setState({ showBasic: false });
    // this.setState({ showCertInfo: false });
    this.setState({
      showBasic: true,
      info1: true,
      showContactInfo: false,
      info2: false,
      showSocialInfo: false,
      info3: false,
      info4: false,
      info5: false,
      info6: false,
      info7: false,
    });
  }

  handleContactInfo(e) {
    e.preventDefault();

    this.setState({
      showBasic: false,
      info1: false,
      showContactInfo: true,
      info2: true,
      showSocialInfo: false,
      info3: false,
      info4: false,
      info5: false,
      info6: false,
      info7: false,
    });
  }

  handleCertInfo(e) {
    e.preventDefault();
    //if(this.handleValidation()){
    this.setState({
      showBasic: false,
      info1: false,
      showContactInfo: false,
      info2: false,
      showCertInfo: true,
      info3: true,
      showSocialInfo: false,
      info4: false,
      info5: false,
      info6: false,
      info7: false,
    });
    //}
  }

  handleSocialInfo(e) {
    e.preventDefault();
    //if(this.handleValidation()){

    this.setState({
      showBasic: false,
      info1: false,
      showContactInfo: false,
      info2: false,
      showCertInfo: false,
      info3: false,
      showSocialInfo: true,
      info4: true,
      info5: false,
      info6: false,
      info7: false,
    });
    //}
  }

  handleStep5(e) {
    e.preventDefault();

    this.setState({
      showBasic: false,
      info1: false,
      showContactInfo: false,
      info2: false,
      showCertInfo: false,
      info3: false,
      showSocialInfo: false,
      info4: false,
      showStep5: true,
      info5: true,
      info6: false,
      info7: false,
    });
    //}
  }

  handleStep6(e) {
    e.preventDefault();
    this.setState({
      showBasic: false,
      info1: false,
      showContactInfo: false,
      info2: false,
      showCertInfo: false,
      info3: false,
      showSocialInfo: false,
      info4: false,
      showStep5: false,
      info5: false,
      showStep6: true,
      info6: true,
      info7: false,
    });
    //}
  }

  handleStep7(e) {
    e.preventDefault();
    //alert('2');

    this.setState({
      showBasic: false,
      info1: false,
      showContactInfo: false,
      info2: false,
      showCertInfo: false,
      info3: false,
      showSocialInfo: false,
      info4: false,
      showStep5: false,
      info5: false,
      showStep6: false,
      info6: false,
      showStep7: true,
      info7: true,
    });
  }

  handleClose(e) {
    e.preventDefault();
    //alert('2');

    this.setState({
      showBasic: true,
      info1: true,
      showContactInfo: false,
      info2: false,
      showCertInfo: false,
      info3: false,
      showSocialInfo: false,
      info4: false,
      showStep5: false,
      info5: false,
      showStep6: false,
      info6: false,
      showStep7: false,
      info7: false,
    });
  }

  render() {
    return (
      <div
        className="modal fade bd-example-modal-lg"
        id="store"
        tabindex="-1"
        role="dialog"
        aria-labelledby="storeTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog  modal-md modal-lg" role="document">
          <div
            className="modal-content"
            style={{
              height: "80vh",
            }}
          >
            <div className="modal-header">
              {" "}
              <img src={Logo_white} alt="logo" className="mr-auto" />{" "}
              <button
                type="button"
                className="close position-absolute"
                data-dismiss="modal"
                aria-label="Close"
                onClick={this.handleClose}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body align-items-center h-100 overflow-auto">
              {this.state.showBasic ? (
                <div className="step1 h-100">
                  <div className="h-100">
                    <div className="row align-items-center h-100 ">
                      <div className="col-12">
                        <div className="row">
                          <div className="col-12 text-center mb-5">
                            <h5 className="text-center my-2 heading-title">
                              Select Your Local Store
                            </h5>
                            <p className="pb-2 subtitle">
                              Please select your near store by selection Button
                            </p>
                          </div>
                          <div className="col-12 text-center">
                            <button
                              className="btn btn-outline-primary mb-4 d-flex mx-auto"
                              id="location"
                              onClick={this.handleContactInfo}
                            >
                              <FaMapMarkerAlt className="mt-2 mr-3" size="40" />
                              <p className="text-left mb-2">
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
                            >
                              <FaMapMarkerAlt className="mt-2 mr-3" size="40" />
                              <p className="text-left mb-2">
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
              ) : null}

              {this.state.showContactInfo ? (
                <div className="step2  h-100">
                  <div className="row h-100  align-items-center ">
                    <div className="col-12">
                      <div className="row text-center text-lg-left">
                        <div className="col-12 text-center mb-3">
                          <h5 className="text-center my-2 heading-title">
                            Chose Your Brand
                          </h5>
                          <p className="pb-2 subtitle">
                            Please select your near store by selection Button
                          </p>
                        </div>
                      </div>
                      <div className="row align-items-center text-center  select-phonebrand">
                        <div className="col-lg-4 col-md-4 col-4">
                          <a
                            href="#"
                            className="d-block mb-4 h-100"
                            onClick={this.handleCertInfo}
                          >
                            <img
                              className="img-fluid img-thumbnail"
                              src={Googlepixel}
                              alt=""
                            />
                          </a>
                        </div>

                        <div className="col-lg-4 col-md-4 col-4">
                          <a
                            href="#"
                            className="d-block mb-4 h-100"
                            onClick={this.handleCertInfo}
                          >
                            <img
                              className="img-fluid img-thumbnail"
                              src={SamsungLogo}
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="col-lg-4 col-md-4 col-4">
                          <a
                            href="#"
                            className="d-block mb-4 h-100"
                            onClick={this.handleCertInfo}
                          >
                            <img
                              className="img-fluid img-thumbnail"
                              src={Hplogo}
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="col-lg-4 col-md-4 col-4">
                          <a
                            href="#"
                            className="d-block mb-4 h-100"
                            onClick={this.handleCertInfo}
                          >
                            <img
                              className="img-fluid img-thumbnail"
                              src={Sonylogo}
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="col-lg-4 col-md-4 col-4">
                          <a
                            href="#"
                            className="d-block mb-4 h-100"
                            onClick={this.handleCertInfo}
                          >
                            <img
                              className="img-fluid img-thumbnail"
                              src={Applelogo}
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="col-lg-4 col-md-4 col-4">
                          <a
                            href="#"
                            className="d-block mb-4 h-100"
                            onClick={this.handleCertInfo}
                          >
                            <img
                              className="img-fluid img-thumbnail"
                              src={Windowslogo}
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}

              {this.state.showCertInfo ? (
                <div className="step3  h-100">
                  <div className="row h-100  align-items-center">
                    <div className="col-12">
                      <div className="row text-center text-lg-left align-items-center">
                        <div className="col-12 text-center mb-3">
                          <h5 className="text-center my-2 heading-title">
                            Chose Your Devise
                          </h5>
                          <p className="pb-2 subtitle">
                            Please select your near store by selection Button
                          </p>
                        </div>
                      </div>
                      <div className="row align-items-center text-center select-phone">
                        <div className="col-lg-4 col-md-4 col-4">
                          <a
                            href="#"
                            className="d-block mb-3 h-100"
                            onClick={this.handleSocialInfo}
                          >
                            <img src={IphoneRepair} alt="ipadRepair" />

                            <h4 className="fontfamilypopMedium font-size16 my-3">
                              IPhone Repair
                            </h4>
                          </a>
                        </div>
                        <div className="col-lg-4 col-md-4 col-4">
                          <a
                            href="#"
                            className="d-block mb-3 h-100"
                            onClick={this.handleSocialInfo}
                          >
                            <img src={IpadRepair} alt="ipadRepair" />

                            <h4 className="fontfamilypopMedium font-size16 my-3">
                              Ipad Repair
                            </h4>
                          </a>
                        </div>
                        <div className="col-lg-4 col-md-4 col-4">
                          <a
                            href="#"
                            className="d-block mb-3 h-100"
                            onClick={this.handleSocialInfo}
                          >
                            <img src={MacRepair} alt="ipadRepair" />

                            <h4 className="fontfamilypopMedium font-size16 my-3">
                              Mac Repair
                            </h4>
                          </a>
                        </div>
                        <div className="col-lg-4 col-md-4 col-4">
                          <a
                            href="#"
                            className="d-block mb-3 h-100"
                            onClick={this.handleSocialInfo}
                          >
                            <img src={MotherRepair} alt="ipadRepair" />

                            <h4 className="fontfamilypopMedium font-size16 my-3">
                              Motherboard Repair
                            </h4>
                          </a>
                        </div>
                        <div className="col-lg-4 col-md-4 col-4">
                          <a
                            href="#"
                            className="d-block mb-3 h-100"
                            onClick={this.handleSocialInfo}
                          >
                            <img src={MotherRepair} alt="ipadRepair" />

                            <h4 className="fontfamilypopMedium font-size16 my-3">
                              Watch
                            </h4>
                          </a>
                        </div>
                        <div className="col-lg-4 col-md-4 col-4">
                          <a
                            href="#"
                            className="d-block mb-3 h-100"
                            onClick={this.handleSocialInfo}
                          >
                            <img src={MotherRepair} alt="ipadRepair" />

                            <h4 className="fontfamilypopMedium font-size16 my-3">
                              Watch
                            </h4>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}

              {this.state.showSocialInfo ? (
                <div className="step4  h-100">
                  <div className="row h-100  align-items-center">
                    <div className="col-12">
                      <div className="row text-center text-lg-left align-items-center">
                        <div className="col-12 text-center mb-3">
                          <h5 className="text-center my-2 heading-title">
                            Chose Your Devise
                          </h5>
                          <p className="pb-2 subtitle">Chose Your Model</p>
                        </div>
                      </div>
                      <div className="row align-items-center text-center select-phone">
                        <div className="col-lg-4 col-md-4 col-6">
                          <a
                            href="#"
                            className="d-block mb-3 h-100"
                            onClick={this.handleStep5}
                          >
                            <img
                              className="img-fluid img-thumbnail"
                              src="https://www.mobileexpert.com.au/upload/device/1559295070-iPhone-8.jpg"
                              alt=""
                            />

                            <h4 className="fontfamilypopMedium font-size16 my-3">
                              IPhone 8
                            </h4>
                          </a>
                        </div>
                        <div className="col-lg-4 col-md-4 col-6">
                          <a
                            href="#"
                            className="d-block mb-3 h-100"
                            onClick={this.handleStep5}
                          >
                            <img
                              className="img-fluid img-thumbnail"
                              src="https://www.mobileexpert.com.au/upload/device/1559295070-iPhone-8.jpg"
                              alt=""
                            />

                            <h4 className="fontfamilypopMedium font-size16 my-3">
                              IPhone 8 Plus
                            </h4>
                          </a>
                        </div>
                        <div className="col-lg-4 col-md-4 col-6">
                          <a
                            href="#"
                            className="d-block mb-3 h-100"
                            onClick={this.handleStep5}
                          >
                            <img
                              className="img-fluid img-thumbnail"
                              src="https://www.mobileexpert.com.au/upload/device/1559295238-iPhone-XR.jpg"
                              alt=""
                            />

                            <h4 className="fontfamilypopMedium font-size16 my-3">
                              IPhone XR
                            </h4>
                          </a>
                        </div>
                        <div className="col-lg-4 col-md-4 col-6">
                          <a
                            href="#"
                            className="d-block mb-3 h-100"
                            onClick={this.handleStep5}
                          >
                            <img
                              className="img-fluid img-thumbnail"
                              src="https://www.mobileexpert.com.au/upload/device/1559295070-iPhone-8.jpg"
                              alt=""
                            />

                            <h4 className="fontfamilypopMedium font-size16 my-3">
                              IPhone 8
                            </h4>
                          </a>
                        </div>
                        <div className="col-lg-4 col-md-4 col-6">
                          <a
                            href="#"
                            className="d-block mb-3 h-100"
                            onClick={this.handleStep5}
                          >
                            <img
                              className="img-fluid img-thumbnail"
                              src="https://www.mobileexpert.com.au/upload/device/1559295070-iPhone-8.jpg"
                              alt=""
                            />

                            <h4 className="fontfamilypopMedium font-size16 my-3">
                              IPhone 8
                            </h4>
                          </a>
                        </div>
                        <div className="col-lg-4 col-md-4 col-6">
                          <a
                            href="#"
                            className="d-block mb-3 h-100"
                            onClick={this.handleStep5}
                          >
                            <img
                              className="img-fluid img-thumbnail"
                              src="https://www.mobileexpert.com.au/upload/device/1559295070-iPhone-8.jpg"
                              alt=""
                            />

                            <h4 className="fontfamilypopMedium font-size16 my-3">
                              IPhone 8
                            </h4>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}

              {this.state.showStep5 ? (
                <div className="step5  h-100">
                  {" "}
                  <div className="row">
                    <div className="col-12">
                      <div className="row position-absolute w-100 border-bottom">
                        <div className="col-4 py-3">Iphone XS Max</div>
                        <div className="col-4"></div>
                        <div className="col-4 py-3 text-right">
                          $159 ins GST & Repair
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row h-100  align-items-center">
                    <div className="col-12">
                      <div className="row text-center text-lg-left align-items-center">
                        <div className="col-12 text-center mb-3">
                          <h5 className="text-center my-2 heading-title">
                            Chose Your Devise
                          </h5>
                          <p className="pb-2 subtitle">What's the issue?</p>
                        </div>
                      </div>
                      <div className="row align-items-center text-left select-phone">
                        <div className="col-12">
                          <div id="accordion">
                            <div className="card">
                              <div className="card-header" id="headingOne">
                                <h5 className="mb-0">
                                  <button
                                    className="btn btn-link"
                                    data-toggle="collapse"
                                    data-target="#collapseOne"
                                    aria-expanded="true"
                                    aria-controls="collapseOne"
                                  >
                                    <div className="form-check">
                                      <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="exampleCheck1"
                                      />
                                      <label
                                        className="form-check-label"
                                        for="exampleCheck1"
                                      >
                                        Broken Screen
                                      </label>
                                    </div>
                                  </button>
                                </h5>
                              </div>

                              <div
                                id="collapseOne"
                                className="collapse show"
                                aria-labelledby="headingOne"
                                data-parent="#accordion"
                              >
                                <div className="card-body">
                                  <div className="list-group flex-row">
                                    <button
                                      type="button"
                                      className="list-group-item list-group-item-action"
                                    >
                                      Aftermarket Part <br />
                                      $59 inc GST
                                    </button>
                                    <button
                                      type="button"
                                      className="list-group-item list-group-item-action"
                                    >
                                      Premium Part <br />
                                      $290 inc GST
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card">
                              <div className="card-header" id="headingTwo">
                                <h5 className="mb-0">
                                  <button
                                    className="btn btn-link collapsed"
                                    data-toggle="collapse"
                                    data-target="#collapseTwo"
                                    aria-expanded="false"
                                    aria-controls="collapseTwo"
                                  >
                                    <div className="form-check">
                                      <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="exampleCheck2"
                                      />
                                      <label
                                        className="form-check-label"
                                        for="exampleCheck2"
                                      >
                                        Battery Replacement
                                      </label>
                                    </div>
                                  </button>
                                </h5>
                              </div>
                              <div
                                id="collapseTwo"
                                className="collapse"
                                aria-labelledby="headingTwo"
                                data-parent="#accordion"
                              >
                                <div className="card-body">
                                  <div className="list-group flex-row">
                                    <button
                                      type="button"
                                      className="list-group-item list-group-item-action"
                                    >
                                      Aftermarket Part <br />
                                      $59 inc GST
                                    </button>
                                    <button
                                      type="button"
                                      className="list-group-item list-group-item-action"
                                    >
                                      Premium Part <br />
                                      $290 inc GST
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card">
                              <div className="card-header" id="headingThree">
                                <h5 className="mb-0">
                                  <button
                                    className="btn btn-link collapsed"
                                    data-toggle="collapse"
                                    data-target="#collapseThree"
                                    aria-expanded="false"
                                    aria-controls="collapseThree"
                                  >
                                    <div className="form-check">
                                      <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="exampleCheck3"
                                      />
                                      <label
                                        className="form-check-label"
                                        for="exampleCheck3"
                                      >
                                        Water Damage
                                      </label>
                                    </div>
                                  </button>
                                </h5>
                              </div>
                              <div
                                id="collapseThree"
                                className="collapse"
                                aria-labelledby="headingThree"
                                data-parent="#accordion"
                              >
                                <div className="card-body">
                                  <div className="list-group flex-row">
                                    <button
                                      type="button"
                                      className="list-group-item list-group-item-action"
                                    >
                                      Aftermarket Part <br />
                                      $59 inc GST
                                    </button>
                                    <button
                                      type="button"
                                      className="list-group-item list-group-item-action"
                                    >
                                      Premium Part <br />
                                      $290 inc GST
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <button
                            className="btn btn-primary btn-block p-2 mt-3 btn-lg"
                            onClick={this.handleStep6}
                          >
                            Continue
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}

              {this.state.showStep6 ? (
                <div className="step6  h-100">
                  {" "}
                  <div className="row">
                    <div className="col-12">
                      <div className="row position-absolute w-100 border-bottom">
                        <div className="col-4 py-3">Iphone XS Max</div>
                        <div className="col-4"></div>
                        <div className="col-4 py-3 text-right">
                          $159 ins GST & Repair
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row h-100  align-items-center">
                    <div className="col-12">
                      <div className="row text-center text-lg-left align-items-center">
                        <div className="col-12 text-center mb-3">
                          <h5 className="text-center my-2 heading-title">
                            Date & Time
                          </h5>
                          <p className="pb-2 subtitle">
                            Pick a date and time for your appointment, and we'll
                            be there
                          </p>
                        </div>
                      </div>
                      <div className="row align-items-center text-left select-phone">
                        <div className="col-12">
                          <ul className="list-group flex-row mb-3 text-center">
                            <button
                              type="button"
                              className="list-group-item list-group-item-action border flex-fill px-1"
                            >
                              Sun <br /> Aug 23
                            </button>
                            <button
                              type="button"
                              className="list-group-item list-group-item-action border flex-fill px-1 active"
                            >
                              Mon <br /> Aug 24
                            </button>
                            <button
                              type="button"
                              className="list-group-item list-group-item-action border flex-fill px-1"
                            >
                              Tue <br /> Aug 25
                            </button>
                            <button
                              type="button"
                              className="list-group-item list-group-item-action border flex-fill px-1"
                            >
                              Wed <br /> Aug 26
                            </button>
                            <button
                              type="button"
                              className="list-group-item list-group-item-action border flex-fill px-1"
                            >
                              Thu <br /> Aug 27
                            </button>
                            <button
                              type="button"
                              className="list-group-item list-group-item-action border flex-fill px-1"
                            >
                              Fri <br /> Aug 28
                            </button>
                          </ul>
                        </div>
                        <div className="col-12 mb-3">
                          <div className="list-group flex-row text-center w-100">
                            <button
                              type="button"
                              className="list-group-item list-group-item-action border"
                            >
                              9AM - 11AM
                            </button>
                            <button
                              type="button"
                              className="list-group-item list-group-item-action border"
                            >
                              11AM - 1PM
                            </button>
                            <button
                              type="button"
                              className="list-group-item list-group-item-action border"
                            >
                              1PM - 3PM
                            </button>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="list-group flex-row text-center">
                            <button
                              type="button"
                              className="list-group-item list-group-item-action border"
                            >
                              3PM - 5PM
                            </button>
                            <button
                              type="button"
                              className="list-group-item list-group-item-action border"
                            >
                              9AM - 11AM
                            </button>
                            <button
                              type="button"
                              className="list-group-item list-group-item-action border"
                            >
                              5PM - 7PM
                            </button>
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <button
                            className="btn btn-primary btn-block p-2 mt-3 btn-lg"
                            onClick={this.handleStep7}
                          >
                            Continue
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}

              {this.state.showStep7 ? (
                <div className="step7  h-100">
                  {" "}
                  <div className="row">
                    <div className="col-12">
                      <div className="row position-absolute w-100 border-bottom">
                        <div className="col-4 py-3">Iphone XS Max</div>
                        <div className="col-4"></div>
                        <div className="col-4 py-3 text-right">
                          $159 ins GST & Repair
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row h-100  align-items-center">
                    <div className="col-12">
                      <div className="row text-center text-lg-left align-items-center">
                        <div className="col-12 text-center mb-3">
                          <h5 className="text-center my-2 heading-title">
                            Almost Done
                          </h5>
                          <p className="pb-2 subtitle">
                            Enter your contact info to finalize your appointment
                          </p>
                        </div>
                      </div>
                      <div className="row align-items-center text-left select-phone">
                        <div className="col-12">
                          <form
                            id="contact-form"
                            name="contact-form"
                            action="mail.php"
                            method="POST"
                          >
                            <div className="row mb-2">
                              <div className="col-md-12">
                                <div className="md-form">
                                  <label for="subject" className="">
                                    Full Name
                                  </label>
                                  <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className="form-control form-control-lg"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row mb-2">
                              <div className="col-md-6">
                                <div className="md-form">
                                  <label for="name" className="">
                                    Phone
                                  </label>
                                  <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="form-control form-control-lg"
                                  />
                                </div>
                              </div>

                              <div className="col-md-6">
                                <div className="md-form">
                                  <label for="email" className="">
                                    Your email
                                  </label>
                                  <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    className="form-control form-control-lg"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="form-group">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="gridCheck"
                                />
                                <label
                                  className="form-check-label"
                                  for="gridCheck"
                                >
                                  Send me notifications about this appointment
                                  via text message
                                </label>
                              </div>
                            </div>
                          </form>
                        </div>
                        <div className="col-lg-12">
                          <button
                            className="btn btn-secondary btn-lg disabled btn-block p-2 mt-3 disabled btn-lg"
                            title="Update"
                            onClick={this.handleSubmit}
                          >
                            Book Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RepairPopup;
