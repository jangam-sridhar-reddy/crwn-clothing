import React from "react";
import { connect } from "react-redux"
import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";

import CartItems from "../cart-items/cart-items.component";

const CartDropdown = ({ cartItems }) => (
    <div className="cart-dropdown" >
        <div className="cart-items">
            {
                cartItems.map(cartItem =>
                    <CartItems key={cartItem.id} item={cartItem} />
                )
            }
        </div>
        <CustomButton type="button" >
            GO TO CHECKOUT
        </CustomButton>
    </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
})

export default connect(mapStateToProps)(CartDropdown);