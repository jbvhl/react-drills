import React, {Component} from 'react'

export default class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: ``,
            password: ``
        };
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleUser(name) {
        this.setState({username: name})
    }

    handlePassword(pass) {
        this.setState({password: pass})
    }

    handleLogin() {
        alert(`Username: ${this.state.username} Password: ${this.state.password}`);
    }

    render() {
        return (
            <div>
                <input onChange={(e) => this.handleUser(e.target.value)} type=''text/>
                <input onChange={(e) => this.handlePassword(e.target.value)} type='text'/>
                <button onClick={this.handleLogin}>Login</button>
            </div>
        )
    }
}