import React from 'react';

class Input extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            taxResult: ' '
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        const finalSal = this.salary.value / 2;
        this.setState({
            taxResult: e.target.value,
            salary: finalSal
        })
    }
    render() {
        return (
            <div>
            <form onSubmit={(e) => this.handleSubmit(e)} ref={(input) => this.taxForm = input }>
                <input type="number" placeholder="50000" ref={(input) => this.salary = input}/>
                <button>What are ya paying?</button>
            </form>
            <p>{this.state.taxResult}</p>
            <p>{this.state.salary}</p>
            </div>
        )
    }
}

export default Input;