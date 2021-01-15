import React, { Component, Fragment, useState } from "react";
import {Helmet} from "react-helmet";
import './forms.css';
import ScriptTag from 'react-script-tag';
const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const signInWithEmailAndPasswordHandler = 
            (event,email, password) => {
                event.preventDefault();
    };

      const onChangeHandler = (event) => {
          const {name, value} = event.currentTarget;

          if(name === 'userEmail') {
              setEmail(value);
          }
          else if(name === 'userPassword'){
            setPassword(value);
          }
      };

export default class Login extends Component {
    render() {
        return (
        
        <Fragment>
       
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
				<a href="#" class="social"><img src="facebook.png"></img><i src="facebook.png" class="fab fa-facebook-f"></i></a>
				<a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
				<a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
			</div>
			<span>or use your account</span>
			<input type="email" placeholder="Email" id="userEmail" value = {email} onChange = {(event) => onChangeHandler(event)}/>
			<input type="password" placeholder="Password" id="userPassword" value = {password} onChange = {(event) => onChangeHandler(event)}/>
			<a href="#">Forgot your password?</a>
			<button onClick = {(event) => {signInWithEmailAndPasswordHandler(event, email, password)}} >Sign In</button>
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
const signInWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password).catch(error => {
      setError("Error signing in with password and email!");
      console.error("Error signing in with password and email", error);
    });
  };