import React, { useEffect, useRef } from "react";
import "./Stars.scss";
import { ready } from "./StartsParallax";

const Stars = ({ qntd, rotation }) => {
    const refCanvas = useRef(null);


    useEffect(() => {
        console.log(refCanvas)
        ready(refCanvas.current)
    }, [])

    return (
        <section
            className="sky"
    
            
            >
            {/* {[...Array(qntd || 100).keys()].map(i => (
                <span key={i} className="star">
                    ✦
                </span>
            ))} */}

            <canvas
                id="stars"
                ref={refCanvas}
              
            />
        </section>
    );
};

export default Stars;
