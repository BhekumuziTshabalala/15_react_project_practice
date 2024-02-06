import './card.css'

function Card(props) {
    const style = {
        width: 150, // set the width of the div
        height: 150, // set the height of the div
        borderRadius: "50%", // make the div a circle
        backgroundImage: `url(${props.review.image})`, // set the background image to the image url
        backgroundSize: "cover", // resize the image to cover the div
        backgroundPosition: "center" // center the image in the div
      };

    return (
        <div className="container">
            <div style={style} id="image" ></div>
            <h2 id="name" >{props.review.name}  </h2>
            <p id='job' >{props.review.job}</p>
            <p id= "text" >{props.review.text}</p>

            <div id='buttons'>
                <button type='btn' value='<' onClick={ () =>props.change(-1)}> {' < '} </button> 
                <button type='btn' value='>'  onClick={() => props.change(1)}>{' > '} </button>
            </div>
            
            <input type='button' value= "suprise me" onClick={() => props.suprise()}/>
        </div>
    )

    
}

export default Card;
