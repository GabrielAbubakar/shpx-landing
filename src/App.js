import React from "react";
import './App.scss';
import MainSection from "./sections/mainSection/mainSection";
import Products from "./sections/products/products";
import Quotation from "./sections/quotation/quotation";
import Showcase from "./sections/showcase/showcase";


const App = () => {

    return (

        <div className="App">
            <MainSection />
            <Products />
            
            <Showcase />
            <Quotation />

        </div>
    )
}

export default App;