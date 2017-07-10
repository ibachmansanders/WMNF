import loadLayer from './loadLayer';

const loadMap = () => {
  cartodb.createVis('map', 'https://ibachmansanders.carto.com/api/v2/viz/54d14bff-ad3a-41fe-b9c3-1c37c54ff26d/viz.json', {
    center_lat: 43.999,
    center_lon: -71.507,
    zoom: 10,
    shareable: false
  })
    .done(function(vis) {

      //make map accessible to mess with
      var map = vis.getNativeMap();

      console.log('map loaded');

      //add layers to the map
      var layers = loadLayer(map);

      return map;
    })
    .error(function(err) {
      console.log(err);
    });
}

export default loadMap;
