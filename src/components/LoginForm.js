import React from 'react';

class LoginForm extends React.Component {
  render() {
    return (
      <div className="main">
        <h1>
          Sign in
        </h1>
        
        <form>
          <div className="form-input-group">
            <label>
              Username
            </label>
            <input type="text" name="username" placeholder={this.props.username}/>
          </div>
          <div className="form-input-group">
            <label>
              Password
            </label>
            <input type="password" name="password" placeholder="********"/>
          </div>
          <button className="btn-form-submit">
            Sign up to Coders-x
          </button>
          <div className="form-checkbox-group">
            <input type="checkbox" name="rememberMe" />
            <label>Keep me signed in</label>
          </div>
          <div className="forgot-group">
            <a href="#">Forgot username?</a>
            <a href="#">Forgot password?</a>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
