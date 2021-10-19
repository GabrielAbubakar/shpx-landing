import React from "react";
import './App.scss';
import Navbar from "./components/navbar/navbar";
import MainSection from "./sections/mainSection/mainSection";
import Products from "./sections/products/products";


const App = () => {

    return (

        <div className="App">
            <MainSection />
            <Products />

        </div>
    )
}

export default App;