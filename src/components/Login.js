import React, {Component} from 'react'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange() {
        this.setState(prevState => {
            return {
                isLoggedIn: !prevState.isLoggedIn
            }
        })
    }

    render() {
        return (<div>
            <p>{this.state.isLoggedIn ? 'You are Logged In' : 'You are Logged Out'}</p>
            <button className="button" onClick={this.handleChange}>
            {this.state.isLoggedIn ? 'Log Out' : 'Log In'}
            </button>
            </div>)
    }
}

export default Login
