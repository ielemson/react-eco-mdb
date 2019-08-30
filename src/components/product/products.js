import React, { Component } from 'react';
import ProductRow from './product-item';
import ProductData from './product-data';
import { MDBRow } from "mdbreact";
class Product extends Component {
    constructor() {
        super();
        this.state = { products: ProductData }
    }


    render() {
        return (

            <MDBRow className="mt-4">

                {this.state.products.map(({ id, ...otherProductProps }) => (

                    <ProductRow key={id} {...otherProductProps} />
                ))}
            </MDBRow>



        );
    }
}
export default Product;
