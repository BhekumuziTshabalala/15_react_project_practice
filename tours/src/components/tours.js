import React from "react";
import './tours.css'

export default function Tours(props){
    return(
        <div className="header">
             <h1 id="text">Our Tours</h1>
             <div className="cards">
                {
                    props.tours.map((tour) => {
                        const {id,name,image,info,price} = tour;

                        return (
                            <article key={id} className="card">
                                <div className="image-div">
                                    <img id="image" src={image}  alt="image if the villa"/>
                                    <h4 id="price" >R {price}</h4>
                                </div>

                                <div>
                                    <h2 id="name" >{name}</h2>
                                    <p id="info" >{info}</p> 
                                </div>
                            </article>
                        )

                    })
                }
             </div>

        </div>
       
    )
}