import React, {useState, useEffect} from "react";
import FavoriteCard from "../FavoriteCard/FavoriteCard";
import getWeather from "../../api/weather";

interface FavoriteWeatherProps {
    favoriteCity: string[]
}

type ResFavoriteState = {
    main: any,
    name: string
}[]

const FavoriteWeather: React.FC<FavoriteWeatherProps> = ({favoriteCity}) => {

    const [resFavorite, setResFavorite] = useState<ResFavoriteState>([]);

    useEffect(() => {
        if (favoriteCity) {
            let request = favoriteCity
                .map((city) => getWeather(city)
                )
            Promise.all(request)
                .then((responses) => {
                    setResFavorite(responses)
                })
        }
    }, [favoriteCity])

    return (
        <div className="favoriteWeather">
            {resFavorite.length !== 0
                ? resFavorite.map((obj, i) => {
                        return (
                            <FavoriteCard key={i}
                                          data={obj.main}
                                          cityName={obj.name}
                            />
                        )
                    }
                ) : <div className="favoriteWeather__noData">Данные загружаются из избранного...</div>
            }
        </div>
    )
}

export default FavoriteWeather;
