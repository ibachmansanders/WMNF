function loadMap() {
  cartodb.createVis('map', 'https://clientdemos.carto.com/api/v2/viz/432668a5-8db3-429d-b83c-1ddda3a5e929/viz.json', {
    center_lat: 39.8282,
    center_lon: -98.5795,
    zoom: 5,
    shareable: false
  })
    .done(function(vis) {

      //make map accessible to mess with
      var map = vis.getNativeMap();
      return map;
    })
    .error(function(err) {
      console.log(err);
    });
}

export default loadMap;
