import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import './app.css'
import Loading from "./components/loading";
import Tours from "./components/tours";

const apiUrl = "https://course-api.com/react-tours-project";

export default function App(){
    const [loading,setLoading] = useState(true);
    const [tours,setTours] = useState([])

    const removeTour = (id) => {
        const newTours = tours.filter((tour) => tour.id !== id );
        setTours(newTours);
      

    }

    const fetchTours = async  ()=>{
        try{
            const result = await fetch(apiUrl);
            const tours = await result.json();
            setTours(tours);
            setLoading(false);

        }catch(error){
            setLoading(false)
        }
        
    }

    useEffect(() =>{
        fetchTours();
    },[])
    

    if (loading){
        return (<main><Loading/> </main>)
    }else{  
        return (
            <main>
                <h1 className="text">Our Tours</h1>
                <div className="cards">
                {
                    tours.map((tour) => {
                        return(<Tours tour ={tour} removeTour={removeTour}/>) 
                    })
                }
                </div> 
            </main>
        )
    }


   
}