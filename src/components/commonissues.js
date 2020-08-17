import React from "react";
import '../App.css';
import Battery from "../images/battery.png";
import Screen_break from "../images/screen_break.png";
import Mic from "../images/mic.png";
import Call from "../images/call.png";
import Usb from "../images/usb.png";
import Speaker from "../images/speaker.png";
import Screen from "../images/screen.png";
import Jack from "../images/jack.png";

export const CommonIssues = () =>{
    return(
        <>
    <div className="container py-3 ">
      <h2 className="text-center mt-3 mb-5 fontfamilypopMedium font-size32"> Common issues we fix </h2>

      <div className="row">
         
          <div className="col px-2">
              <div className="col-md-12 feature-box">
                  <img src={Screen_break} alt="screen" />
                  <h4 className="fontfamilypoplight font-size14">Screen</h4>
              </div>
          </div>
          
          <div className="col px-2"><div className="col-md-12 feature-box">
              <img src={Battery} alt="Battery" />
              <h4 className="fontfamilypoplight font-size14">Battery</h4>
          </div></div>
          <div className="col px-2"><div className="col-md-12 feature-box">
              <img src={Mic} alt="Mic" />
              <h4 className="fontfamilypoplight font-size14">Mic</h4>
          </div></div>
          <div className="col px-2"><div className="col-md-12 feature-box">
              <img src={Call} alt="call" />
              <h4 className="fontfamilypoplight font-size14">Reciever</h4>
          </div></div>
          <div className="col px-2"><div className="col-md-12 feature-box">
              <img src={Usb} alt="Usb" />
              <h4 className="fontfamilypoplight font-size14">Charging</h4>
          </div></div>
          <div className="col px-2"><div className="col-md-12 feature-box">
              <img src={Speaker}  alt="Speaker" />
              <h4 className="fontfamilypoplight font-size14">Speaker</h4>
          </div></div>
          <div className="col px-2"><div className="col-md-12 feature-box">
              <img src={Screen} alt="Screen "/>
              <h4 className="fontfamilypoplight font-size14">Proximity Sensor</h4>
          </div></div>
          <div className="col px-2"><div className="col-md-12 feature-box">
              <img src={Jack} alt="Jack" />
              <h4 className="fontfamilypoplight font-size14">Aux Jack</h4>
          </div></div>
      </div>
  </div>

</>
    )
}