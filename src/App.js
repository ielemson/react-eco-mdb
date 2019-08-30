import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./page/home/HomePage";
import ContactUs from "./page/contact-us/ContactUS"
import TopNavbar from './page/appbar/AppBar';
import Carousel from './page/carousel/Carousel';
import { MDBContainer } from "mdbreact";
import Footer from './page/footer/Footer';
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <MDBContainer>
            <TopNavbar />
            <Carousel />
            <Route exact path="/" component={HomePage} />
            <Route path="/contact" component={ContactUs} />
            <Footer />
          </MDBContainer>
        </div>
      </Router>



    );
  }
}

export default App;
