import React from "react";

export const Mon=({title,city,url})=>{
    const handleTitle=()=>{
        alert(`Thanks for visitng to ${title}!`)
    }
    const handleCity=()=>{
        alert(`${city} is Awesome place for Tourist !!`)
    }
    return(
        <div className="sub">
            <h3 onClick={handleTitle}>{title} </h3>
            <h4 onClick={handleCity}>{city}</h4>
            <img src={`img/${url}.jpg`} alt="" />
        </div>
    );
}