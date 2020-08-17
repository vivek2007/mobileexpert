import React from "react";
import '../App.css';
import Star from "../images/premium-parts.png";
import Unbeatable from "../images/unbeatable-price.png";
import RepairHome from "../images/repair-at-home.png";
import Warranty from "../images/warranty.png";
import Technichians from "../images/technichians.png";
import Guaranteed from "../images/guaranteed.png";

export const YMobileExpert = () =>{
    return(
        <>
        <div className="container pt-4 pb-5">
            <div className="text-center">
            <h1>Why Mobile Expert</h1>
            </div>
            <div className="row pt-5">
                <div className="col-md-4 ">
                    <div className="d-flex">
                    <div className="d-flex justify-content-center align-content-center">
                    <img src={Star} alt="starImage" className="h-50 align-self-center" />
                    </div>
                    <div className="pl-4">
                        <h5>Premium Parts</h5>
                        <p className="fontfamilypoplight font-size14">Only the best quality makes it to your phone</p>
                    </div>
                    </div>
                </div>
                <div className="col-md-4 ">
                    <div className="d-flex">
                    <div className="d-flex justify-content-center align-content-center">
                    <img src={Unbeatable} alt="starImage" className="h-50 align-self-center" />
                    </div>
                    <div className="pl-4">
                        <h5>Unbeatable Prices</h5>
                        <p className="fontfamilypoplight font-size14">High quality at low prices</p>
                    </div>
                    </div>
                </div>
                <div className="col-md-4 ">
                    <div className="d-flex">
                    <div className="d-flex justify-content-center align-content-center">
                    <img src={RepairHome} alt="starImage" className="h-50 align-self-center" />
                    </div>
                    <div className="pl-4">
                        <h5>Premium Parts</h5>
                        <p className="fontfamilypoplight font-size14">Only the best quality makes it to your phone</p>
                    </div>
                    </div>
                </div>
            </div>
            <div className="row pt-5">
                <div className="col-md-4 ">
                    <div className="d-flex">
                    <div className="d-flex justify-content-center align-content-center">
                    <img src={Warranty} alt="starImage" className="h-50 align-self-center" />
                    </div>
                    <div className="pl-4">
                        <h5>6 Months Warranty</h5>
                        <p className="fontfamilypoplight font-size14">We offer 6 months warranty on screen repair services</p>
                    </div>
                    </div>
                </div>
                <div className="col-md-4 ">
                    <div className="d-flex">
                    <div className="d-flex justify-content-center align-content-center">
                    <img src={Technichians} alt="starImage" className="h-50 align-self-center" />
                    </div>
                    <div className="pl-4">
                        <h5>Expert Technicians</h5>
                        <p className="fontfamilypoplight font-size14">We ensure your phone is always in safe hands</p>
                    </div>
                    </div>
                </div>
                <div className="col-md-4 ">
                    <div className="d-flex">
                    <div className="d-flex justify-content-center align-content-center">
                    <img src={Guaranteed} alt="starImage" className="h-50 align-self-center" />
                    </div>
                    <div className="pl-4">
                        <h5>Guaranteed Safety</h5>
                        <p className="fontfamilypoplight font-size14">Be it BuyBack or repair , we are the safest hands for your device security.</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}