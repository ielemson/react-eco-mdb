import React, { Component } from "react";
import FormInput from "../form-input/form-input";
import SmartBtn from "../custom-btn/custom-btn";
import { auth, creatUserProfileDocument } from "../../firebaseDB/firebase.util";
import { MDBCol, MDBCard, MDBCardBody } from "mdbreact";

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      cpassword: ""
    };
  }
  //HandleSubmit function
  handleSubmit = async event => {
    event.preventDefault();
    const { displayName, email, password, cpassword } = this.state;

    if (password !== cpassword) {
      alert("password do no match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await creatUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        cpassword: ""
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = event => {
    const { name, value } = event.target;
    //here it gets the name and email from the input field.
    this.setState({ [name]: value });
  };
  render() {
    const { displayName, email, password, cpassword } = this.state;
    return (
      <React.Fragment>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody className="mx-4">
              <div className="text-center">
                <h3 className="dark-grey-text mb-5">
                  <strong>Register</strong>
                </h3>
              </div>
              <form onSubmit={this.handleSubmit}>
                <FormInput
                  label="Your name"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  name="displayName"
                  value={displayName}
                  onChange={this.handleChange}
                  required
                />
                <FormInput
                  label="Your email"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                  required
                />
                <FormInput
                  label="Your password"
                  group
                  type="password"
                  validate
                  containerClass="mb-0"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                  required
                />
                <FormInput
                  label="Confirm password"
                  group
                  type="password"
                  validate
                  containerClass="mb-0"
                  name="cpassword"
                  value={cpassword}
                  onChange={this.handleChange}
                  required
                />

                <div className="text-center mb-3">
                  <SmartBtn
                    type="submit"
                    gradient="purple"
                    className="btn-block z-depth-1a"
                  >
                    Sign up
                  </SmartBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </React.Fragment>
    );
  }
}
export default SignUp;
