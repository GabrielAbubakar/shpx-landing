import React from "react";
import ProductCard from "../../components/productCard/productCard";
import Tabs from "../../components/tabs/tabs";
import './products.scss';


const Products = () => {

    return (
        <section className="products container">
            <h1>Products</h1>
            <Tabs />

            <div className="products_items">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </section>
    )
}

export default Products;