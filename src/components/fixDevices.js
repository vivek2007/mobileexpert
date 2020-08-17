import React from "react";
import '../App.css';
import IPhone from "../images/iphone-repair.png";
import Tablet from "../images/tablet.png";
import Desktop from "../images/desktop.png";
import Accessories from "../images/accessories.png";

export const FixDevices = () => {
    return(
      <>
    <div className="container text-center pt-5">
        <div className="col pt-3 pb-3">
            <h2 className="font-size32 fontfamilypopMedium">We Fix All Devices, All Problems </h2>
             <p className="fontfamilypoplight font-size18">Get your device repaired in just three easy steps</p>
        </div>
        <div className="row justify-content-center">
            <div className="border fourdivsmob">
                <ul className="nav nav-pills">
                    <li className="nav-item tab-box">      
                    <a className="nav-link active p-2 tabact  "  data-toggle="tab" href="#IPhone">
                        <div className="row align-items-center h-100">
                            <div className="col-5">
                            <img alt="" src={IPhone} className="w-100 h-100" />
                        </div>
                        <div className="col-7 text-center pt-2 fontfamilypoplight font-size18"  style={{paddingLeft: 0}} >IPhone</div>
                        </div>
                        </a>    
                    </li>
        
                    <li className="nav-item tab-box">
                    <a className="nav-link  p-2 tabact  "  data-toggle="tab" href="#IPad">
                        <div className="row align-items-center h-100">
                        <div className="col-5">
                        <img alt="tablet" src={Tablet} className="w-100 h-100"/>
                        </div>
                        <div className="col-7 text-center pt-2 fontfamilypoplight font-size18"  style={{paddingLeft: 0}} >Tablet</div>
                    </div>
                        </a>
                    
                </li>
                <li className="nav-item tab-box">
                <a className="nav-link  p-2 tabact  "  data-toggle="tab" href="#Samsung">
                    <div className="row align-items-center h-100">
                        <div className="col-5">
                        <img alt="" src={Desktop} className="w-100"/>
                    </div>
                    <div className="col-7 text-center pt-2 fontfamilypoplight font-size18"  style={{paddingLeft: 0}} >Desktop</div>
                    </div>
                    </a>
                
                </li>
                <li className="nav-item tab-box">
                    
                <a  className="nav-link p-2 tabact"  data-toggle="tab" href="#other">
                    <div className="row align-items-center h-100">
                    <div className="col-5">
                    <img alt="" src={Accessories} className="w-100"/>
                    </div>
                    <div className="col-7 text-center pt-2 fontfamilypoplight font-size18" style={{paddingLeft: 0}}>Other</div>
                </div>
                    </a>
                
            </li>
            </ul>
    </div>
  </div>
  <div className="tab-content">
        <div id="IPhone" className="row tab-pane active" >
          <div className="container-fluid row p-5">
            <div className="col-2 d-flex align-items-center"  style={{flexDirection: "column"}}>
              <img  src="https://www.mobileexpert.com.au/upload/device/1559295070-iPhone-8.jpg" alt="mobile" className="w-50"/>
              <button className="btn btn-outline-primary mt-3 font-size9 fontfamilypopMedium">Iphone xs</button>
            </div>
             <div className="col d-flex align-items-center"  style={{flexDirection: "column"}}>
              <img  src="https://www.mobileexpert.com.au/upload/device/1559295070-iPhone-8.jpg" alt="mobile" className="w-50"/>
              <button className="btn btn-outline-primary mt-3 font-size9 fontfamilypopMedium">Iphone xs</button>
            </div>
             <div className="col d-flex align-items-center"  style={{flexDirection: "column"}}>
              <img  src="https://www.mobileexpert.com.au/upload/device/1559295238-iPhone-XR.jpg" alt="mobile" className="w-50"/>
              <button className="btn btn-outline-primary mt-3 font-size9 fontfamilypopMedium">Iphone XR</button>
            </div>
             <div className="col d-flex align-items-center"  style={{flexDirection: "column"}}>
              <img  src="https://www.mobileexpert.com.au/upload/device/1559295070-iPhone-8.jpg" alt="mobile" className="w-50"/>
              <button className="btn btn-outline-primary mt-3 font-size9 fontfamilypopMedium">Iphone X</button>
            </div>
             <div className="col d-flex align-items-center"  style={{flexDirection: "column"}}>
              <img  src="https://www.mobileexpert.com.au/upload/device/1559295070-iPhone-8.jpg" alt="mobile" className="w-50"/>
              <button className="btn btn-outline-primary mt-3 font-size9 fontfamilypopMedium">Iphone 8</button>
            </div>
             <div className="col d-flex align-items-center"  style={{flexDirection: "column"}}>
              <img  src="https://www.mobileexpert.com.au/upload/device/1559295102-iPhone-8-Plus.jpg" alt="mobile" className="w-50"/>
              <button className="btn btn-outline-primary mt-3 font-size9 fontfamilypopMedium">Iphone 8 Plus</button>
            </div>
          </div>
          <div className="container-fluid row pl-5 pr-5 pt-1 pb-5">
            <div className="col d-flex align-items-center"  style={{flexDirection: "column"}}>
              <img  src="https://www.mobileexpert.com.au/upload/device/1562822529-iphone_7.jpg" alt="mobile" className="w-50"/>
              <button className="btn btn-outline-primary mt-3 font-size9 fontfamilypopMedium">Iphone 7</button>
            </div>
             <div className="col d-flex align-items-center"  style={{flexDirection: "column"}}>
              <img  src="https://www.mobileexpert.com.au/upload/device/1559295029-iPhone-7-Plus.jpg" alt="mobile" className="w-50"/>
              <button className="btn btn-outline-primary mt-3 font-size9 fontfamilypopMedium">Iphone 7 plus</button>
            </div>
             <div className="col d-flex align-items-center"  style={{flexDirection: "column"}}>
              <img  src="https://www.mobileexpert.com.au/upload/device/1559294711-iPhone-6-Plus.jpg" alt="mobile" className="w-50"/>
              <button className="btn btn-outline-primary mt-3 font-size9 fontfamilypopMedium">Iphone 6 plus</button>
            </div>
             <div className="col d-flex align-items-center"  style={{flexDirection: "column"}}>
              <img  src="https://www.mobileexpert.com.au/upload/device/1559294822-iPhone-6s.jpg" alt="mobile" className="w-50"/>
              <button className="btn btn-outline-primary mt-3 font-size9 fontfamilypopMedium">Iphone 6s</button>
            </div>
             <div className="col d-flex align-items-center"  style={{flexDirection: "column"}}>
              <img src="https://www.mobileexpert.com.au/upload/device/1559294553-iPhone-5.jpg" alt="mobile" className="w-50"/>
              <button className="btn btn-outline-primary mt-3 font-size9 fontfamilypopMedium">Iphone 5</button>
            </div>
             <div className="col d-flex align-items-center"  style={{flexDirection: "column"}}>
              <img  src="https://www.mobileexpert.com.au/assets/frontend/images/iphone_accessories.jpg" alt="mobile" className="w-50"/>
              <button className="btn btn-outline-primary mt-3 font-size9 fontfamilypopMedium">Iphone Accessories</button>
            </div>
          </div>
        </div>
        <div id="IPad" className="row tab-pane fade" >
          <div className="container-fluid row p-5">
            <div className="col-2 d-flex align-items-center"  style={{flexDirection: "column"}}>
              <img  src={Tablet} alt="mobile" className="w-50"/>
              <button className="btn btn-outline-primary mt-3 font-size9 fontfamilypopMedium">Iphone xs</button>
            </div>
             <div className="col-2 d-flex align-items-center"  style={{flexDirection: "column"}}>
              <img  src={Tablet} alt="mobile" className="w-50"/>
              <button className="btn btn-outline-primary mt-3 font-size9 fontfamilypopMedium">Iphone xs</button>
            </div>
             <div className="col-2 d-flex align-items-center"  style={{flexDirection: "column"}}>
              <img  src={Tablet} alt="mobile" className="w-50"/>
              <button className="btn btn-outline-primary mt-3 font-size9 fontfamilypopMedium">Iphone xs</button>
            </div>
             <div className="col-2 d-flex align-items-center"  style={{flexDirection: "column"}}>
              <img  src={Tablet} alt="mobile" className="w-50"/>
              <button className="btn btn-outline-primary mt-3 font-size9 fontfamilypopMedium">Iphone xs</button>
            </div>
             <div className="col-2 d-flex align-items-center"  style={{flexDirection: "column"}}>
              <img  src={Tablet} alt="mobile" className="w-50"/>
              <button className="btn btn-outline-primary mt-3 font-size9 fontfamilypopMedium">Iphone xs</button>
            </div>
             <div className="col-2 d-flex align-items-center"  style={{flexDirection: "column"}}>
              <img  src={Tablet} alt="mobile" className="w-50"/>
              <button className="btn btn-outline-primary mt-3 font-size9 fontfamilypopMedium">Iphone xs</button>
            </div>
          </div>
          <div className="container-fluid row pl-5 pr-5 pt-1 pb-5">
            <div className="col-2 d-flex align-items-center"  style={{flexDirection: "column"}}>
              <img  src={Tablet} alt="mobile" className="w-50"/>
              <button className="btn btn-outline-primary mt-3 font-size9 fontfamilypopMedium">Iphone xs</button>
            </div>
             <div className="col-2 d-flex align-items-center"  style={{flexDirection: "column"}}>
              <img  src={Tablet} alt="mobile" className="w-50"/>
              <button className="btn btn-outline-primary mt-3 font-size9 fontfamilypopMedium">Iphone xs</button>
            </div>
             <div className="col-2 d-flex align-items-center"  style={{flexDirection: "column"}}>
              <img  src={Tablet} alt="mobile" className="w-50"/>
              <button className="btn btn-outline-primary mt-3 font-size9 fontfamilypopMedium">Iphone xs</button>
            </div>
             <div className="col-2 d-flex align-items-center"  style={{flexDirection: "column"}}>
              <img  src={Tablet} alt="mobile" className="w-50"/>
              <button className="btn btn-outline-primary mt-3 font-size9 fontfamilypopMedium">Iphone xs</button>
            </div>
             <div className="col-2 d-flex align-items-center"  style={{flexDirection: "column"}}>
              <img  src={Tablet} alt="mobile" className="w-50"/>
              <button className="btn btn-outline-primary mt-3 font-size9 fontfamilypopMedium">Iphone xs</button>
            </div>
             <div className="col-2 d-flex align-items-center"  style={{flexDirection: "column"}}>
              <img  src={Tablet} alt="mobile" className="w-50"/>
              <button className="btn btn-outline-primary mt-3 font-size9 fontfamilypopMedium">Iphone xs</button>
            </div>
          </div>
        </div>
        <div id="Samsung" className="row tab-pane fade" >
          <div className="container-fluid row p-5">
            <div className="col-2 d-flex align-items-center"  style={{flexDirection: "column"}} >
              <img  src={Desktop} alt="mobile" className="w-50"/>
              <button className="btn btn-outline-primary mt-3 font-size9 fontfamilypopMedium">Iphone xs</button>
            </div>
             <div className="col-2 d-flex align-items-center"  style={{flexDirection: "column"}} >
              <img  src={Desktop} alt="mobile" className="w-50"/>
              <button className="btn btn-outline-primary mt-3 font-size9 fontfamilypopMedium">Iphone xs</button>
            </div>
             <div className="col-2 d-flex align-items-center"  style={{flexDirection: "column"}} >
              <img  src={Desktop} alt="mobile" className="w-50"/>
              <button className="btn btn-outline-primary mt-3 font-size9 fontfamilypopMedium">Iphone xs</button>
            </div>
             <div className="col-2 d-flex align-items-center"  style={{flexDirection: "column"}} >
              <img  src={Desktop} alt="mobile" className="w-50"/>
              <button className="btn btn-outline-primary mt-3 font-size9 fontfamilypopMedium">Iphone xs</button>
            </div>
             <div className="col-2 d-flex align-items-center"  style={{flexDirection: "column"}} >
              <img  src={Desktop} alt="mobile" className="w-50"/>
              <button className="btn btn-outline-primary mt-3 font-size9 fontfamilypopMedium">Iphone xs</button>
            </div>
             <div className="col-2 d-flex align-items-center"  style={{flexDirection: "column"}} >
              <img  src={Desktop} alt="mobile" className="w-50"/>
              <button className="btn btn-outline-primary mt-3 font-size9 fontfamilypopMedium">Iphone xs</button>
            </div>
          </div>
          <div className="container-fluid row pl-5 pr-5 pt-1 pb-5">
            <div className="col-2 d-flex align-items-center"  style={{flexDirection: "column"}}>
              <img  src={Desktop} alt="mobile" className="w-50"/>
              <button className="btn btn-outline-primary mt-3 font-size9 fontfamilypopMedium">Iphone xs</button>
            </div>
             <div className="col-2 d-flex align-items-center"  style={{flexDirection: "column"}}>
              <img  src={Desktop} alt="mobile" className="w-50"/>
              <button className="btn btn-outline-primary mt-3 font-size9 fontfamilypopMedium">Iphone xs</button>
            </div>
             <div className="col-2 d-flex align-items-center"  style={{flexDirection: "column"}}>
              <img  src={Desktop} alt="mobile" className="w-50"/>
              <button className="btn btn-outline-primary mt-3 font-size9 fontfamilypopMedium">Iphone xs</button>
            </div>
             <div className="col-2 d-flex align-items-center"  style={{flexDirection: "column"}}>
              <img  src={Desktop} alt="mobile" className="w-50"/>
              <button className="btn btn-outline-primary mt-3 font-size9 fontfamilypopMedium">Iphone xs</button>
            </div>
             <div className="col-2 d-flex align-items-center"  style={{flexDirection: "column"}}>
              <img  src={Desktop} alt="mobile" className="w-50"/>
              <button className="btn btn-outline-primary mt-3 font-size9 fontfamilypopMedium">Iphone xs</button>
            </div>
             <div className="col-2 d-flex align-items-center"  style={{flexDirection: "column"}}>
              <img  src={Desktop} alt="mobile" className="w-50"/>
              <button className="btn btn-outline-primary mt-3 font-size9 fontfamilypopMedium">Iphone xs</button>
            </div>
          </div>
        </div>
        <div id="other" className="row tab-pane fade" >
          <div className="container-fluid row p-5">
            <div className="col-2 d-flex align-items-center"  style={{flexDirection: "column"}}>
              <img  src={Accessories} alt="mobile" className="w-50"/>
              <button className="btn btn-outline-primary mt-3 font-size9 fontfamilypopMedium">Iphone xs</button>
            </div>
             <div className="col-2 d-flex align-items-center"  style={{flexDirection: "column"}}>
              <img  src={Accessories} alt="mobile" className="w-50"/>
              <button className="btn btn-outline-primary mt-3 font-size9 fontfamilypopMedium">Iphone xs</button>
            </div>
             <div className="col-2 d-flex align-items-center" style={{flexDirection: "column"}}>
              <img  src={Accessories} alt="mobile" className="w-50"/>
              <button className="btn btn-outline-primary mt-3 font-size9 fontfamilypopMedium">Iphone xs</button>
            </div>
             <div className="col-2 d-flex align-items-center" style={{flexDirection: "column"}}>
              <img  src={Accessories} alt="mobile" className="w-50"/>
              <button className="btn btn-outline-primary mt-3 font-size9 fontfamilypopMedium">Iphone xs</button>
            </div>
             <div className="col-2 d-flex align-items-center" style={{flexDirection: "column"}}>
              <img  src={Accessories} alt="mobile" className="w-50"/>
              <button className="btn btn-outline-primary mt-3 font-size9 fontfamilypopMedium">Iphone xs</button>
            </div>
             <div className="col-2 d-flex align-items-center" style={{flexDirection: "column"}}>
              <img  src={Accessories} alt="mobile" className="w-50"/>
              <button className="btn btn-outline-primary mt-3 font-size9 fontfamilypopMedium">Iphone xs</button>
            </div>
          </div>
          <div className="container-fluid row pl-5 pr-5 pt-1 pb-5">
            <div className="col-2 d-flex align-items-center" style={{flexDirection: "column"}}>
              <img  src={Accessories} alt="mobile" className="w-50"/>
              <button className="btn btn-outline-primary mt-3 font-size9 fontfamilypopMedium">Iphone xs</button>
            </div>
             <div className="col-2 d-flex align-items-center"  style={{flexDirection: "column"}}>
              <img  src={Accessories} alt="mobile" className="w-50"/>
              <button className="btn btn-outline-primary mt-3 font-size9 fontfamilypopMedium">Iphone xs</button>
            </div>
             <div className="col-2 d-flex align-items-center"  style={{flexDirection: "column"}}>
              <img  src={Accessories} alt="mobile" className="w-50"/>
              <button className="btn btn-outline-primary mt-3 font-size9 fontfamilypopMedium">Iphone xs</button>
            </div>
             <div className="col-2 d-flex align-items-center"  style={{flexDirection: "column"}}>
              <img  src={Accessories} alt="mobile" className="w-50"/>
              <button className="btn btn-outline-primary mt-3 font-size9 fontfamilypopMedium">Iphone xs</button>
            </div>
             <div className="col-2 d-flex align-items-center"  style={{flexDirection: "column"}}>
              <img  src={Accessories} alt="mobile" className="w-50"/>
              <button className="btn btn-outline-primary mt-3 font-size9 fontfamilypopMedium">Iphone xs</button>
            </div>
             <div className="col-2 d-flex align-items-center"  style={{flexDirection: "column"}}>
              <img  src={Accessories} alt="mobile" className="w-50"/>
              <button className="btn btn-outline-primary mt-3 font-size9 fontfamilypopMedium">Iphone xs</button>
            </div>
          </div>
        </div>
  </div>
</div>
</>
)
}