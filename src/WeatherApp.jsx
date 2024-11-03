import { useState } from 'react';
import InfoBox from './InfoBox'
import SearchBox from './SearchBox'

export default function WeatherApp() {
    const [info , setinfo] = useState({City: "Delhi",
        Description:"haze",
        Feels_Like:298.07,
        GroundLevel:988,
        Humidity:50,
        Temp_max:298.2,
        Temp_min:298.2,
        Temperature:298.2});

        let updateInfo = (newinfo)=>{
            setinfo(newinfo);
            console.log("weaatherappmsasdlkgskgk");
        }

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>weather app</h1>
            <SearchBox updateInfo= {updateInfo}/>
            <InfoBox weatherInfo = {info}/>
        </div>

    );
}