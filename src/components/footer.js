import React from "react";
import "../App.css";

export const Footer = () =>{
    return(
        <>
        <div className="container mt-4">
            <div className="row">
            <div className="col-md-3 borderRight boxborderbottom">
                <div className="borderLeft">
                    <div className="borderBottom ">
                    <h5 className="mt-2 mb-2">Repair Services</h5>
                    </div>
                    <div className="pt-2 pb-2 font-size14 fontfamilypopRegular">
                    <p>Smartphones</p>
                    <p>Tablets</p>
                    <p>Audio Sound </p>
                    <p>Watches</p>
                    <p>Smart Switch</p>
                    <p>Mobile Accessories</p>
                    <p>TVs</p>
                    <p>Sound Devices</p>
                    </div>
                </div>
            </div>
            <div className="col-md-3 borderRight boxborderbottom">
                <div className="borderLeft">
                    <div className="borderBottom ">
                    <h5 className="mt-2 mb-2 ml-3">Shop</h5>
                    </div>
                    <div className="pt-2 pb-2 pl-3 font-size14 fontfamilypopRegular">
                    <p>Samsung Referral Program</p>
                    <p>Student Program</p>
                    <p>Shop FAQ</p>
                    <p>Shop Terms of use</p>
                    <p>Shop Terms of Services</p>
                    <p>Store Locator</p>
                    <p>Smart Club</p>
                    </div>
                </div>
            </div>
            <div className="col-md-3 borderRight boxborderbottom ">
                <div className="borderLeft">
                    <div className="borderBottom ">
                    <h5 className="mt-2 mb-2 ml-3">Support</h5>
                    </div>
                    <div className="pt-2 pb-2 pl-3 font-size14 fontfamilypopRegular">
                    <p>Write our CEO</p>
                    <p>Email Us</p>
                    <p>Chat with us</p>
                    <p>Phone </p>
                    <p>Community</p>
                    <p>Product Registration</p>
                    <p>Service Center</p>
                    </div>
                </div>
            </div>
            <div className="col-md-3  boxborderbottom" style={{paddingLeft : 0,padding:1}}>
                <div className="borderLeft">
                    <div className="borderBottom ">
                    <h5 className="mt-2 mb-2 ml-3">Company</h5>
                    </div>
                    <div className="pt-2 pb-2 pl-3 font-size14 fontfamilypopRegular">
                    <p>About Us</p>
                    <p>Investor Relations</p>
                    <p>Newsroom</p>
                    <p>Corporate Citizenship</p>
                    <p>Career</p>
                    <p>Environment</p>
                    <p>Samsung Experience</p>
                    <p>Samsung Recycling</p>
                    </div>
                </div>
            </div>
            </div>
            <div className="pt-3 pb-3">
                <div className="row d-flex justify-content-between">
                <span>
                &copy; 2020 Mobile Expert. &reg;All Rights Reserved. Return Policy</span>
                <span>
                    ABN : 67 469 689 543
                </span>
                </div>
            </div>
        </div>
        </>
    )
}