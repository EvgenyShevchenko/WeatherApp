function FavoriteCard({data,cityName}) {
console.log(data)
    return (
        <div className="favoriteCard">
            <h3 className="favoriteCard__title">{Math.floor(data.temp)}&#8451;</h3>
        </div>
    )
}

export default FavoriteCard;