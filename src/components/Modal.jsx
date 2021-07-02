import React, {useState, useEffect} from "react";

function Modal({weather, city, active, setActive}) {

    const addFavorite = () => {
        const cashedData = localStorage.getItem('favorite')
        localStorage.setItem("favorite", cashedData?cashedData + ' ' + city:city)

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

    const weatherData = {
        temp: weather.temp,
        feels_like: weather.feels_like,
        humidity: weather.humidity,
        pressure: weather.pressure
    }

    const {temp, feels_like, humidity, pressure} = weatherData;

    return (
        <div>
            <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
                <div className="modal__content">
                    <div className="modal__content-close" onClick={() => setActive(false)}>x</div>
                    <h2 className="modal__title">{city}</h2>
                    <div className="modal__text">
                        <div className="modal__content-temp"><p>Температура</p>{temp}&#8451;</div>
                        <div className="modal__content-feels"><p>Ощущается как</p>{feels_like}&#8451;</div>
                        <div className="modal__content-humidity"><p>Влажность</p>{humidity}%</div>
                        <div className="modal__content-temp"><p>Давление</p>{pressure}</div>
                    </div>
                    <div className="modal__add" onClick={() => addFavorite()}>Добавить в избранное</div>
                </div>
            </div>
        </div>
    )
}

export default Modal;