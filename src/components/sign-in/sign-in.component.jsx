import React from "react";
import "./sign-in.styles.scss";

import FormInput from "../form-input/form-input.component";

import CustomizeButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
    constructor() {
        super();

        this.state = {
            email: "",
            password: ""
        }
    }

    onSubmitHandler = event => {
        event.preventDefault();

        this.setState({ email: "", password: "" })

    }

    onChangeHandler = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }


    render() {
        return (
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.onSubmitHandler}>

                    <FormInput type="email" name="email" value={this.state.email} handleChange={this.onChangeHandler} id="email" required label="Email" />
                    <FormInput type="password" name="password" value={this.state.password} handleChange={this.onChangeHandler} id="password" required label="Password" />

                    <div className="buttons">
                        <CustomizeButton type="submit">
                            Sign in
                        </CustomizeButton>
                        <CustomizeButton type="button" onClick={signInWithGoogle} isGoogleSignIn >
                            Sign in with google
                        </CustomizeButton>
                    </div>

                </form>
            </div>
        )
    }

}

export default SignIn;