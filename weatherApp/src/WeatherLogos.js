const weatherIcon = document.querySelector(".weather-icon");

if (data.weather[0].main == "Clear"){
    weatherIcon.src = "/public/images/clear.png";
}

else if (data.weather[0].main == "Clouds"){
    weatherIcon.src = "/public/images/clouds.png";
}
    
else if (data.weather[0].main == "drizzle"){
    weatherIcon.src = "/public/images/drizzle.png";
}

else if (data.weather[0].main == "humidity"){
     weatherIcon.src = "/public/images/humidity.png";
}

else if (data.weather[0].main == "mist"){
     weatherIcon.src = "/public/images/mist.png";
}
       
else if (data.weather[0].main == "rain"){
     weatherIcon.src = "/public/images/rain.png";
}
   
else if (data.weather[0].main == "snow"){
    weatherIcon.src = "/public/images/snow.png";
}
else if (data.weather[0].main == "wind"){
    weatherIcon.src = "/public/images/wind.png";
}

