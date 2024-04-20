import React from 'react';
import './SignIn.css';

function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted!");
  };

  return (
    <div className="signin-container">
      <h2 className="signin-heading">Sign In Here</h2>
      <form className="signin-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit" className="signin-button">Sign In</button>
      </form>
      <div className="forgot-password">
        <a href="#">Forgot Password?</a>
      </div>
    </div>
  );
}

export default SignIn;
