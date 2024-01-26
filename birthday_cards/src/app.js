import React, {useState} from "react";
import data from "./data";
import './app.css';
import { List } from "./components/list";


export function App(){
    const [people,setPeople] = useState(data);

    return (
        <div className="app">
            <section className="container">
                <h3> {people.length} Birthdays today</h3>
                <List people={people}/>
                <input type="button" value ="Clear all" className="button"
                         onClick={() => setPeople([])} />
            </section>
        </div>
    );
}

