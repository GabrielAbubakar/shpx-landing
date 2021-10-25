import React from "react";
import './App.scss';
import MainSection from "./sections/mainSection/mainSection";
import Products from "./sections/products/products";
import Showcase from "./sections/showcase/showcase";


const App = () => {

    return (

        <div className="App">
            <MainSection />
            <Products />

            <Showcase />

        </div>
    )
}

export default App;