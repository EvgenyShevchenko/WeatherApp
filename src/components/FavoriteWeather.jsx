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

    console.log(resFavorite)

    return (
        <div className="favoriteWeather">
            <div className="favoriteWeather__content">
                {resFavorite ? resFavorite.map((data, i) =>
                    <FavoriteCard key={i + data} city={favoriteCity} {...data}/>
                ) : resFavorite}
            </div>
        </div>
    )

}

export default FavoriteWeather;
