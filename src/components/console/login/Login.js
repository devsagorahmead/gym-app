import React from "react";

import "./login.css";

const Login = () => {
	return (
		<div id="container">
	
		<form action="">
		
		<label for="name">Username:</label>
		
		<input type="name"/>
		
		<label for="username">Password:</label>
		
		<p><a href="#">Forgot your password?</a>
		
		<input type="password"/>
		
		</p><div id="lower">
		
		<input type="checkbox"/><label class="check" for="checkbox">Keep me logged in</label>
		
		<input type="submit" value="Login"/>
		
		</div>
		
		</form>
		
	</div>

	);
};

export default Login;
