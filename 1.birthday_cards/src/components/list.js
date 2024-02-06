import React from "react"
import './list.css' 

export const List = ({people}) => {
    return (
        <>
            {people.map((person) => {
                const {id,name,age ,image} = person;

                const style = {
                    width: 50, // set the width of the div
                    height: 50, // set the height of the div
                    borderRadius: "50%", // make the div a circle
                    backgroundImage: `url(${image})`, // set the background image to the image url
                    backgroundSize: "cover", // resize the image to cover the div
                    backgroundPosition: "center" // center the image in the div
                  };

                return(
                    <article key={id} className="cards">
                        <div className="image" style={style}/>
                        
                        <div className="user_info">
                            <h4 id="info">{name}</h4>
                            <p id="info">{age}</p>
                        </div>
                    </article>
                )
        })}
        
        </>
    ) 


}