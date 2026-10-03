import React from 'react';
import { Link, Outlet } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>This is the Home Page</h1>
            <nav>
                <Link to="LH44">LH44</Link> {" "}
                <Link to="cl16">cl16</Link>
            </nav>
            <Outlet />
        </div>
    );
}

export default Home;
