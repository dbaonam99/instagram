import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:4000/api/login', {
            email: this.state.email,
            password: this.state.password
        }).then(res => {
            console.log(res.data);
        }).catch(err => {
            // setErr(err.response.data);
        })
    }

    render() {
        return (
            <div className="Login">
                <div className="container">
                    <div className="banner"></div>
                    <div className="login-box">
                        <div className="login-box-title">
                            <p>Instagram</p>
                        </div>
                        <div className="login-box-input">
                            <form onSubmit={this.handleSubmit}>
                                <input type="text" placeholder="Số điện thoại, tên người dùng hoặc email" name="email" onChange={this.handleChange}></input>
                                <input type="text" placeholder="Mật khẩu" name="password" onChange={this.handleChange}></input>
                                <button>Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
