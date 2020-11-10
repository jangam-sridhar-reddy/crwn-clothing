import React from "react";
import "./sign-in.styles.scss";

import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";

import CustomizeButton from "../custom-button/custom-button.component";

import { googleSignInStartAction, emailSignInStartAction } from "../../redux/user/user.action";

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        }
    }

    onSubmitHandler = async event => {
        event.preventDefault();
        const { emailSignInStartAction } = this.props;
        const { email, password } = this.state;

        emailSignInStartAction(email, password)



    }

    onChangeHandler = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }


    render() {
        const { googleSignInStartAction } = this.props;
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
                        <CustomizeButton type="button" onClick={googleSignInStartAction} isGoogleSignIn >
                            Sign in with google
                        </CustomizeButton>
                    </div>

                </form>
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch) => ({

    googleSignInStartAction: () => dispatch(googleSignInStartAction()),
    emailSignInStartAction: (email, password) => dispatch(emailSignInStartAction({ email, password }))

})

export default connect(null, mapDispatchToProps)(SignIn);