import React, { useState } from "react";
import './tours.css'

export default function Tours(props){
    const {id,name,image,info,price} = props.tour;
    const [more, setMore] = useState(true); 

    return(
       
        <article key={id} className="card">
            <div className="image-div">
                <img id="image" src={image}  alt="image if the villa"/>
                <h4 id="price">R {price}</h4>
            </div>

            <div>
                <h2 id="name" >{name}</h2>
                <p id="info" >{more ? info.substring(0,200)  : info } 
                <input id="showMore"  type="button" value={more ? "...Show More" : "Show Less"} 
                    onClick={ () => setMore(!more)}
                />
                </p> 
            </div>

            <input id="remove" type="button" value="Not interested" 
                onClick={ () => props.removeTour(id)}
            />
        </article>
          
    )
}