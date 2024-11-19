import React from "react";
import './CardComponent.css';

const CardComponent = () => {
    return (
        <div className="card">
            <img src="Java.png" alt="Card Image" className="card-image" />
            <div className="card-content">
                <h2 className="card-title">Welcome to Java world</h2>
                <p className="card-description">Java is a programming language and a platform.
                    Java is a high level, robust, object-oriented and secure programming language.
                    Java was developed by Sun Microsystems (which is now the subsidiary of Oracle) in the year 1995.
                    James Gosling is known as the father of Java.
                    Before Java, its name was Oak. Since Oak was already a registered company,
                    so James Gosling and his team changed the name from Oak to Java.</p>
                <button className="card-button">Learn More</button>
            </div>
        </div>
    );
};

export default CardComponent;