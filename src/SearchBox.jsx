import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox({updateInfo}){

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "057b9a1c1ec25ab4ca780dbe9cd5112d";
    const [err,seterr] = useState(false);
    let getWeatherInfo = async()=>{
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
        let jsonRes = await response.json();
        jsonRes.main.temp = Math.round(jsonRes.main.temp- 273.15);
        jsonRes.main.temp_max = Math.round(jsonRes.main.temp_max- 273.15);
        jsonRes.main.temp_min = Math.floor(jsonRes.main.temp_min- 273.15);
        let result ={
            City:jsonRes.name,
            Temperature: jsonRes.main.temp,
            Description:jsonRes.weather[0].description,
            Humidity: jsonRes.main.humidity,
            Temp_max: jsonRes.main.temp_max,
            Temp_min :jsonRes.main.temp_min,
            Feels_Like: jsonRes.main.feels_like,
            GroundLevel: jsonRes.main.grnd_level,
        };
        return result;
        }catch(e){
            throw e;
        }
       
    }; 

    let [city,setCity] = useState("");

    let handleChange = (event)=>{
        setCity(event.target.value);
    }

    let handlesubmit = async (event)=>{
        try{
            event.preventDefault();
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
        seterr(false);
        }catch(e){
            seterr(true);
        }
    }

    return( <div className="SearchBox">
        <form onSubmit={handlesubmit}>
        <TextField onChange={handleChange} id="city" label="City Name" variant="outlined" value={city} required/>
        <br></br>
        <br></br>
        <Button variant="outlined" type="submit">Search</Button>
        </form>
        {err && <p style={{color:'red'}}>No Such Place Found !</p>}
    </div>);
}