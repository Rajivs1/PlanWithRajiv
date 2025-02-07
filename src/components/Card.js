import React, { useState } from "react";

function Card({ id, image, info, price, name, removeTour }) {
    const [readmore, setReadmore] = useState(false);

    // Ensure info is not undefined before calling substring
    const description = readmore ? info : `${info.substring(0, 150)}....`;

    // Toggle between read more & show less
    function readmoreHandler() {
        setReadmore(!readmore);
    }

    return (
        <div className="card">
            <img src={image} className="image" alt="tour-img" />
            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price"> ₹{price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>
                <div className="description">
                    {readmore ? info : description}
                    <span className="read-more" onClick={readmoreHandler}>
                        {readmore ? ` Show Less` : ` Read More`}
                    </span>
                </div>
            </div>
            <button className="btn-red" onClick={() => removeTour(id)}>
                Not Interested
            </button>
            
        </div>
    );
}

export default Card;
