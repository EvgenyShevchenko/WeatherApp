import React, {useState, useEffect} from "react";
import axios from "axios";
import FavoriteCard from "./FavoriteCard";

function FavoriteWeather({favoriteCity, apiKey, city}) {

    const [resFavorite, setResFavorite] = useState([]);

    useEffect(() => {
        if (favoriteCity) {
            let request = favoriteCity
                .map(city => axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
                )
            Promise.all(request)
                .then((responses) => {
                    setResFavorite(responses)
                })
                .catch(res => alert('ошибка запроса введите данные в формате EN:"London"'))
        }
    }, [favoriteCity])

    console.log(resFavorite)
    return (
        <div className="favoriteWeather">
            {resFavorite
                ? resFavorite.map((obj, i) => {
                        return (
                            <FavoriteCard key={i + obj.data}
                                          data={obj.data.main}
                                          cityName={obj.data.name}
                            />
                        )
                    }
                ) : null
            }
        </div>

    )

}

export default FavoriteWeather;
