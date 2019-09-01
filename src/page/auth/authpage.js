import React from "react";
import SigninPage from "../../components/auth-signIn/signin";
import SignUp from "../../components/auth-sign-up/sign-up";
import { MDBContainer, MDBRow } from "mdbreact";

const FormPage = () => {
  return (
    <MDBContainer>
      <MDBRow className="mt-5">
        {/* SIGN IN HERE */}
        {/* SIGN IN ENDS HERE */}

        <SigninPage />
        {/* SIGN UP************************************************************************************************************ */}
        <SignUp />
      </MDBRow>
    </MDBContainer>
  );
};

export default FormPage;
