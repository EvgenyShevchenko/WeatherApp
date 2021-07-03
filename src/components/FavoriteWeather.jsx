import React, {useState, useEffect} from "react";
import axios from "axios";
import FavoriteCard from "./FavoriteCard";

function FavoriteWeather({favoriteCity, apiKey, city}) {

    const [resFavorite, setResFavorite] = useState([]);

    useEffect(() => {
        if (favoriteCity) {
            let request = favoriteCity
                .map(city => fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
                )
            Promise.all(request)
                .then((responses) => {
                    return responses
                })
                .then(responses => Promise.all(responses.map(r => r.json())))
                .then(weatherFavorite => setResFavorite(weatherFavorite))
        }
    }, [favoriteCity])

    return (
        <div className="favoriteWeather">
            {resFavorite
                ? resFavorite.map((data, i) => {
                        return (
                            <FavoriteCard key={i + data}
                                          city={favoriteCity}
                                          data={data.main}
                                          cityName={city}
                            />
                        )
                    }
                ) : null
            }
        </div>

    )

}

export default FavoriteWeather;
