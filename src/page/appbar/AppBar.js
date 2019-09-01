import React from "react";
import { auth } from "../../firebaseDB/firebase.util";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBIcon
} from "mdbreact";

const NavbarPage = ({ currentUser }) => {
  // const { currUser } = this.props.currentUser;
  return (
    <React.Fragment>
      <MDBNavbar color="unique-color-dark" dark expand="md">
        <MDBNavbarBrand>
          {/* <strong className="white-text">React-Commerce</strong> */}
          <MDBNavbarBrand href="/">
            <img
              src="https://mdbootstrap.com/img/logo/mdb-transparent.png"
              height="30"
              alt=""
            />
          </MDBNavbarBrand>
        </MDBNavbarBrand>

        <MDBNavbarNav left>
          <MDBNavItem>
            <MDBNavLink to="/">Home</MDBNavLink>
          </MDBNavItem>

          <MDBNavItem>
            <MDBNavLink to="/shop">Shop</MDBNavLink>
          </MDBNavItem>

          <MDBNavItem>
            <MDBNavLink to="/contact">Contact Us</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            {currentUser ? (
              <MDBNavLink
                to="#!logout"
                onClick={() => auth.signOut()}
                size="1x"
                className="amber-text pr-3"
              >
                Logout <MDBIcon fas="true" icon="sign-out-alt" />
              </MDBNavLink>
            ) : (
              <MDBNavLink to="/login">
                Login{" "}
                <MDBIcon
                  fas="true"
                  icon="sign-in-alt"
                  size="1x"
                  className="green-text pr-3"
                  gradient="purple"
                />
              </MDBNavLink>
            )}
          </MDBNavItem>
        </MDBNavbarNav>
        <MDBNavbarNav right>
          <MDBNavItem>
            <MDBNavLink className="waves-effect waves-light" to="#!">
              <MDBIcon fab icon="twitter" />
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink className="waves-effect waves-light" to="#!">
              <MDBIcon fab icon="google-plus-g" />
            </MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBNavbar>
    </React.Fragment>
  );
};

export default NavbarPage;
