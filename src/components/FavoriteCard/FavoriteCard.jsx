function FavoriteCard({data, cityName}) {

    return (
        <div className="favoriteCard">
            <h3 className="favoriteCard__title">{cityName}</h3>
            <div className="favoriteCard__temp">{Math.floor(data.temp)}&#8451;</div>
            <div className="favoriteCard__content-feels"><p>Feels_like: </p><b>{Math.floor(data.feels_like)}&#8451;</b></div>
            <div className="favoriteCard__content-humidity"><p>Humidity: </p><b>{data.humidity}%</b></div>
            <div className="favoriteCard__content-pressure"><p>Pressure: </p><b>{data.pressure}</b></div>
        </div>
    )
}

export default FavoriteCard;