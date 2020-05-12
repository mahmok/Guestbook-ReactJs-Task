import React from 'react';
import './Login.css';

export default class LoginPage extends React.Component {
    
    constructor(props)
    {
        super(props)
        this.state = {
            email: "",
            password: ""
        }
    }
    
    onLoginButtonClick()
    {
        console.log(this.state);
        this.props.history.push("/");
    }

    onEmailChange(value)
    {
        this.setState({
            email: value
        })
    }

    onPasswordChange(value)
    {
        this.setState({
            password: value
        })
    }
    
    render() {
      return(
        <div className="main-container">
            <h1>Login</h1>
            <div className="form-container">
                <div className="input-field-container">
                    <p className="input-label">Email</p>
                    <input className="input-field" type="email" placeholder="Enter your email" value={this.state.email} onChange={(event) => this.onEmailChange(event.target.value)} />
                </div>

                <div className="input-field-container">
                    <p className="input-label">Password</p>
                    <input className="input-field" type="password" placeholder="Enter your password" value={this.state.password} onChange={(event) => this.onPasswordChange(event.target.value)} />
                </div>
                <button onClick={() => this.onLoginButtonClick()} className="login-button">Login</button>

            </div>
        </div>
      );
    }
}