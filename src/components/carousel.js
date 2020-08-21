import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import AppleLogo from "../images/iphone.png";
import Google from "../images/google.png";
import Samsung from "../images/samsung.png";
import Windows from "../images/microsoftlogo.png";
import Hp from "../images/hp.png";
import Sony from "../images/sony.png";
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
export const CarouselComponent = (props) =>{
    
    return(
        <div style={{paddingTop : 2,paddingBottom:20,}} className="container">
           
        <Carousel
  swipeable={false}
  draggable={false}
  showDots={false}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={props.deviceType !== "mobile" ? true : false}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
  deviceType={props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
    
  <div className="col-md-6 d-flex align-self-center"><img src={AppleLogo} alt="apple logo"/></div>
  <div className="col-md-6 d-flex align-self-center"><img src={Google} alt="google logo" /></div>
  <div className="col-md-6 d-flex align-self-center"><img src={Samsung} alt="Samsung logo"  /></div>
  <div className="col-md-6 d-flex align-self-center"><img src={Windows} alt="Microsoft logo"  /></div>
  <div className="col-md-6 d-flex align-self-center"> <img src={Hp} alt="Hp logo"/></div>
  <div className="col-md-6 d-flex align-self-center"> <img src={Sony} alt="Sony logo"/></div>
 
 
</Carousel>
 </div>
    )
}