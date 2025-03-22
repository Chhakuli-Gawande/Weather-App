import { useState } from "react";
import InfoWeather from "./InfoWeather";
import SearchBox from "./SearchBox";



export default function WeatherApp(){
    const [weatherInfo , setweatherInfo] = useState({
        city :"Delhi",
        temp: 24.18,
        tempmax:24.18,
        tempmin:24.18,
        humidity:24,
        feelslike:23.28,
        weather:"clear sky",
    });


    let updateInfo = (newinfo)=>{
        setweatherInfo(newinfo);
    
    }

    return(
       <diV style ={{textAlign :"center"}}>
        <h2>Weather App by Delta</h2>
        <SearchBox updateInfo={updateInfo}/>
        <InfoWeather info = {weatherInfo}/>
       </diV>
    )
}