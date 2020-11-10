import React from "react";
import { connect } from "react-redux";

import { signUpStartAction } from "../../redux/user/user.action";

import "./sign-up.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";



class SignUp extends React.Component {

    constructor() {
        super();
        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { signUpStartAction } = this.props;
        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("password don't match");
            return;
        }

        signUpStartAction({ displayName, email, password })





    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;

        return (
            <div className="sign-up">
                <h2 className="title">i do not have an account</h2>
                <span>Sign up with your email and password</span>

                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput type="text" name="displayName" id="displayName" value={displayName} handleChange={this.handleChange} label="Display Name" required />
                    <FormInput type="email" name="email" id="signUpEmail" value={email} handleChange={this.handleChange} label="Email" required />
                    <FormInput type="password" name="password" id="signUpPassword" value={password} handleChange={this.handleChange} label="Password" required />
                    <FormInput type="password" name="confirmPassword" id="signUpConfirmPassword" value={confirmPassword} handleChange={this.handleChange} label="Confirm Password" required />
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>

            </div>
        );
    }



}

const mapDispatchToProps = dispatch => {
    return {
        signUpStartAction: (userCredentials) => dispatch(signUpStartAction(userCredentials))
    }
}

export default connect(null, mapDispatchToProps)(SignUp);

