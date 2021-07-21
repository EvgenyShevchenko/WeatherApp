import FavoriteCard from "../FavoriteCard/FavoriteCard";
import {useEffect, useState} from "react";
import getWeather from "../../api/weather";


interface FavoriteCardProps {
    main: {
        feels_like: number
        humidity: number
        pressure: number
        temp: number
    }
    name: string
}

const SavedCity: React.FC = () => {
    const [data, setData] = useState([])
    const savedCity = require('../savedcities.json')

    useEffect(() => {
        if (savedCity) {
            let request = savedCity
                .map((city: string) => getWeather(city)
                )
            Promise.all(request)
                .then((responses: any) => {
                    setData(responses)
                })
        }
    }, [])

    return (
        <div className="favoriteWeather">
            {data.map((obj: FavoriteCardProps, i) =>
                <FavoriteCard key={i}
                              data={obj.main}
                              cityName={obj.name}/>
            )
            }
        </div>
    )
}

export default SavedCity;