import React, { useState, useContext } from 'react';

const employeeContext = React.createContext();

function ParentP6() {
    const [employee, setEmployee] = useState({
        id: 101,
        Name: 'Bible',
        Location: 'Mumbai',
        Salary: 12345
    });

    return (
        <div>
            <h2>Parent Component....</h2>
            <p>
                Employee <br />
                Salary <br />
                Location <br />
                Welcome <br />
            </p>
            <employeeContext.Provider value={employee}>
                <Employee />
                <Salary />
                <Location />
                <Welcome />
            </employeeContext.Provider>
        </div>
    );
}

// Component 2 - uses Context
function Employee() {
    const context = useContext(employeeContext);
    return (
        <div>
            <h2>Employee Component.....</h2>
            <p>Employee ID: <b>{context.id}</b></p>
            <p>Employee Name: <b>{context.Name}</b></p>
        </div>
    );
}

// Component 3 - uses Context
function Salary() {
    const context = useContext(employeeContext);
    return (
        <div>
            <h2>Salary Component.....</h2>
            <p>Employee ID: <b>{context.id}</b></p>
            <p>Employee Salary: <b>{context.Salary}</b></p>
        </div>
    );
}

// Component 4 - does NOT use Context
function Location() {
    return (
        <div>
            <h2>Location Component</h2>
            <p>Employee works in Mumbai</p>
        </div>
    );
}

// Component 5 - does NOT use Context
function Welcome() {
    return (
        <div>
            <h2>Welcome Component</h2>
            <p>Welcome to the company!</p>
        </div>
    );
}

export default ParentP6;
