import React from 'react';
import { MDBInput } from 'mdbreact';
const FormInput = ({ handleChange, ...otherProps }) => {
    return (
        <React.Fragment>
            <MDBInput group onChange={handleChange} {...otherProps} />
        </React.Fragment>
    )
}
export default FormInput;