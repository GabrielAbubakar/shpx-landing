import React from "react";
import './App.scss';
import MainSection from "./sections/mainSection/mainSection";
import Products from "./sections/products/products";
import Quotation from "./sections/quotation/quotation";
import Showcase from "./sections/showcase/showcase";


const App = () => {

    return (

        <div className="App-container">
            <div className="App">
                <MainSection />
                <Products />
                
                
                <Showcase />
                <Quotation />


            </div>
            <div className="mobile">
                    <p>
                        This site is inactive on <b>mobile</b>. Please switch to a <b>desktop</b> to view.
                    </p>
            </div>
        </div>
    )
}

export default App;