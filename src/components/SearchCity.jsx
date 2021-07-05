import  {useState, useEffect} from "react";
import axios from "axios";
import Modal from "./Modal";
import FavoriteWeather from "./FavoriteWeather";
import ChangeMode from "./ChangeMode";
import SavedCity from "./SavedCity";

function SearchCity() {

    const [city, setCity] = useState("")
    const [weather, setWeather] = useState({})
    const [modalActive, setModalActive] = useState(false)
    const [favoriteCity, setFavoriteCity] = useState([])
    const [changeMode,setChangeMode] = useState(true)
    const apiKey = "432e0e516b136001af816e0e90e80ca2"

    const favoriteCities = localStorage.getItem('favorite')
    const citiesArr = favoriteCities ? favoriteCities.slice(1).split(' ') : favoriteCities


    useEffect(() => {
        setFavoriteCity(citiesArr)
    }, [])


    const searchWeather = e => {
        if (e.key === 'Enter') {
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
                .then(({data}) => setWeather(data.main))
            setModalActive(true)
            e.target.blur()
        }
    }

    const toggleChangeMode = () => {
        setChangeMode(!changeMode);
    };

    console.log(changeMode)
    return (
        <div className="search-wrapper">
            <span className="search-label">
               Search City
            </span>
            <ChangeMode changeMode={setChangeMode} toggleChangeMode={toggleChangeMode} />
            <input type="text" className="search-input"
                   value={city}
                   onChange={(e) => setCity(e.target.value)}
                   onKeyPress={searchWeather}
                   placeholder='Enter the city. Example: London'/>
            <Modal
                weather={weather}
                active={modalActive}
                setActive={setModalActive}
                city={city}
            />
            {changeMode? <FavoriteWeather favoriteCity={favoriteCity} apiKey={apiKey} city={city}/>: <SavedCity apiKey={apiKey} />}
        </div>
    )
}

export default SearchCity;