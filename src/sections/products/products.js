import React from "react";
import Tabs from "../../components/tabs/tabs";
import './products.scss';


const Products = () => {

    return (
        <section className="products container">
            <h1>Products</h1>
            <Tabs />

            <div className="products_items">
                
            </div>
        </section>
    )
}

export default Products;