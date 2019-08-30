import React from 'react';
import {
    MDBCol,
    MDBIcon,
    MDBContainer,
    MDBInput,
    MDBBtn
} from "mdbreact";
import SectionContainer from "../../components/sectionContainer";

const ContacUs = () => {
    return (
        <React.Fragment>
            <MDBContainer>
                <SectionContainer className="mt-4">
                    <MDBCol md="8" >
                        <form>
                            <p className="h5 text-center mb-4">Write to us</p>
                            <div className="grey-text">
                                <MDBInput
                                    label="Your name"
                                    icon="user"
                                    group
                                    type="text"
                                    validate
                                    error="wrong"
                                    success="right"
                                />
                                <MDBInput
                                    label="Your email"
                                    icon="envelope"
                                    group
                                    type="email"
                                    validate
                                    error="wrong"
                                    success="right"
                                />
                                <MDBInput label="Subject" icon="tag" group type="text" validate error="wrong" success="right" />
                                <MDBInput type="textarea" rows="2" label="Your message" icon="pencil-alt" />
                            </div>
                            <div className="text-center">
                                <MDBBtn outline color="secondary">
                                    Send <MDBIcon icon="paper-plane" className="ml-1" />
                                </MDBBtn>
                            </div>
                        </form>
                    </MDBCol>
                </SectionContainer>
            </MDBContainer>
        </React.Fragment>
    )
}

export default ContacUs;