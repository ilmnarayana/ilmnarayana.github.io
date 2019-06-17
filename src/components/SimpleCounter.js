import React, {Component} from 'react'

class SimpleCounter extends Component {
    constructor() {
        super()
        this.state = {
            value: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(prevState => {
                return { value: prevState.value+1 }
            })
    }

    render() {
        return (<div style={{textAlign: 'center'}}>
            <h2>{this.state.value}</h2>
            <button onClick={this.handleClick}> Click Me! </button>
        </div>)
    }
}

export default SimpleCounter
