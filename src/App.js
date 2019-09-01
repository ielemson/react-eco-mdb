import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./page/home/HomePage";
import ShopPage from "./../src/page/shop/shoppge";
import AuthPage from "../src/page/auth/authpage";
import ContactUs from "./page/contact-us/ContactUS";
import TopNavbar from "./page/appbar/AppBar";
import Carousel from "./page/carousel/Carousel";
import { MDBContainer } from "mdbreact";
import Footer from "./page/footer/Footer";
import { auth, creatUserProfileDocument } from "./firebaseDB/firebase.util";
class App extends Component {
  constructor() {
    super();
    this.state = { currentUSer: null };
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await creatUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          // console.log(snapShot.data());
          this.setState(
            {
              currentUSer: {
                id: snapShot.id,
                ...snapShot.data()
              }
            }
            // () => console.log(this.state)
          );
        });
      } else {
        this.setState({ currentUSer: userAuth });
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <MDBContainer>
            <TopNavbar currentUser={this.state.currentUSer} />
            <Carousel />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/shop" component={ShopPage} />
              <Route path="/login" component={AuthPage} />
              <Route path="/contact" component={ContactUs} />
            </Switch>
            <Footer />
          </MDBContainer>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
