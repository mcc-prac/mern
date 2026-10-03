import React from "react";

export const Car = (props) => {
    return (
        <h2>I am a {props.name}!!!</h2>
    );
};

export const Product = () => {
    return (
        <div>
            <h1>Product details</h1>
            <Car name="prod_name" />
        </div>
    );
};
