import apiClient from "./api";

const getWeather = async (city) => {
    const apiKey = "432e0e516b136001af816e0e90e80ca2"
    try {
        const response = await apiClient.get(
            `weather?q=${city}&units=metric&appid=${apiKey}`
        )
        return response.data
    } catch (error) {
        console.log('error')
    }
}
export default getWeather