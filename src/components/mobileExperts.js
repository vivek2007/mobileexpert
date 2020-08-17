import React from "react";
import "../App.css";
import IphoneRepair from "../images/iphone-repair.png";
import IpadRepair from "../images/ipad-repair.png";
import SamsungRepair from "../images/samsung-repair.png";
import MacRepair from "../images/mac-repair.png";
import LaptopRepair from "../images/laptop-repair.png";
import MotherRepair from "../images/motherboard-repair.png";

export const MobileExperts = () => {
 return(
     <>
     <div className="container">
      <div className=" row ">
        <div className="col-md-4 pt-5 pb-5 pr-5 d-flex align-items-center justify-content-center " style={{flexDirection: "column"}}>
          <h1 className="fontfamilypopMedium font-size32">Mobile expert services</h1>
          <p className="fontfamilypoplight font-size18">Get your device repaired in just three easy steps</p>
         
          <button className="btn btn-outline-primary btn-block p-2 mt-3">View Price</button>
       
        </div>
        <div className="col-md-8 pt-3 pb-3">
            <div className="row pt-2 pb-2">
                <div className="col-md-4 px-2"><div className="col-md-12 feature-box">
                  <img src={IphoneRepair} alt="iphoneRepair" />
                  <h4 className="fontfamilypopMedium font-size18">IPhone Repair</h4>
                </div></div>
                <div className="col-md-4 px-2"><div className="col-md-12 feature-box">
                  <img src={IpadRepair} alt="ipadRepair" />
                  <h4 className="fontfamilypopMedium font-size18">IPad Repair</h4>
                </div></div>
                <div className="col-md-4 px-2"><div className="col-md-12 feature-box">
                  <img src={SamsungRepair} alt="SamsungRepair" />
                  <h4 className="fontfamilypopMedium font-size18">Samsung Repair</h4>
                </div></div>
            </div>
            <div className="row pt-2 pb-2">
                <div className="col-md-4 px-2"><div className="col-md-12 feature-box">
                    <img src={MacRepair} alt="MacRepair" />
                    <h4 className="fontfamilypopMedium font-size18">Macbook Repair</h4>
                </div></div>
                <div className="col-md-4 px-2"><div className="col-md-12 feature-box">
                    <img src={LaptopRepair} alt="LaptopRepair" />
                    <h4 className="fontfamilypopMedium font-size18">Laptop Repair</h4>
                </div></div>
                <div className="col-md-4 px-2"><div className="col-md-12 feature-box">
                    <img src={MotherRepair} alt="MotherRepair" />
                    <h4 className="fontfamilypopMedium font-size18">Iphone Motherboard Repair</h4>
                </div></div>
            </div>
            </div>
        </div>
      </div>
     </>
 )
}