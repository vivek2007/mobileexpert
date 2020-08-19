import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import AppleLogo from "../images/applelogo.png";
import Google from "../images/googlelogo.png";
import Microsoft from "../images/microsoftlogo (1).png";
import Huawei from "../images/huawei_logo (1).png";
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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
        <div style={{paddingTop : 20,paddingBottom:20}} className="container">
           
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
    
  <div className="col-md-6 d-flex align-self-center"><img src={AppleLogo} alt="apple logo" className="w-100"/></div>
  <div className="col-md-6 d-flex align-self-center"><img src={Google} alt="google logo"  className="w-100" /></div>
  <div className="col-md-6 d-flex align-self-center"><img src={Microsoft} alt="Microsoft logo"  className="w-100" /></div>
  <div className="col-md-6 d-flex align-self-center"> <img src={Huawei} alt="Huawei logo"  className="w-100" /></div>
  <div className="col-md-6 d-flex align-self-center"><img src={Huawei} alt="Huawei logo"  className="w-100" /></div>
 
</Carousel>
 </div>
    )
}