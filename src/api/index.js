import axios from "axios";

const fetchWeather = (city) => {
    const key = `87c7ccaf6a647051cd843b17300c500a`;
    const api = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;

    axios.get(api).then( ({data : {weather : [{description, icon}], main : {temp, temp_max, temp_min}, wind : {speed}, sys : {sunrise, sunset}}}) => {
        console.log(description, icon, temp, temp_max, temp_min, speed, sunrise, sunset);
        return { description, icon, temp, temp_max, temp_min, speed, sunrise, sunset };
    })
    .catch(err => {
        console.error(err);
    });

};

export default fetchWeather;