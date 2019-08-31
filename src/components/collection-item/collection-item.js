import React from 'react';
import {
    MDBBtn,
    MDBCardBody,
    MDBCardImage,
    MDBCardTitle,
    MDBCardText,
    MDBTooltip,
    MDBIcon,


} from "mdbreact";

const Collection_item = ({ imageUrl, name, price }) => {
    return (
        <React.Fragment>
<MDBCardImage src={imageUrl} cascade top waves className="img-thumbnail img-fluid" />
                        <MDBCardBody  cascade className="text-center">
                            <MDBCardTitle tag="h5">
                                <a href="#!"><strong>{name}</strong></a>
                            </MDBCardTitle>
                            <MDBBtn gradient="purple">
                                <a href="#!"><strong className="white-text">ADD TO CART</strong></a>
                            </MDBBtn>
                            <MDBCardText>
                                It is a long established fact that a reader will be distracted by the readable
                                
</MDBCardText>

                            <span className="float-left">{price}$</span>
                            <span className="float-right">
                                <MDBTooltip placement="top">
                                    <MDBBtn tag="a" href="/" target="_blank" color="transparent" size="lg" className="p-1 m-0 mr-2 z-depth-0" >
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
        </React.Fragment>
    )
}

export default Collection_item;