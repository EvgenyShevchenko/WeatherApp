import {useState, useEffect} from "react";
import Modal from "../Modal/Modal";
import FavoriteWeather from "../FavoriteWeather/FavoriteWeather";
import ChangeMode from "../ChangeMode/ChangeMode";
import SavedCity from "../SavedCity/SavedCity";
import getWeather from "../../api/weather";

const SearchCity: React.FC = () => {

    const [city, setCity] = useState("")
    const [weather, setWeather] = useState({})
    const [modalActive, setModalActive] = useState(false)
    const [favoriteCity, setFavoriteCity] = useState<string[] | string>([])
    const [changeMode, setChangeMode] = useState(true)
    const [cityRes, setCityRes] = useState("")
    const [error, setError] = useState(false)
    const favoriteCities = localStorage.getItem('favorite')
    const citiesArr = favoriteCities ? favoriteCities.slice(1).split(' ') : ""

    useEffect(() => {
        setFavoriteCity(citiesArr)
    }, [])

    const searchWeather = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            getWeather(city)
                .then(res => {
                        if (res) {
                            setWeather(res.main)
                            setCityRes(res.name)
                        } else {
                            setError(true)
                        }
                    }
                )
            setModalActive(true);
            (e.target as HTMLInputElement).blur()
        }
    }

    const toggleChangeMode = () => {
        setChangeMode(!changeMode);
    };

    return (
        <div className="search-wrapper">
            <span className="search-label">
               Search City
            </span>
            <ChangeMode toggleChangeMode={toggleChangeMode}/>
            <input type="text" className="search-input"
                   value={city}
                   onChange={(e) => setCity(e.target.value)}
                   onKeyPress={(e) => searchWeather(e)}
                   placeholder='Enter the city. Example: London'/>
            <Modal
                weather={weather}
                active={modalActive}
                setActive={setModalActive}
                city={cityRes}
                error={error}
            />
            {changeMode ?
                <FavoriteWeather favoriteCity={favoriteCity as string[]}/>
                :
                <SavedCity/>
            }
        </div>
    )
}

export default SearchCity;