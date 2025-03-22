import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"; 

import { useState } from 'react';


export default function SearchBox({updateInfo}){
    let [city,setCity]=useState("");
    let [error,setError]=useState("");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;


    let getWeatherInfo = async()=>{
      try{
        let response =  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        console.log(jsonResponse );

        let result ={
            city:city,
          temp :jsonResponse.main.temp,
          tempmin : jsonResponse.main.temp_min,
          tempmax : jsonResponse.main.temp_max,
          humidity : jsonResponse.main.humidity,
          
          feelslike : jsonResponse.main.feels_like,
          weather : jsonResponse.weather[0].description,

        }
        console.log(result);
        return result;
      }catch(error){
         throw(error);
      }
       
       
    };

   

    let handleChange=(event)=>{
        setCity(event.target.value);
    }

    let handleSubmit = async(event)=>{
        setError(false);
       try{
        event.preventDefault();
        console.log(city);
        setCity("");
      let newinfo =  await getWeatherInfo();
      updateInfo(newinfo);
       }catch(error){
         setError("No such place in our API !");
       }

    };

    return(
        <div className="SearchBox">

        <form onSubmit={handleSubmit }>
            
            <TextField id="City" label="City" variant="outlined" 
             required value={city}
             onChange={handleChange}/>
             <br></br>
             <br></br>
            <Button variant="contained" type='submit'>
               Search
         </Button>

         {error && <p style={{color : "red"}}>No such place in our API !</p>}
        
        </form>
        </div>
    )
}