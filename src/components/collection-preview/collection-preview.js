import React from 'react';
import CollectionItem from './../collection-item/collection-item';
import {

    MDBCard,

    MDBCol,

} from "mdbreact";

const PreviewCollection = ({ items, title }) => {
    return (
        <React.Fragment>




            {items.filter((item, idx) => idx < 4).map(({ id, ...otherItemProps }) => (
                <MDBCol md="3" sm="8" className="mt-4" key={id}>
                    <MDBCard className="m-2" cascade ecommerce wide>
                        <CollectionItem  {...otherItemProps} />
                    </MDBCard>
                </MDBCol>
            ))}




        </React.Fragment>
    )
}

export default PreviewCollection;