import React from "react";
import "../App.css";
import Customer1 from "../images/customer-01.jpg"
import Customer2 from "../images/customer-02.jpg"
import Customer3 from "../images/customer-03.jpg"


export const Testimonial = () =>{
return(
        <>

<div className="customer">
        <div className="container">
        <div className="banner">
        <div className="title">
        <h1 className="title-section white text-center"> 0ur testimonials </h1>
        
        <p className="text-center">We help Australian businesses across all industries – from tech startups in Sydney to restaurants in Alice Springs.</p>
        </div>
        </div>
        </div>
        </div>

        <div className="card" style={{height:329}}>
            <div className="container">
            <div className="row owl-carousel owl-theme js-carousel-customer">
            <div className="col">
            <div className="profil">
            <div className="image">
            <img alt=""  className="lazyloaded lazy-loaded" src={Customer1} />
            </div>
            <div className="text">
            <h3 className="mb-2">Alex</h3>
            <div className="mb-2">Adapt Leadership</div>
            <div className="mb-4"><span className="fa fa-star mr-1"></span><span className="fa fa-star mr-1"></span><span className="fa fa-star mr-1"></span><span className="fa fa-star mr-1"></span><span className="fa fa-star-o mr-1"></span></div>
            </div>
            </div>
            <div className="description mt-4">
            <p className="text-primary testmtext">“Can't speak highly enough of my experience with Sprintlaw - quality advice, fast and efficient responsiveness and a professional product.”</p>
            </div>
            </div>


            <div className="col">
            <div className="profil">
            <div className="image">
            <img alt=""  className="lazyloaded lazy-loaded" src={Customer2} />
            </div>
            <div className="text">
            <h3 className="mb-2">Emmy</h3>
            <div  className="mb-2">Kiindred</div >
            <div className="mb-4"><span className="fa fa-star mr-1"></span><span className="fa fa-star mr-1"></span><span className="fa fa-star mr-1"></span><span className="fa fa-star mr-1"></span><span className="fa fa-star-o mr-1"></span></div>
            </div>
            </div>
            <div className="description mt-4">
            <p className="text-primary testmtext">“I had a fantastic experience with Sprintlaw - it was easy, cost-effective and their lawyers provided very high quality advice. I could tell they really cared about my business.”</p>
            </div>
            </div>
            <div className="col">
            <div className="profil">
            <div className="image">
            <img alt=""  className="lazyloaded lazy-loaded" src={Customer3} /><noscript><img src={Customer3} alt=""/></noscript>
            </div>
            <div className="text">
            <h3 className="mb-2">Amit</h3>
            <div  className=" mb-2">Soul Burger</div>
            <div className="mb-4"><span className="fa fa-star mr-1"></span><span className="fa fa-star mr-1"></span><span className="fa fa-star mr-1"></span><span className="fa fa-star mr-1"></span><span className="fa fa-star-o mr-1"></span></div>
            </div>
            </div>
            <div className="description mt-4">
            <p className="text-primary testmtext">“They’ve helped us tremendously and are seriously knowledgeable and honest. Couldn’t recommend the crew at Sprintlaw more!”</p>
            </div>
            </div>
            </div>
            </div>
            </div>

        </>
    )
}