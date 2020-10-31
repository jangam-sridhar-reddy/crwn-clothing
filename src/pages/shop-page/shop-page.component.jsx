import React from "react";
import SHOP_DATA from "./shop-page-data";
import "./shop-page.styles.scss";
import CollectionPreview from "../../components/collection-preview/collection-preview.compoenent";
class ShopPage extends React.Component {
    constructor() {
        super();

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {

        const { collections } = this.state;
        return (
            <div className="shop-page">

                {
                    collections.map(({ id, ...otherCollectionProps }) => {
                        return <CollectionPreview key={id}  {...otherCollectionProps} />
                    })
                }

            </div>
        )
    }
}

export default ShopPage;