import React from "react";
import { useState } from "react";
import ProductCard from "../../components/productCard/productCard";
//import Tabs from "../../components/tabs/tabs";
import './products.scss';
//import '../../components/productCard/productCard.scss'
import Chair from '../../assets/chair.png';
import Desk from '../../assets/desk.png';
import Comfort from '../../assets/comfort-chair.png';
import Lamp from '../../assets/lamp.png';
import Sofa from '../../assets/sofa.png';
import Molle from '../../assets/molle.png';


const Products = () => {

    //Data
    const data = [

        {
            id: 1,
            title: 'Chaise Molle',
            price: 20.00,
            image: Molle,
            type: "chair"
        },
        {
            id: 2,
            title: 'Chaise Dolle',
            price: 20.00,
            image: Comfort,
            type: "chair"
        },
        {
            id: 3,
            title: 'Chaise Folle',
            price: 20.00,
            image: Lamp,
            type: "lamp"
        },
        {
            id: 4,
            title: 'Chaise Bolle',
            price: 20.00,
            image: Sofa,
            type: "sofa"
        },
        {
            id: 5,
            title: 'Chaise Solle',
            price: 20.00,
            image: Desk,
            type: "table"
        },
        {
            id: 6,
            title: 'Chaise Polle',
            price: 20.00,
            image: Chair,
            type: "chair"
        }
    ]

    const [items, setItems] = useState(data);

    function filter(e) {
        let filteredItems = data.filter((item) => {
            return e.target.value.toLowerCase().includes(item.type)
        })
        
        setItems(filteredItems)
    }

    function filterAll() {
        let filteredItems = data
        setItems(filteredItems)
    }
    
    return (
        <section className="products container">
            <h1>Products</h1>
            
            <div className="tabs">

                <input type="button" value="All" onClick={filterAll}/>
                <input type="button" value="Lamp" onClick={filter}/>
                <input type="button" value="Chair" onClick={filter}/>
                <input type="button" value="Table" onClick={filter}/>
                <input type="button" value="Sofa" onClick={filter}/>
                
            </div>

            <div className="products_items">

                {
                    items.map((item) => {
                        return (
                            <ProductCard key={item.id} 
                                        title={item.title} 
                                        price={`${"$"}${item.price}`} 
                                        image={item.image} />
                        )
                    })
                }
                

                {/* {
                    items.map((item) => {
                        return <div className="product_card" key={item.id}>
                            <h2>{item.title}</h2>
                            <h3>{item.price}$</h3>

                            <figure>
                                <img src={item.image} alt={item.image} />
                            </figure>
                        </div>
                    })
                } */}


            </div>
        </section>
    )
}

export default Products;