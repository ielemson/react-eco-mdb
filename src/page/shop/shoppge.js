import React, { Component } from 'react';
import shop_data from './shop_data';
import CollectionPreview from '../../components/collection-preview/collection-preview';
import { MDBRow } from 'mdbreact'
class ShopPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: shop_data
        }
    }
    render() {
        const { collections } = this.state;
        return (
            <React.Fragment>

                {collections.map(({ id, title, ...othercollectionprops }) => (
                    <div key={id}>
                        <h3 className="mt-5" color="peach"><strong>{title.toLocaleUpperCase()} </strong></h3>
                        <MDBRow>

                            <CollectionPreview  {...othercollectionprops} />
                        </MDBRow>
                    </div>
                ))}

            </React.Fragment>
        );
    }
}



export default ShopPage;