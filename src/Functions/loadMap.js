import loadLayer from './loadLayer';
import geocoder from './geocoder';
import leafletDrawer from './leafletDrawer';
import geolocator from './geolocator';


const loadMap = () => {
  //load map
  cartodb.createVis('map', 'https://ibachmansanders.carto.com/api/v2/viz/54d14bff-ad3a-41fe-b9c3-1c37c54ff26d/viz.json', {
    center_lat: 44.1,
    center_lon: -71.507,
    zoom: 10,
    shareable: false,
    search: false
  })
    .done(function(vis) {

      //make map accessible to mess with
      var map = vis.getNativeMap();

      //make map globally accessible
      masterMap = vis.getNativeMap();

      //add layers to the map
      loadLayer(map);

      //add geocoder to the map
      geocoder(map);

      //add marker drawer to map
      leafletDrawer(map);

      //add geolocator to map
      geolocator(map);

    })
    .error(function(err) {
      console.log(err);
    });
}

export default loadMap;
