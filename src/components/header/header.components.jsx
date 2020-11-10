import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/images/crown.svg";

import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectHidden } from "../../redux/cart/cart.selector";

import { signOutstartAction } from "../../redux/user/user.action";


import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

const Header = ({ currentUser, hidden, signOutstartAction }) => {
    return (
        <header className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    SHOP
                </Link>
                <Link className="option" to="/shop">
                    CONTACT
                </Link>
                {
                    currentUser ? (
                        <div className="option" onClick={signOutstartAction}>
                            SIGN OUT
                        </div>
                    ) :
                        <Link className="option" to="/signin">SIGN IN</Link>
                }
                <CartIcon />
            </div>
            {
                hidden ? null :
                    <CartDropdown />
            }
        </header>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectHidden
})

const mapDispatchToProps = dispatch => {
    return {
        signOutstartAction: () => dispatch(signOutstartAction())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);