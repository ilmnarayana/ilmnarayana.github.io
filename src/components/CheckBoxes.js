import React, {Component} from 'react'
import CheckBox from './CheckBox';
import gamesData from './GamesList';

class CheckBoxes extends Component {

    constructor() {
        super();
        this.state = {
            gamesData: gamesData
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        this.setState(prevState => {
            return {
                gamesData: prevState.gamesData.map(item => {
                    if(item.id === id) {
                        item.checked = !item.checked
                        return item
                    }
                    return item
                })
            }
        })
    }

    render() {
        const styles = {
            marginLeft: 50
        }

        const GamesList = this.state.gamesData.map(game => <CheckBox key={game.id} game={game}
            eventHandler={this.handleChange}/>)

        return (<div style={styles} className="todo-list">
            {GamesList}
        </div>)
    }
}

export default CheckBoxes;
