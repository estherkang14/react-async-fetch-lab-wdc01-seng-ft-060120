// create your App component here
import React, { Component } from 'react'

export class App extends Component {
    
    state = {
        astronauts: []
    }
      
    render() {
        return (
            <div>
             
            </div>
        )
    }

    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
        .then(response => response.json())
        .then(data => {
            let astros = [...this.state.astronauts, data.people]
            this.setState({ astronauts: astros })
            }
        )
    }
}
export default App