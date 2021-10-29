import React from "react";
import './productCard.scss';
import Molle from '../../assets/molle.png'


const ProductCard = () => {
    return(
        <div className="product_card">
            <h2>Chaise Molle</h2>
            <h3>S18.00</h3>

            <figure>
                <img src={Molle} alt="molle" />
            </figure>
        </div>
    )
}

export default ProductCard;