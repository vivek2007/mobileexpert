import React from "react";
import "../App.css";
import AppleRepair from "../images/apple-repair.png";
import Iphoneipad from "../images/iphone-ipad.png";
import MotherBoard from "../images/motherboard-repair.png";
import ScreenProtect from "../images/scree-protect.png";

export const Brisbanebg = () => {
    return(
        <>
        <div className="Brisbanebg text-center pt-5">
            <div className="container p-5  mt-5">
                <h1 className="mt-5 fontfamilypopMedium font-size32 text-primary">IPhone Repair Brisbane</h1>
                <div className="p-5 fontfamilypoplight font-size14">
                <p>Since the launch of iPhone models , the range of buying iPhones and sensitiveness while using such hi-tech devices has been discovered among the Aussies . Where as hundreds of new products have been said in the past few years, it is less common to find a repair service that offers replacement or repair service at ease.</p>
                <p>We at Mobile Expert provide Mobile phone repair in Brisbane that comes affordable and conveninet. Be it a dodgy iPhone or shattered screen; we deal with all such problems to make your iPhone look and work like a new device again.</p>
                <p>Do you have more questions about broken iPhone screens? Contact us for consultation and know the options available for your broken devices. Our engineers and customer service executives are dedicated to keep you informed of all necessary details.</p>
                </div>
            </div>
            <div className="container pl-5 pr-5 pb-5">
                <h2 className=" fontfamilypopMedium font-size32 text-primary">Fast Iphone Repairs </h2>
                <p className="mt-4 fontfamilypoplight font-size14">In fact a broken screen is one of the most common iPhone issues which is caused by drop and average user have to live with a broken screen for sometime before upgrading to a new iPhone.</p>
                <div className="row pt-4">
                    <div className="col-md-6 pr-4">
                    <div className="row">
                        <div className="col-4 d-flex align-items-center">
                            <img src={AppleRepair} alt="Apple Repair" />
                        </div>
                        <div className="col-8 text-left">
                            <h3 className="fontfamilypopMedium font-size24 text-primary">Apple Repairs Experts</h3>
                            <div className="pt-3 fontfamilypoplight font-size14">
                            <p >Our Tech are very experienced in providing expert and cost-effective Apple Device repairs, services and upgrades . We are your apple repair experts.</p>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-6 pl-4">
                    <div className="row">
                        <div className="col-4 d-flex align-items-center">
                            <img src={Iphoneipad} alt="Iphone ipad" />
                        </div>
                        <div className="col-8 text-left">
                        <h3  className="fontfamilypopMedium font-size24 text-primary">IPhone and iPad Repair Brisbane</h3>
                        <div className="pt-3 fontfamilypoplight font-size14">
                        <p>iPhone repair is our speciality we are one of the original Brisbane service providers for fast high quality iPad pro repairs.</p>
                        
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="p-5 text-center " style={{background: "white",marginLeft: -148,marginRight: -150}}>
                        <h3 className=" fontfamilypopMedium font-size32 text-primary">Our MotherBoard Repair Services</h3>
                </div>
                <div className="row pt-4">
                    <div className="col-md-6 pr-4">
                    <div className="row flex-row-reverse">
                        <div className="col-4 d-flex align-items-center">
                            <img src={MotherBoard} alt="MotherBoard" />
                        </div>
                        <div className="col-8 text-left">
                            <h3 className="fontfamilypopMedium font-size24 text-primary">Apple Repairs Experts</h3>
                            <div className="pt-3 fontfamilypoplight font-size14">
                            <p >Our Tech are very experienced in providing expert and cost-effective Apple Device repairs, services and upgrades . We are your apple repair experts.</p>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-6 pl-4">
                    <div className="row">
                        <div className="col-4 d-flex align-items-center">
                            <img src={ScreenProtect} alt="ScreenProtect" />
                        </div>
                        <div className="col-8 text-left">
                        <h3  className="fontfamilypopMedium font-size24 text-primary">IPhone and iPad Repair Brisbane</h3>
                        <div className="pt-3 fontfamilypoplight font-size14">
                        <p>iPhone repair is our speciality we are one of the original Brisbane service providers for fast high quality iPad pro repairs.</p>
                        
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}