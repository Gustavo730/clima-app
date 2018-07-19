const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
  direccion: {
    alias: 'd',
    desc: 'Dirección de la ciudad para obtener el Clima',
    demand: true
  }
}).argv;

let getInfo = async ( direccion ) => {
  try{
    let coors = await lugar.getLugarLatLng( direccion );
    let temp = await clima.getClima( coors.lat, coors.lng );
    return `La temperatura en ${ direccion } es de ${ temp }ºC`;
  } catch( e ){
    return `No se pudo determinar la temperatura para "${ direccion }"`;
  }

}

getInfo( argv.direccion )
  .then( mensaje => console.log( mensaje ) )
  .catch( e => console.log('Error!!', e) );
