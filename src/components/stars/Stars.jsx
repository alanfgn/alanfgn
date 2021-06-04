import React from "react";
import "./Stars.scss";

const Stars = ({ qntd, rotation }) => {
    return (
        <section
            className="sky"
            style={{
                transform: `rotate(${rotation}deg)`,
            }}>
            {[...Array(qntd || 80).keys()].map(i => (
                <span key={i} className="star">
                    ✦
                </span>
            ))}
        </section>
    );
};

export default Stars;
