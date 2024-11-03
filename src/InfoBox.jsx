import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({weatherInfo}) {
    let Hot_URL = "https://images.unsplash.com/photo-1561647784-2f9c43b07a0b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let COLD_URL ="https://images.unsplash.com/photo-1521666753361-d87de0363001?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let RAIN_URL = "https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return <div className='info'>
        <div className='infocard'>
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }} image={ weatherInfo.Humidity > 80 ? RAIN_URL : weatherInfo.Temperature >15 ? Hot_URL : COLD_URL } title="Temp Image" />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {weatherInfo.City}{ weatherInfo.Humidity > 80 ?  <ThunderstormIcon/> : weatherInfo.Temperature >15 ? <WbSunnyIcon/> : <AcUnitIcon/> }
                </Typography>
                
                <Typography variant="body2"  color= 'text.secondary' component={"span"}>
                    <p>Temperatur : {weatherInfo.Temperature}&deg;C <i></i></p>
                    <p>Humidity : {weatherInfo.Humidity}</p>
                    <p>Minimum Temperature: {weatherInfo.Temp_min}</p>
                    <p>Maximum Temperature: {weatherInfo.Temp_max}</p>
                    <p>The Weather can be described as <i>{weatherInfo.Description}</i> and feels like {weatherInfo.Feels_Like}&deg;C</p>
                </Typography>
            </CardContent>
        </Card>
        </div>
    </div>
}