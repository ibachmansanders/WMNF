import loadLayer from './loadLayer';

const loadMap = () => {
  cartodb.createVis('map', 'https://ibachmansanders.carto.com/api/v2/viz/54d14bff-ad3a-41fe-b9c3-1c37c54ff26d/viz.json', {
    center_lat: 44.1,
    center_lon: -71.507,
    zoom: 10,
    shareable: false
  })
    .done(function(vis) {

      //make map accessible to mess with
      var map = vis.getNativeMap();

      //add layers to the map
      var layers = loadLayer(map);

      return map;
    })
    .error(function(err) {
      console.log(err);
    });
}

export default loadMap;
