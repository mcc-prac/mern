import React from 'react';

class User extends React.Component {
    componentWillUnmount() {
        alert('User Deleted successfully');
    }

    render() {
        return (
            <div>
                <h3>UserName: Rahul</h3>
                <h3>Email: rahul@gmail.com</h3>
            </div>
        );
    }
}

class Unmount extends React.Component {
    constructor() {
        super();
        this.state = {
            delete: false,
        };
    }

    render() {
        return (
            <div>
                <h1>User List</h1>
                <button onClick={() => this.setState({ delete: !this.state.delete })}>
                    Delete users
                </button>
                {this.state.delete ? null : <User />}
            </div>
        );
    }
}

export default Unmount;
