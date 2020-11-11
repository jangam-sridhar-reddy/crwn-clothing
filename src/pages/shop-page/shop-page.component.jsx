import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";


import { fetchCollectionsStart } from "../../redux/shop/shop.actions";


import CollectionConatiner from "../collection/collection.container";

import CollectionOverviewContainer from "../../components/collection-overview/collection-overview.container";


import "./shop-page.styles.scss";


const ShopPage = ({ match, fetchCollectionsStart }) => {


    useEffect(() => {
        fetchCollectionsStart()

    }, [fetchCollectionsStart]);
    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
            <Route path={`${match.path}/:collectionId`} component={CollectionConatiner} />
        </div>
    )


}



const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(ShopPage);