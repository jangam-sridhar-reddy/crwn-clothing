import { connect } from "react-redux"

import { compose } from "redux";

import { createStructuredSelector } from "reselect";

import { selectCollectionsLoaded } from "../../redux/shop/shop.selector";

import WithSpinner from "../../components/with-spinner/with-spinner.components";

import CollectionPage from "./collection.component";


const mapStateToProps = createStructuredSelector({
    isLoading: (state) => !selectCollectionsLoaded(state)
})

const CollectionConatiner = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage)

export default CollectionConatiner;