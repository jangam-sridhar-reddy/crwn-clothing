import React from "react";
import { connect } from "react-redux"
import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";

import { withRouter } from "react-router-dom";

import CartItems from "../cart-items/cart-items.component";

import { selectCartItems } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className="cart-dropdown" >
        <div className="cart-items">
            {
                cartItems.length ?

                    cartItems.map(cartItem =>
                        <CartItems key={cartItem.id} item={cartItem} />
                    )

                    : <span className="empty-message">No items</span>
            }
        </div>
        <CustomButton type="button" onClick={() => {
            history.push("/checkout")
            dispatch(toggleCartHidden())
        }} >
            GO TO CHECKOUT
        </CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));