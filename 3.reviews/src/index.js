import React, { useState } from "react";
import './index.css';
import Card from "./components/card";
import  ReactDOM  from "react-dom";
import data from "./data";


const App = () => {
    const [profileIndex,setProfileIndex] = useState(0);
    const review = data[profileIndex];

    const change = (num) =>{
        var newIndex = 0;
        if (num === -1){
            newIndex = (profileIndex === 0 ? data.length - 1 : profileIndex - 1);
        } else {
            newIndex = (profileIndex === data.length - 1 ? 0 : profileIndex + 1);
        }
        setProfileIndex(newIndex);
    }

    const suprise = ()=> {
        setProfileIndex(Math.floor(Math.random() * (data.length -1 - 0 + 1)) + 0);

    }

    return(
        <main className="main">
            {/* <h1 id="header" >Reviews</h1> */}
            <Card review = {review} change = {change} suprise={suprise}/>
        </main> )
}

ReactDOM.render(<App/>,
    document.getElementById("root"));
