import React, { Component, Fragment } from "react";
import {Helmet} from "react-helmet";
import './forms.css';
import ScriptTag from 'react-script-tag';
import ReactDOM from 'react-dom'
import { Auth0Provider } from "@auth0/auth0-react";
import firebase from "firebase/app";
import "firebase/auth";
const config = {

  apiKey: "AIzaSyCrxOo5UAJtFPp0bKoTHD6FSEcTzBs9gOs",
  authDomain: "chattrbox-auth.firebaseapp.com",
  projectId: "chattrbox-auth",
  storageBucket: "chattrbox-auth.appspot.com",
  messagingSenderId: "1028390821325",
  appId: "1:1028390821325:web:7fba4c4e0aee4f733ab884",
  measurementId: "G-S72MF3QDRF"
};
firebase.initializeApp(config);

 

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      Id:'',
      Password:'',
      Name:''
  };
}
changeHandler = e => {
    this.setState({
      Id:e.target.value
    });
}
changeHandlerPass = e => {
    this.setState({
      Password:e.target.value
    });
}
changeHandlerName = e => {
    this.setState({
      Name:e.target.value
    });
}
onCreateUser=()=>{

    firebase.auth().createUserWithEmailAndPassword(this.state.Id, this.state.Password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
  
    });

}
    render() {
        return (
        
        <Fragment>
      
        <h2>Your Privacy Friendly Community Is Clicks Away</h2>
<div class="container" id="container">


	<div class="form-container sign-up-container">
		<form action="#" onSubmit={this.onCreateUser}>
			<h1>Create Account</h1>
			<div class="social-container">
				<a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
				<a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
				<a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
			</div>
			<span>or use your email for registration</span>
			<input type="text" placeholder="Name" value={this.state.Name} onChange={this.changeHandlerName} id="emailsignup" />
			<input type="email" placeholder="Email" value={this.state.Id}  onChange={this.changeHandler} id="passsignup" class="signup-email" />
			<input type="password" placeholder="Password" value={this.state.password} onChange={this.changeHandlerPass}  class="signup-password" />
			<button class="signup-db">Sign Up</button>
		</form>
	</div>
	<div class="form-container sign-in-container">
		<form action="#" onSubmit={this.onSigninUser}>
			<h1>Sign in</h1>
			<div class="social-container">
				<a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
				<a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
				<a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
			</div>
			<span>or use your account</span>
			<input type="email" placeholder="Email" value={this.state.Id} onChange={this.changeHandler} />
			<input type="password" placeholder="Password" value={this.state.Password} onChange={this.changeHandlerPass} />
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
 export default App;
