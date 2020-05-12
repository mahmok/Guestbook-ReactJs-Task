import React from 'react';
import './Register.css';

export default class RegisterPage extends React.Component {
    
    constructor(props)
    {
        super(props)
        //Add other attributes here
        this.state = {
            email: "",
            password: ""
        }
    }
    
    onRegisterButtonClick()
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
            <h1>Register</h1>
            <div className="form-container">
                <div className="input-field-container">
                    <p className="input-label">Email</p>
                    <input className="input-field" type="email" placeholder="Enter your email" value={this.state.email} onChange={(event) => this.onEmailChange(event.target.value)} />
                </div>

                <div className="input-field-container">
                    <p className="input-label">Password</p>
                    <input className="input-field" type="password" placeholder="Enter your password" value={this.state.password} onChange={(event) => this.onPasswordChange(event.target.value)} />
                </div>
                <button onClick={() => this.onRegisterButtonClick()} className="register-button">Register</button>

            </div>
        </div>
      );
    }
}