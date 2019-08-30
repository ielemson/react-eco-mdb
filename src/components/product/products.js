import React, { Component } from 'react';
import ProductRow from './product-item';
import ProductData from './product-data';
import { MDBRow } from "mdbreact";
// import SectionContainer from './../sectionContainer';
class Product extends Component {
    constructor() {
        super();
        this.state = { products: ProductData }
    }


    render() {
        return (
            <React.Fragment>

                <MDBRow>

                    {this.state.products.map(({ id, ...otherProductProps }) => (

                        <ProductRow key={id} {...otherProductProps} />
                    ))}
                </MDBRow>

            </React.Fragment>
        );
    }
}
export default Product;
