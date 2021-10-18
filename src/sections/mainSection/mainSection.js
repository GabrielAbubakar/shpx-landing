import React from "react";
import Navbar from "../../components/navbar/navbar";
import './mainSection.scss';
import Hero from '../../assets/background-img.jpg'


const MainSection = () => {

    return (
        <div className="main-section container">

            <Navbar />
            <div className="hero_section">

                <div className="hero_content">
                    <h1>Modern Interior <br /> for your <br /> Dream House</h1>
                    <p>
                        We custom make design to suits your needs.
                    </p>
                </div>
                <figure>
                    <img src={Hero} alt="hero-image" />
                </figure>

            </div>

            
        </div>
    )
}

export default MainSection;