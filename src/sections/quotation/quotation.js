import React from "react";
import './quotation.scss';


const Quotation = () => {

    return (
        <section className="quotation container">
            <h1>Get your quotation today</h1>
            <div className="button">
                <p className="button_quote">
                    Quote me
                </p>
                <p className="button_sales">
                    Contact Sales
                </p>
            </div>
        </section>
    )
}

export default Quotation