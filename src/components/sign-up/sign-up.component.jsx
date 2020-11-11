import React from "react";
import { connect } from "react-redux";

import { signUpStartAction } from "../../redux/user/user.action";

import "./sign-up.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { useState } from "react";



const SignUp = ({ signUpStartAction }) => {

    const [userCredentials, setUserCredentials] = useState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const { displayName, email, password, confirmPassword } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("password don't match");
            return;
        }

        signUpStartAction({ displayName, email, password })





    }

    const handleChange = event => {
        const { name, value } = event.target;
        setUserCredentials({ ...userCredentials, [name]: value });
    }




    return (
        <div className="sign-up">
            <h2 className="title">i do not have an account</h2>
            <span>Sign up with your email and password</span>

            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput type="text" name="displayName" id="displayName" value={displayName} handleChange={handleChange} label="Display Name" required />

                <FormInput type="email" name="email" id="signUpEmail" value={email} handleChange={handleChange} label="Email" required />

                <FormInput type="password" name="password" id="signUpPassword" value={password} handleChange={handleChange} label="Password" required />

                <FormInput type="password" name="confirmPassword" id="signUpConfirmPassword" value={confirmPassword} handleChange={handleChange} label="Confirm Password" required />

                <CustomButton type="submit">SIGN UP</CustomButton>
            </form>

        </div>
    );




}

const mapDispatchToProps = dispatch => {
    return {
        signUpStartAction: (userCredentials) => dispatch(signUpStartAction(userCredentials))
    }
}

export default connect(null, mapDispatchToProps)(SignUp);

