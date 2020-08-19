import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router,Route , Switch} from 'react-router-dom'; //to change pages
import './App.css';

import {Header} from "./components/header";
import {CommonIssues} from "./components/commonissues";
import {MobileExperts} from "./components/mobileExperts";
import {RepairDevices} from "./components/repairDevices";
import {FixDevices} from "./components/fixDevices";
import {YMobileExpert} from "./components/yMobileExpert";
import {Brisbanebg} from "./components/iphoneRepairserviceTest";
import {Footer} from "./components/footer";
// import {Layout} from "./components/layout";
import {Testimonial} from "./components/testimonial";
import {CarouselComponent} from "./components/carousel";

function App() {
  return (
    <Router>
      <>
      <Header />
      {/* <Layout>
       <Switch>
         <Route exact path="/" component={Home} />
         <Route  path="/about" component={About} />
         <Route  path="/contact" component={Contact} />
         <Route  path="/blog" component={Blog} />
         <Route   component={Nomatch}/>
       </Switch>
     </Layout> */}
      <CommonIssues />
      <MobileExperts />
      <FixDevices />
      <RepairDevices />
      <YMobileExpert />
      <Brisbanebg />
      <Testimonial />
      <CarouselComponent />
      <Footer />
      </>
    </Router>
  );
}

export default App;
