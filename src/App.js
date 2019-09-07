import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
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
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await creatUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          // console.log(snapShot.data());
          setCurrentUser(
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
        setCurrentUser(userAuth);
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
        </React.Fragment>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(
  null,
  mapDispatchToProps
)(App);
