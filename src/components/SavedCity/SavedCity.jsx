import FavoriteCard from "../FavoriteCard/FavoriteCard";
import {useEffect, useState} from "react";
import getWeather from "../../api/weather";

function SavedCity({apiKey}) {
    const [data, setData] = useState([])
    const savedCity = require('../savedcities.json')

    useEffect(() => {
        if (savedCity) {
            let request = savedCity
                .map(city => getWeather(city)
                )
            Promise.all(request)
                .then((responses) => {
                    setData(responses)
                })
        }
    }, [])

    return (
        <div className="favoriteWeather">
            {data.map((obj, i) => <FavoriteCard key={i}
                                                data={obj.main}
                                                cityName={obj.name}/>
            )
            }
        </div>
    )
}

export default SavedCity;