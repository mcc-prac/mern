import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Navbar from "./Navbar";
import Products from "./Products";
import Error from "./Error";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route path="LH44" element={<h2>Welcome to LH44 Child Route</h2>} />
                    <Route path="cl16" element={<h2>Welcome to CL16 Child Route</h2>} />
                </Route>
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/products" element={<Products />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
