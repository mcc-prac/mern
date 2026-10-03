import React, { Component } from "react";

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
    }

    increment() {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }));
        console.log(this.state.count);
    }

    render() {
        return (
            <div>
                {this.state.count} <br />
                <button onClick={() => this.increment()}>Increment</button>
            </div>
        );
    }
}

export default Counter;
