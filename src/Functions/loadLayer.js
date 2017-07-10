import layers from '../layers';

const loadLayer = (map) => {
  cartodb.createLayer(map, {
    user_name: 'bachmansande',
    type: 'cartodb',
    sublayers: [

      {
        sql: layers.stands_fsvegattributes.sql,
        cartocss: layers.stands_fsvegattributes.cartocss
      },
      {
        sql: layers.exterior_83.sql,
        cartocss: layers.exterior_83.cartocss
      },
      {
        sql: layers.district_boundary_83.sql,
        cartocss: layers.district_boundary_83.cartocss
      },
      {
        sql: layers.publicroads.sql,
        cartocss: layers.publicroads.cartocss
      },
      {
        sql: layers.streams_83.sql,
        cartocss: layers.streams_83.cartocss
      },
      {
        sql: layers.hiking_trails_83.sql,
        cartocss: layers.hiking_trails_83.cartocss
      },
      {
        sql: layers.firestations.sql,
        cartocss: layers.firestations.cartocss
      },
      {
        sql: layers.recreation_sites_current_83.sql,
        cartocss: layers.recreation_sites_current_83.cartocss
      },
      {
        sql: layers.peaks_4000ft.sql,
        cartocss: layers.peaks_4000ft.cartocss
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
