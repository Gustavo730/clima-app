
const axios = require('axios');

const getClima = async ( lat, lng ) => {

  let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=57f81de5951b280011ee5b18e52653e9`);

  return resp.data.main.temp;

}

module.exports = {
  getClima
}
