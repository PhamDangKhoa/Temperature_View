const prefix = 'http://api.openweathermap.org/data/2.5/weather?uk&appid=acf00e323890e629dcffc93c2d787b20&units=metric&q=';

const getTempByCityName = (cityName) => (
    fetch(prefix + cityName)
    .then(res => res.json())
    .then(resJson => resJson.main.temp)
)

export default getTempByCityName;