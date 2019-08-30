import React from 'react';
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardTitle,
    MDBCardText,
    MDBCol,

    MDBTooltip,
    MDBIcon,


} from "mdbreact";
const Products = ({ title, imageUrl, price, size, linkUrl }) => {
    return (
        <MDBCol sm="4">
            <MDBCard className="m-2" style={{ width: "22rem" }} cascade ecommerce wide>
                <MDBCardImage cascade top src={imageUrl} waves />
                <MDBCardBody cascade className="text-center">
                    <MDBCardTitle tag="h5">
                        <a href="#!"><strong>{title.toUpperCase()}</strong></a>
                    </MDBCardTitle>
                    <MDBBtn gradient="purple">
                        <a href="#!"><strong className="white-text">ADD TO CART</strong></a>
                    </MDBBtn>
                    <MDBCardText>
                        It is a long established fact that a reader will be distracted by the readable
                        content of a page when looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of letters, as opposed to using
        </MDBCardText>

                    <span className="float-left">{price}$</span>
                    <span className="float-right">
                        <MDBTooltip placement="top">
                            <MDBBtn tag="a" href={linkUrl} target="_blank" color="transparent" size="lg" className="p-1 m-0 mr-2 z-depth-0" >
                                <MDBIcon icon="share-alt" />
                            </MDBBtn>
                            <div>Share</div>
                        </MDBTooltip>
                        <MDBTooltip placement="top">
                            <MDBBtn tag="a" color="transparent" size="lg" className="p-1 m-0 z-depth-0" >
                                <MDBIcon icon="heart" className="red-text" />
                            </MDBBtn>
                            <div>Added to Wishlist</div>
                        </MDBTooltip>
                    </span>

                </MDBCardBody>
            </MDBCard>

        </MDBCol>

    )
}

export default Products;