import React from 'react';
import './App.css';

class App extends React.Component {

    state = {
        text: 'Check what happened in past!',
        error: '',
    };

    handleDateChange = (e) => {
        const value = this.refs.number.value;
        fetch(`http://numbersapi.com/${value}/year?json`)
            .then(res => {
                if (res.ok) {
                    return res
                } else throw Error(res.statusText)
            })
            .then(res => res.json())
            .then(data => this.setState({
                text: data.text
            }))
            .catch(err => {
                this.setState({text: "Jest problem :( " + err})
            })
    };

    render() {
        return (
            <div>
                <input onChange={this.handleDateChange} type='text' ref="number"/>
                <p>{this.state.text}</p>
            </div>
        );
    }
}

export default App;
