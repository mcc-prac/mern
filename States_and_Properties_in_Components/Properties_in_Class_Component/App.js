import React from "react";
import { Parent, Child } from "./component/P2aClassprop";

function App() {
    return (
        <div>
            <Parent address="qwerty" />
            <Child />
        </div>
    );
}

export default App;
