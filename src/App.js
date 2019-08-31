import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./page/home/HomePage";
import ShopPage from './../src/page/shop/shoppge';
import AuthPage from '../src/page/auth/authpage';
import ContactUs from "./page/contact-us/ContactUS";
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
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/shop" component={ShopPage} />
              <Route path="/login" component={AuthPage} />
              <Route path="/contact" component={ContactUs} />
            </Switch>
            <Footer />
          </MDBContainer>
        </div>
      </Router>



    );
  }
}

export default App;
