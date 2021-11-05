import React from "react";
import './productCard.scss';
import Molle from '../../assets/molle.png'


const ProductCard = (props) => {
    return(
        // <div className="product_card">
        //     <h2>Chaise Molle</h2>
        //     <h3>S18.00</h3>

        //     <figure>
        //         <img src={Molle} alt="molle" />
        //     </figure>
        // </div>
        <div className="product_card" key={props.key}>
            <h2>{props.title}</h2>
            <h3>{props.price}</h3>

            <figure>
                <img src={props.image} alt={props.image} />
            </figure>
        </div>
    )
}

export default ProductCard;