import React from 'react'

// const CheckBox = (props) => (
//     <div className="todo-item">
//         <input type="checkbox" name="favourite_game" defaultChecked={props.game.checked}/>
//         <p style={{display: !props.game.name && "none"}}>Game: {props.game.name}</p>
//     </div>)

class CheckBox extends React.Component {

    render() {
        let completedStyle = {
            fontStyle: 'italic',
            color: '#cdcdcd',
            textDecoration: 'line-through'
        }

        let normalStyle = {
            fontWeight: 'bold',
            color: '#ababab',
        }

        return (
        <div className="todo-item">
            <input type="checkbox" name="favourite_game" checked={this.props.game.checked}
                onChange={() => this.props.eventHandler(this.props.game.id)}/>
            <p style={this.props.game.checked ? completedStyle : normalStyle}>
            {this.props.game.name}</p>
        </div>)
    }
}

export default CheckBox