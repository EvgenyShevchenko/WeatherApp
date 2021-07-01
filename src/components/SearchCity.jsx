import React, {useState} from "react";
import axios from "axios";

function SearchCity() {

    const [city, setCity] = useState("")
    const [weather, setWeather] = useState("")
    const apiKey = "432e0e516b136001af816e0e90e80ca2"
    
    console.log(weather)


    const searchWeather = e => {
        if (e.key === 'Enter') {
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
                .then(({data}) => setWeather(data))
        }
    }

    return (
        <div className="search-wrapper">
            <span className="search-label">
               Search City
            </span>
            <input type="text" className="search-input" value={city}
                   onChange={(e) => setCity(e.target.value)}
                   onKeyPress={searchWeather}/>
        </div>
    )
}

export default SearchCity;