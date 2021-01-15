import React, { Component, Fragment } from "react";
import {Helmet} from "react-helmet";
import './forms.css';
import ScriptTag from 'react-script-tag';
export default class Login extends Component {
    render() {
        return (
        
        <Fragment>
        <Helmet>
     <scriptTag src="./script.js" />
</Helmet>
        <h2>Your Privacy Friendly Community Is Clicks Away</h2>
<div class="container" id="container">


	<div class="form-container sign-up-container">
		<form action="#">
			<h1>Create Account</h1>
			<div class="social-container">
				<a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
				<a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
				<a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
			</div>
			<span>or use your email for registration</span>
			<input type="text" placeholder="Name" />
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<button>Sign Up</button>
		</form>
	</div>
	<div class="form-container sign-in-container">
		<form action="#">
			<h1>Sign in</h1>
			<div class="social-container">
				<a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
				<a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
				<a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
			</div>
			<span>or use your account</span>
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<a href="#">Forgot your password?</a>
			<button>Sign In</button>
		</form>
	</div>
	<div class="overlay-container">
		<div class="overlay">
			<div class="overlay-panel overlay-left">
				<h1>Welcome Back!</h1>
				<p>To keep connected with us please login with your personal info</p>
				<button class="ghost" id="signIn" onClick={handleSigninClick}>Sign In</button>
			</div>
			<div class="overlay-panel overlay-right">
				<h1>Hello, Friend!</h1>
				<p>Enter your personal details and start journey your with us</p>
				<button class="ghost" id="signUp" onClick={handleSignupClick}>Sign Up</button>
			</div>
		</div>
	</div>
</div>



 
                </Fragment>
        );
    }
}

  function handleSigninClick(e) {
    e.preventDefault();
    document.getElementById("container").classList.remove('right-panel-active');
  }
function handleSignupClick(e) {
    e.preventDefault();
    document.getElementById("container").classList.add('right-panel-active');
  }
