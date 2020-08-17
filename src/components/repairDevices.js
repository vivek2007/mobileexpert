import React from "react";
import "../App.css";
import Buy from "../images/buy.png";
import Repair from "../images/repair.png";

export const RepairDevices = () => {
    return(
        <>
        <div className="bg-primary"> 
    <div className="container py-3">
     <h2 className="text-center mt-2 repheading fontfamilypopMedium font-size32"> Repair . Sell . Buy </h2>
     <div className="text-center repspan fontfamilypoplight font-size18"> Dont't want to fix phone?just want the latest gadget? </div>
     <div className="text-center repspan  fontfamilypoplight font-size18 mt-4">we have many options to get you going just because you signed a service contract with your </div>
     <div className="text-center repspan  fontfamilypoplight font-size18 pb-5">cell phone carrier doesn't ean you have to keep a phan that you're no longer happy with.</div>

     <div className="row">
         <div className="col-md-4 text-center">
             <img src={Buy} className="reprounded" alt="Buy" />
             <div className="repspan py-3 px-5  fontfamilypoplight font-size14"> we will give you cash for your <br/>used or broken device</div>
         </div>
 
         <div className="col-md-4 text-center">
             <img src={Buy}  className="reprounded" alt="Buy" />
             <div className="repspan py-3 px-5  fontfamilypoplight font-size14">We will come to you to colloect your device & pass you cash </div>
         </div>
 
         <div className="col-md-4 text-center">
             <img src={Repair}  className="reprounded" alt="Repair" />
             <div className="repspan py-3 px-5  fontfamilypoplight font-size14">Sit back & relax Enjoy our service at your convenience</div>
         </div>
 
     
     </div>
     </div>
 </div>
 </>    
    )
}
