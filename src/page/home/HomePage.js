import React from "react";
import ProductCard from './../../components/product/products';
import { MDBContainer } from 'mdbreact';
class HomePage extends React.Component {
    scrollToTop = () => window.scrollTo(0, 0);
    render() {
        return (
            <React.Fragment>
                <MDBContainer>
                    <ProductCard />
                </MDBContainer>
            </React.Fragment>
        );
    }
}
export default HomePage;
