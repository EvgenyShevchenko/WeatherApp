import React, {useState, useEffect} from "react";
import axios from "axios";
import FavoriteCard from "./FavoriteCard";

function FavoriteWeather({favoriteCity, apiKey}) {

    const [resFavorite, setResFavorite] = useState([]);

    useEffect(() => {
        favoriteCity
            .map(city => axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
                .then(({data}) => setResFavorite(data.main))
            )

    }, [])


    return (
        <div className="favoriteWeather">
            <div className="favoriteWeather__content">
                {favoriteCity.map(city =>
                    <FavoriteCard resFavorite={resFavorite}/>
                )}
            </div>
        </div>
    )
}

export default FavoriteWeather;
