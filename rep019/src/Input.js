import React from 'react';
import { lowCalc, calc} from './helpers';

class Input extends React.Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            salary: ' ',
            rawSalary: ' ',
            showResult: 'False'
        }
    }
    handleChange(e) {
        this.setState({
            filingType: e.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            salary: this.salary.value,
            rawSalary: this.salary.value,
            showResult: 'True'
        })
        const filingType = this.state.filingType;
        const salaryVal = this.salary.value;
        // Single
        if (filingType === 'Single') {
            if (salaryVal < 9325) {
                this.setState({ salary: lowCalc(salaryVal, .1) });
            } else if (salaryVal > 9326 && salaryVal < 37950) {
                this.setState({ salary: calc(salaryVal, 9325, .15, 932.50)})
            } else if (salaryVal > 37951 && salaryVal < 91900) {
                this.setState({ salary: calc(salaryVal, 37950, .25, 5226.25) });
            } else if (salaryVal > 91901 && salaryVal < 191650) {
                this.setState({ salary: calc(salaryVal, 91900, .28, 18713.75) });
            } else if (salaryVal > 191651 && salaryVal < 416700) {
                this.setState({ salary: calc(salaryVal, 191650, .33, 46643.75) });
            } else if (salaryVal > 416701 && salaryVal < 418400) {
                this.setState({ salary: calc(salaryVal, 416700, .35, 120910.25) });
            } else if (salaryVal > 418410) {
                this.setState({ salary: calc(salaryVal, 416700, .35, 120910.25) });
            }
        }
        // Married
        else if (filingType === 'Married') {
            if (salaryVal < 18650) {
                this.setState({ salary: lowCalc(salaryVal, .1) });
            } else if (salaryVal > 18651 && salaryVal < 75900) {
                this.setState({ salary: calc(salaryVal, 18650, .15, 1865)})
            } else if (salaryVal > 75901 && salaryVal < 153100) {
                this.setState({ salary: calc(salaryVal, 75900, .25, 10452.50) });
            } else if (salaryVal > 153101 && salaryVal < 233350) {
                this.setState({ salary: calc(salaryVal, 153100, .28, 29752.5) });
            } else if (salaryVal > 233351 && salaryVal < 416700) {
                this.setState({ salary: calc(salaryVal, 233350, .33, 52222.50) });
            } else if (salaryVal > 416701 && salaryVal < 470700) {
                this.setState({ salary: calc(salaryVal, 416700, .35, 112728) });
            } else if (salaryVal > 470701) {
                this.setState({ salary: calc(salaryVal, 470700, .396, 131628) });
            }
        }
        // Head of Household
        else if (filingType === 'Household') {
            if (salaryVal < 13350) {
                this.setState({ salary: lowCalc(salaryVal, .1) });
            } else if (salaryVal > 13351 && salaryVal < 50800) {
                this.setState({ salary: calc(salaryVal, 13350, .15, 1335)})
            } else if (salaryVal > 50801 && salaryVal < 131200) {
                this.setState({ salary: calc(salaryVal, 50800, .25, 6925.5) });
            } else if (salaryVal > 131201 && salaryVal < 212500) {
                this.setState({ salary: calc(salaryVal, 131200, .28, 27052.5) });
            } else if (salaryVal > 212501 && salaryVal < 416700) {
                this.setState({ salary: calc(salaryVal, 212500, .33, 49816.5) });
            } else if (salaryVal > 416701 && salaryVal < 444500) {
                this.setState({ salary: calc(salaryVal, 416700, .35, 117202.5) });
            } else if (salaryVal > 444501) {
                this.setState({ salary: calc(salaryVal, 444550, .396, 126950) });
            }
        }
        // Married and Filing Seperately
        else if (filingType === 'Seperately') {
            if (salaryVal < 9235) {
                this.setState({ salary: lowCalc(salaryVal, .1) });
            } else if (salaryVal > 9326 && salaryVal < 37950) {
                this.setState({ salary: calc(salaryVal, 9325, .15, 932.5)})
            } else if (salaryVal > 37951 && salaryVal < 75550) {
                this.setState({ salary: calc(salaryVal, 37950, .25, 5226.25) });
            } else if (salaryVal > 76551 && salaryVal < 116675) {
                this.setState({ salary: calc(salaryVal, 76550, .28, 14876.25) });
            } else if (salaryVal > 116676 && salaryVal < 208350) {
                this.setState({ salary: calc(salaryVal, 116675, .33, 26111.25) });
            } else if (salaryVal > 208351 && salaryVal < 235350) {
                this.setState({ salary: calc(salaryVal, 208350, .35, 56364) });
            } else if (salaryVal > 235351) {
                this.setState({ salary: calc(salaryVal, 235350, .396, 65814) });
            }
        }
    }
    render() {
        let resultsDiv;
        // if (this.state.thinger === True) {
        if (this.state.showResult === 'True') {
            resultsDiv = (
                <div>
                <p>Filing as {this.state.filingType} with a base salary of ${this.state.rawSalary} you should expect to pay... </p>
                <h3>${this.state.salary}</h3>
                </div>
            )
        }
        return (
            <div>
                <form onSubmit={(e) => this.handleSubmit(e)} ref={(input) => this.taxForm = input }>
                    <div>
                        <input type="number" placeholder="50000" ref={(input) => this.salary = input}/>
                    </div>
                    <div>
                        <label>
                           <input type="radio" value="Single" name="choice" onChange={this.handleChange}/>
                           Single
                        </label>
                        <label>
                            <input type="radio" value="Married" name="choice" onChange={this.handleChange}/>
                            Married
                        </label>
                        <label>
                            <input type="radio" value="Household" name="choice" onChange={this.handleChange}/>
                            Head of Household
                        </label>
                        <label>
                            <input type="radio" value="Seperately" name="choice" onChange={this.handleChange}/>
                            Married Filing Seperately
                        </label>
                    </div>
                    <button>Run the numbers!</button>
                </form>
                { resultsDiv }
            </div>
        )
    }
}

export default Input;