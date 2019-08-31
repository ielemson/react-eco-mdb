import React from 'react';
import { MDBBtn } from 'mdbreact';
const CustomBtn = ({ children, ...otherProps }) => {
    return (
        <React.Fragment>
            <MDBBtn {...otherProps}>{children}</MDBBtn>
        </React.Fragment>
    )
}

export default CustomBtn;