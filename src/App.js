import React from "react";
import SearchCity from "./components/SearchCity";
import './scss/app.scss';
import axios from "axios";


function App() {


    return (
        <div className="wrapper">
            <h1 className="title">
                Weather App
            </h1>
            <SearchCity/>
        </div>
    );
}

export default App;
