import React, { Component } from "react";
import FormInput from "../form-input/form-input";
import {
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBBtn,
  MDBIcon,
  MDBModalFooter
} from "mdbreact";
import SmartBtn from "../custom-btn/custom-btn";
import { LoginWithGoogle } from "../../firebaseDB/firebase.util";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = event => {
    const { value, name } = event.target;
    //here it gets the name and email from the input field.
    this.setState({ [name]: value });
  };
  render() {
    return (
      <React.Fragment>
        <MDBCol md="6">
          <MDBCard>
            <form onSubmit={this.handleSubmit}>
              <MDBCardBody className="mx-4">
                <div className="text-center">
                  <h3 className="dark-grey-text mb-5">
                    <strong>Login</strong>
                  </h3>
                </div>

                <FormInput
                  label="Your email"
                  type="email"
                  name="email"
                  validate
                  error="wrong"
                  success="right"
                  handleChange={this.handleChange}
                  value={this.state.email}
                  required
                />
                <FormInput
                  label="Your password"
                  type="password"
                  name="password"
                  validate
                  containerClass="mb-0"
                  value={this.state.password}
                  handleChange={this.handleChange}
                  required
                />
                <p className="font-small blue-text d-flex justify-content-end pb-3">
                  Forgot
                  <a href="#!" className="blue-text ml-1">
                    Password?
                  </a>
                </p>
                <div className="text-center mb-3">
                  <SmartBtn
                    type="submit"
                    gradient="blue"
                    rounded
                    className="btn-block z-depth-1a"
                  >
                    Login
                  </SmartBtn>
                </div>
                <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">
                  or Login in with:
                </p>
                <div className="row my-3 d-flex justify-content-center">
                  <MDBBtn
                    type="button"
                    color="white"
                    rounded
                    className="mr-md-3 z-depth-1a"
                  >
                    <MDBIcon
                      fab
                      icon="facebook-f"
                      className="blue-text text-center"
                    />
                  </MDBBtn>
                  <MDBBtn
                    type="button"
                    color="white"
                    rounded
                    className="mr-md-3 z-depth-1a"
                  >
                    <MDBIcon fab icon="twitter" className="blue-text" />
                  </MDBBtn>
                  <SmartBtn
                    type="button"
                    color="white"
                    rounded
                    className="z-depth-1a"
                    onClick={LoginWithGoogle}
                  >
                    <MDBIcon fab icon="google-plus-g" className="red-text" />
                  </SmartBtn>
                </div>
              </MDBCardBody>
            </form>
            <MDBModalFooter className="mx-5 pt-3 mb-1">
              <p className="font-small grey-text d-flex justify-content-end">
                Not a member?
                <a href="#!" className="blue-text ml-1">
                  Sign Up
                </a>
              </p>
            </MDBModalFooter>
          </MDBCard>
        </MDBCol>
      </React.Fragment>
    );
  }
}

export default SignIn;
