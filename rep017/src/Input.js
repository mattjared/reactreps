import React from 'react';

class Input extends React.Component {
    constructor() {
        super()
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            content: 'Hello!'
        };
    }
    handleChange(e) {
        this.setState({
            content: e.target.value
        })
    }
    render() {
        return (
            <div>
                <input type="text" placeholder="Type something!" onChange={(e) => this.handleChange(e)}/>
                <p>{this.state.content}</p>
            </div>
        )
    }
}

export default Input;