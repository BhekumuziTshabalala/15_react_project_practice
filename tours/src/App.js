import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Loading from "./components/loading";
import Tours from "./components/tours";

const apiUrl = "https://course-api.com/react-tours-project";

export default function App(){
    const [loading,setLoading] = useState(true);
    const [tours,setTours] = useState([])

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
    })
    
    if (loading){
        return (<main><Loading/> </main>)
    }else{
        return (<main>
            <Tours tours={tours}/>
        </main>)
    }


   
}