import layers from '../layers';

const loadLayer = (map) => {
  cartodb.createLayer(map, {
    user_name: 'bachmansande',
    type: 'cartodb',
    sublayers: [
      {
        sql: layers.exterior_83.sql,
        cartocss: layers.exterior_83.cartocss
      },
      {
        sql: layers.district_boundary_83.sql,
        cartocss: layers.district_boundary_83.cartocss
      },
      {
        sql: layers.hiking_trails_83.sql,
        cartocss: layers.hiking_trails_83.cartocss
      }
    ]
  })
  .addTo(map)
  .on('done', function(layer) {
    //TODO
    console.log('layers loaded');
    //add info window TODO get this to work
    // layer.setInteraction(true);
    // var sublayer = layer.getSubLayer(1);
    // sublayer.setInteractivity('RANGER_D_2')
    // var i = new cdb.geo.ui.InfoBox({
    //      type: 'tooltip',
    //      layer: sublayer,
    //      template: '<div class="cartodb-tooltip-content-wrapper">{{RANGER_D_2}}</div>',
    //      position: 'bottom|right',
    //    });
    // document.body.append(i.render().el);
  })
  .on('error', function(err) {
    console.log("some error occurred: " + err);
  });
}

export default loadLayer;
