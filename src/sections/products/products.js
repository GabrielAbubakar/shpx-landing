import React from "react";
import ProductCard from "../../components/productCard/productCard";
import Tabs from "../../components/tabs/tabs";
import './products.scss';
//import '../../components/productCard/productCard.scss'
import Data from '../../components/Data';


const Products = () => {

    return (
        <section className="products container">
            <h1>Products</h1>
            <Tabs />

            <div className="products_items">
                {/* <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard /> */}

                {/* {
                    Data.map((item) => {
                        return <div className="product_card" key={item.id}>
                            <h2>{item.title}</h2>
                            <h3>{item.price}$</h3>

                            <figure>
                                <img src={item.image} alt={item.image} />
                            </figure>
                        </div>
                    })
                } */}

                {
                    Data.map((item) => {
                        return (
                            <ProductCard key={item.id} 
                                        title={item.title} 
                                        price={`${"$"}${item.price}`} 
                                        image={item.image} />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Products;