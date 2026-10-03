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
            </p>
            <employeeContext.Provider value={employee}>
                <Employee />
                <Salary />
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

export default ParentP6;
