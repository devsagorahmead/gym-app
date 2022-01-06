import React from "react";
import "./singup.css";
const Signup = () => {
	return (
		<div id="container">
	
		<form action="">
		
		<label for="name">Enter Your Name:</label>
		
		<input type="name"/>
		
		<label for="username">Your Email Id:</label>
		
		<input type="name"/>
		<label for="username">Your Password:</label>
		<input type="password"/>
		
		 <div id="lower">
		
		<input type="checkbox"/><label class="check" for="checkbox"> accept all documents</label>
		
		<input type="submit" value="Singup"/>
		
		</div>
		
		</form>
		
	</div>
	);
};

export default Signup;
