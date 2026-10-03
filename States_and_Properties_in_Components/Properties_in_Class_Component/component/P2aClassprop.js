import React, { Component } from "react";

class Parent extends Component {
    render() {
        return (
            <div>
                <h1>This is Parent Class {this.props.address}</h1>
                <Child p_name="Parent Name" p_age={50} />
            </div>
        );
    }
}

class Child extends Component {
    render() {
        return (
            <div>
                <h2>
                    {this.props.p_name} {this.props.p_age}
                </h2>
            </div>
        );
    }
}

export { Parent, Child };
