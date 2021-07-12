import FavoriteCard from "../FavoriteCard/FavoriteCard";
import axios from "axios";
import {useEffect, useState} from "react";

function SavedCity({apiKey}) {
    const [data, setData] = useState([])
    const savedCity = require('../savedcities.json')

    useEffect(() => {
        if (savedCity) {
            let request = savedCity
                .map(city => axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
                )
            Promise.all(request)
                .then((responses) => {
                    setData(responses)
                })
        }
    }, [])


    return (
        <div className="favoriteWeather">
            {data.map((obj, i) => <FavoriteCard key={i + obj.data}
                                                data={obj.data.main}
                                                cityName={obj.data.name}/>
            )
            }
        </div>
    )
}

export default SavedCity;