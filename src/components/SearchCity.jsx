import React, {useState, useEffect} from "react";
import axios from "axios";
import Modal from "./Modal";
import FavoriteWeather from "./FavoriteWeather";

function SearchCity() {

    const [city, setCity] = useState("")
    const [weather, setWeather] = useState({})
    const [modalActive, setModalActive] = useState(false)
    const [favoriteCity, setFavoriteCity] = useState([])

    const apiKey = "432e0e516b136001af816e0e90e80ca2"

    const favoriteCities = localStorage.getItem('favorite')
    const citiesArr = favoriteCities.split(' ')


    useEffect(() => {
        setFavoriteCity(citiesArr)
    }, [])

    const searchWeather = e => {
        if (e.key === 'Enter') {
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
                .then(({data}) => setWeather(data.main))
            setModalActive(true)
            e.stopPropagation();
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
            <Modal
                weather={weather}
                active={modalActive}
                setActive={setModalActive}
                city={city}
            />
            <FavoriteWeather favoriteCity={favoriteCity} apiKey={apiKey}/>
        </div>
    )
}

export default SearchCity;