import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoWeather({info}){

    const img_url = "https://media.istockphoto.com/id/1325033552/photo/cloudscape.jpg?s=1024x1024&w=is&k=20&c=H8k_DahF41UYDS3MM-qBsXXGNAhyxDN1zn_d7STqsQ4=";



    const HOT_URL ="https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL ="https://plus.unsplash.com/premium_photo-1732736591323-3a9d10e4d96e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAINY_URL ="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=1024x1024&w=is&k=20&c=U6uwI27fEfgEAl9j_Hz848FgLRidd9Ww0kPCkc0FZB8=";


   
    return(

       <div>
           

  <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAINY_URL : info.temp > 15 ? HOT_URL :COLD_URL }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}&nbsp;
          {info.humidity > 80 ? <ThunderstormIcon  /> 
                      : info.temp > 15 ? <WbSunnyIcon  /> 
                      : <AcUnitIcon />}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          <p>Temperature : {info.temp}&deg; C</p>
          <p>Humidity : {info.humidity}&deg; C</p>
         
          <p>Max Temp: {info.tempmax}&deg; C</p>
          <p> Min Temp : {info.tempmin}&deg; C</p>
          <p>The weather can be described as <i> {info.weather}</i> feels like {info.feelslike}&deg; C</p>
        
         
        </Typography>
      </CardContent>
      
    </Card>
        </div>
    )
    
}