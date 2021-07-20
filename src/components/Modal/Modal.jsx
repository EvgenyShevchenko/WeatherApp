import React, {useEffect} from "react";

function Modal({weather, city, active, setActive, error}) {

    const addFavorite = () => {
        const cashedData = localStorage.getItem('favorite') || ''
        if (!cashedData.includes(city)) {
            localStorage.setItem("favorite", cashedData + ' ' + city)
        }
    }

    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.keyCode === 27) {
                setActive(false)
            }
        }

        document.addEventListener('keydown', (e) => handleKeyPress(e))
        return () => document.removeEventListener('keypress', (e) => handleKeyPress(e))

    }, [])

    const handlerModalClose = () => {
        setActive(false)
    }

    const weatherData = {
        temp: weather.temp,
        feels_like: weather.feels_like,
        humidity: weather.humidity,
        pressure: weather.pressure
    }

    const {temp, feels_like, humidity, pressure} = weatherData;

    return (
        <div>
            {error ? <div className="modal__error">"Ошибка запроса"</div> :
                <div className={active ? "modal active" : "modal"} onClick={handlerModalClose}>
                    <div className="modal__content">
                        <div className="modal__content-close" onClick={handlerModalClose}>x</div>
                        <h2 className="modal__title">{city}</h2>
                        <div className="modal__text">
                            <div className="modal__content-temp"><p>Температура</p><b>{Math.floor(temp)}&#8451;</b>
                            </div>
                            <div className="modal__content-feels"><p>Ощущается как</p>
                                <b>{Math.floor(feels_like)}&#8451;</b></div>
                            <div className="modal__content-humidity"><p>Влажность</p><b>{humidity}%</b></div>
                            <div className="modal__content-pressure"><p>Давление</p><b>{pressure}</b></div>
                        </div>
                        <div className="modal__add" onClick={() => addFavorite()}>Добавить в избранное</div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Modal;