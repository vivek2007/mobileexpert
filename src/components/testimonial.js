import React from "react";
import "../App.css";
import Hangouts from "../images/quote.png";

export const Testimonial = () =>{
return(
        <>

<div className="testimonial pt-5 pb-5">
        <div className="container my-5 justify-content-center">
    <h2 className="text-center mt-3 mb-2"> 0ur testimonials </h2>
    <div className="text-center repspan "> There are many valid reasons why you should choose us to take care of your valuable device </div>
    <div className=" row justify-content-center ">
       
        <div className="col-lg-4 col-12 mt-5 ">
            <div className="card mt-3 ">
                <div className="card-header bg-white  border-0 ">
                    
                    <div className="row">
                        <div className="col"> 
                        <img className="align-self-center float-right outside img-fluid" alt="" src={Hangouts} width="70" height="50" /> </div>
                    </div>
                    <div className="row  name">
                        <div className="col">
                            <h5 className="mb-0 profile-pic pb-2">Laptop Repair</h5> 
                            <p><span className="fa fa-star mr-1"></span><span className="fa fa-star mr-1"></span><span className="fa fa-star mr-1"></span><span className="fa fa-star mr-1"></span><span className="fa fa-star-o mr-1"></span></p>
                           
                        </div>
                    </div>
                </div>
                <div className="card-body pt-0  pb-3 ">
                    <div className="row">
                        <div className="col-md-12 col">
                            <p className="bold"> Growth of data is exponential and our ability to get true insight that matter was challenging with classNameic, traditional Bi tools. Vertix allow us to unserstand what is driving exceptions so we can take action</p>
                            <small className="mt-0">- Director of Marketing</small>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
        <div className="col-lg-4 col-12 mt-5 ">
            <div className="card mt-3 ">
                <div className="card-header bg-white  border-0 ">
                    
                    <div className="row">
                        <div className="col"> 
                        <img className="align-self-center float-right outside img-fluid"  alt="" src={Hangouts} width="70" height="50" /> </div>
                    </div>
                    <div className="row  name">
                        <div className="col">
                            <h5 className="mb-0 profile-pic pb-2">Mobile Repair</h5> 
                            <p><span className="fa fa-star mr-1"></span><span className="fa fa-star mr-1"></span><span className="fa fa-star mr-1"></span><span className="fa fa-star mr-1"></span><span className="fa fa-star-o mr-1"></span></p>
                           
                        </div>
                    </div>
                </div>
                <div className="card-body pt-0  pb-3 ">
                    <div className="row">
                        <div className="col-md-12 col">
                            <p className="bold"> Growth of data is exponential and our ability to get true insight that matter was challenging with classNameic, traditional Bi tools. Vertix allow us to unserstand what is driving exceptions so we can take action</p>
                            <small className="mt-0">- Director of Marketing</small>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>

        <div className="col-lg-4 col-12 mt-5 ">
            <div className="card mt-3 ">
                <div className="card-header bg-white  border-0 ">
                    
                    <div className="row">
                        <div className="col"> 
                        <img className="align-self-center float-right outside img-fluid"  alt="" src={Hangouts} width="70" height="50" /> </div>
                    </div>
                    <div className="row  name">
                        <div className="col">
                            <h5 className="mb-0 profile-pic pb-2">MacBOOK Repair</h5> 
                            <p><span className="fa fa-star mr-1"></span><span className="fa fa-star mr-1"></span><span className="fa fa-star mr-1"></span><span className="fa fa-star mr-1"></span><span className="fa fa-star-o mr-1"></span></p>
                           
                        </div>
                    </div>
                </div>
                <div className="card-body pt-0  pb-3 ">
                    <div className="row">
                        <div className="col-md-12 col">
                            <p className="bold"> Growth of data is exponential and our ability to get true insight that matter was challenging with classNameic, traditional Bi tools. Vertix allow us to unserstand what is driving exceptions so we can take action</p>
                            <small className="mt-0">- Director of Carketing</small>
                        </div>
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