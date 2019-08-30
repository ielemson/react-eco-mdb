import React from "react";
import ProductCard from './../../components/product/products';
import { MDBContainer } from 'mdbreact';
class HomePage extends React.Component {
    scrollToTop = () => window.scrollTo(0, 0);
    render() {
        return (
            <MDBContainer>
                <ProductCard />
            </MDBContainer>
        );
    }
}
export default HomePage;
