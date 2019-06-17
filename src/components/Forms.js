import React, {Component} from 'react'

class Forms extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            textArea: "",
            isChecked: false,
            gender: '',
            favColor: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value, type, checked} = event.target
        this.setState({
            [name]: type === 'checkbox'? checked : value
        })
    }

    render() {
        return (<form>
            <input type='text' value={this.state.firstName} name='firstName' placeholder='First Name' onChange={this.handleChange}/>
            <br/>
            <input type='text' value={this.state.lastName} name='lastName' placeholder='Last Name' onChange={this.handleChange}/>
            <br/>
            <textarea value={this.state.textArea} name='textArea' placeholder='Comments' onChange={this.handleChange}/>
            <h1>{this.state.firstName} {this.state.lastName}</h1>
            <label>
            <input type="checkbox" checked={this.state.isChecked} name='isChecked' onChange={this.handleChange}/>
            Is Checked?
            </label>
            <br/>
            <label>
            <input type="radio" checked={this.state.gender === 'male'} name='gender' value='male' onChange={this.handleChange}/>
            Male
            </label>
            <br/>
            <label>
            <input type="radio" checked={this.state.gender === 'female'} name='gender' value='female' onChange={this.handleChange}/>
            Female
            </label>
            <br/>
            <br/>
            <select value={this.state.favColor} name='favColor' onChange={this.handleChange}>
                <option value='blue'>Blue</option>
                <option value='green'>Green</option>
                <option value='red'>Red</option>
                <option value='yellow'>Yellow</option>
            </select>
            <h2>You are a {this.state.gender}</h2>
            <h2>Your Fav Color is {this.state.favColor}</h2>
        </form>)
    }
}

/* FORMIK */

export default Forms
