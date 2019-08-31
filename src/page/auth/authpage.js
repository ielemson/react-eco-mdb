import React from "react";
import SigninPage from '../../components/auth-signIn/signin';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn } from 'mdbreact';

const FormPage = () => {
    return (
        <MDBContainer>

            <MDBRow className="mt-5">
                {/* SIGN IN HERE */}
                {/* SIGN IN ENDS HERE */}

                <SigninPage />

                {/* SIGN UP************************************************************************************************************ */}
                <MDBCol md="6">
                    <MDBCard>
                        <MDBCardBody className="mx-4">
                            <div className="text-center">
                                <h3 className="dark-grey-text mb-5">
                                    <strong>Register</strong>
                                </h3>
                            </div>
                            <MDBInput
                                label="Your first name"
                                group
                                type="text"
                                validate
                                error="wrong"
                                success="right"
                            />
                            <MDBInput
                                label="Your last name"
                                group
                                type="text"
                                validate
                                error="wrong"
                                success="right"
                            />

                            <MDBInput
                                label="Your email"
                                group
                                type="email"
                                validate
                                error="wrong"
                                success="right"
                            />
                            <MDBInput
                                label="Your password"
                                group
                                type="password"
                                validate
                                containerClass="mb-0"
                            />
                            <MDBInput
                                label="Confirm password"
                                group
                                type="password"
                                validate
                                containerClass="mb-0"
                            />
                            {/* <p className="font-small blue-text d-flex justify-content-end pb-3">
                                Forgot
                <a href="#!" className="blue-text ml-1">

                                    Password?
                </a>
                            </p> */}
                            <div className="text-center mb-3">
                                <MDBBtn
                                    type="button"
                                    gradient="purple"
                                    rounded
                                    className="btn-block z-depth-1a"
                                >
                                    Submit
                </MDBBtn>
                            </div>



                        </MDBCardBody>

                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer >
    );
};

export default FormPage;