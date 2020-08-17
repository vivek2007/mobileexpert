import React from "react";
import "../App.css";

import {CommonIssues} from "./components/commonissues";
import {MobileExperts} from "./components/mobileExperts";
import {RepairDevices} from "./components/repairDevices";
import {FixDevices} from "./components/fixDevices";
import {YMobileExpert} from "./components/yMobileExpert";
import {Brisbanebg} from "./components/iphoneRepairserviceTest";

export const Home = () =>{
    return(
        <>
        <CommonIssues />
      <MobileExperts />
      <RepairDevices />
      <FixDevices />
      <YMobileExpert />
      <Brisbanebg />
        </>
    )
}
