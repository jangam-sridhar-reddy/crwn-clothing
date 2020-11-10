import { connect } from "react-redux";
import { compose } from "redux";

import { createStructuredSelector } from "reselect"

import { selectCollecionIsFetching } from "../../redux/shop/shop.selector";

import CollectionOverview from "./collection-overview.component";

import WithSpinner from "../with-spinner/with-spinner.components";


const mapStateToProps = createStructuredSelector({
    isLoading: selectCollecionIsFetching
})

const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionOverview);


export default CollectionOverviewContainer;