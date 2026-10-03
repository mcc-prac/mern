import React, { useReducer } from 'react';

const initialState = 0;

const reducer = (state, action) => {
    switch (action) {
        case "add":
            return state + 1;
        case "subtract":
            return state - 1;
        case "reset":
            return 0;
        default:
            throw new Error("Error");
    }
};

const Arithmetic = () => {
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => dispatch("add")}>Increment</button>
            <button onClick={() => dispatch("subtract")}>Decrement</button>
            <button onClick={() => dispatch("reset")}>Reset</button>
        </div>
    );
};

export default Arithmetic;
