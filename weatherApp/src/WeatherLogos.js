

function icon(weatherType) {
  let iconSrc ="";

  if (weatherType === "Clear") {
    iconSrc = "./assets/images/clear.png";
  } else if (weatherType === "Clouds") {
    iconSrc = "./assets/images/clouds.png";
  } else if (weatherType === "Drizzle") {
    iconSrc = "./assets/images/drizzle.png";
  } else if (weatherType === "Humidity") {
    iconSrc = "./assets/images/humidity.png";
  } else if (weatherType === "Mist") {
    iconSrc = "./assets/images/mist.png";
  } else if (weatherType === "Rain") {
    iconSrc = '/assets/Rain.jpg';
  } else if (weatherType === "Snow") {
    iconSrc = "./assets/images/snow.png";
  } else if (weatherType === "Wind") {
    iconSrc = './assets/images/wind.png';
  }
  return iconSrc;
}

module.exports = {
    icon,
  };