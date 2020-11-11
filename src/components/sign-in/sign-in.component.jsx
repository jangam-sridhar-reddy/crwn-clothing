import React, { useState } from "react";
import "./sign-in.styles.scss";

import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";

import CustomizeButton from "../custom-button/custom-button.component";

import { googleSignInStartAction, emailSignInStartAction } from "../../redux/user/user.action";

const SignIn = ({ emailSignInStartAction, googleSignInStartAction }) => {

    const [userCredentials, setUserCredentials] = useState({ email: '', password: '' });

    const { email, password } = userCredentials;
    const onSubmitHandler = async event => {
        event.preventDefault();

        emailSignInStartAction(email, password)



    }

    const onChangeHandler = event => {
        const { value, name } = event.target;
        setUserCredentials({ ...userCredentials, [name]: value });
    }




    return (
        <div className="sign-in">
            <h2 className="title">I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={onSubmitHandler}>

                <FormInput type="email" name="email" value={email} handleChange={onChangeHandler} id="email" required label="Email" />

                <FormInput type="password" name="password" value={password} handleChange={onChangeHandler} id="password" required label="Password" />

                <div className="buttons">
                    <CustomizeButton type="submit">
                        Sign in
                    </CustomizeButton>
                    <CustomizeButton type="button" onClick={googleSignInStartAction} isGoogleSignIn >
                        Sign in with google
                    </CustomizeButton>
                </div>

            </form>
        </div>
    )
}



const mapDispatchToProps = (dispatch) => ({

    googleSignInStartAction: () => dispatch(googleSignInStartAction()),
    emailSignInStartAction: (email, password) => dispatch(emailSignInStartAction({ email, password }))

})

export default connect(null, mapDispatchToProps)(SignIn);