function FavoriteCard({data,cityName}) {

    return (
        <div className="favoriteCard">
            <h3 className="favoriteCard__title">{cityName}</h3>
            <div className="favoriteCard__temp">{Math.floor(data.temp)}&#8451;</div>
            <div className="favoriteCard__content-feels"><p>Ощущается как</p>{Math.floor(data.feels_like)}&#8451;</div>
            <div className="favoriteCard__content-humidity"><p>Влажность</p>{data.humidity}%</div>
            <div className="favoriteCard__content-pressure"><p>Давление</p>{data.pressure}</div>
        </div>
    )
}

export default FavoriteCard;