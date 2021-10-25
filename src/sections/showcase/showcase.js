import React from "react";
import showcase from '../../assets/image 2.jpg'
import './showcase.scss';


const Showcase = () => {

    return (
        <section className="showcase container">
            <figure>
                <img src={showcase} alt="showcase" />
            </figure>
            <div className="content">
                <h1>Showcase</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, eleifend viverra nam libero tellus. Luctus ornare ac, dolor tempor pellentesque nec. 
                </p>
                <div className="icons">
                    <span>
                        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="70" height="70" fill="#FAF4EF" fill-opacity="0.5"/><path d="M14.9393 33.9393C14.3536 34.5251 14.3536 35.4749 14.9393 36.0607L24.4853 45.6066C25.0711 46.1924 26.0208 46.1924 26.6066 45.6066C27.1924 45.0208 27.1924 44.0711 26.6066 43.4853L18.1213 35L26.6066 26.5147C27.1924 25.9289 27.1924 24.9792 26.6066 24.3934C26.0208 23.8076 25.0711 23.8076 24.4853 24.3934L14.9393 33.9393ZM53 33.5L16 33.5L16 36.5L53 36.5L53 33.5Z" fill="#4B4B4B" fill-opacity="0.5"/></svg>
                    </span>
                    <span>
                            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="70" height="70" fill="#FAF4EF"/><path d="M54.0607 33.9393C54.6464 34.5251 54.6464 35.4749 54.0607 36.0607L44.5147 45.6066C43.9289 46.1924 42.9792 46.1924 42.3934 45.6066C41.8076 45.0208 41.8076 44.0711 42.3934 43.4853L50.8787 35L42.3934 26.5147C41.8076 25.9289 41.8076 24.9792 42.3934 24.3934C42.9792 23.8076 43.9289 23.8076 44.5147 24.3934L54.0607 33.9393ZM16 33.5L53 33.5L53 36.5L16 36.5L16 33.5Z" fill="#4B4B4B"/>
                            </svg>
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Showcase;