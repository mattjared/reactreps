import React from 'react';

class Input extends React.Component{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state ={
            dateColor: ' '
        };
    }
    handleChange(e) {
        e.preventDefault();
        this.setState({
            dateColor: (e.target.value).replace(/-/g, '').substr(2)
        })
    }
    render() {
        let showDiv = {
            background: '#' + this.state.dateColor,
            padding: "20px",
            margin: "20px",
            display: "block",
        }
        return (
            <div>
                <input type="date" required onChange={this.handleChange}/>
                <h2>{ this.state.dateColor }</h2>
                {this.state.dateColor ? (<div style={showDiv}></div>) : null}
            </div>
        )
    }
}

export default Input;