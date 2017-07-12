import layers from '../layers';
import createLegend from './createLegend';
import layerToggle from '../Functions/layerToggle';

var createdLayer;

const loadLayer = (map, callback) => {
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
    //add the legend to the map (leaflet method)
    createLegend(map,layer);

    //add info window TODO get this to work
    cartodb.vis.Vis.addInfowindow(map,layer.getSubLayer(8),['location','peak','elevation'], {
			infowindowTemplate: $('#mountain_infowindow_template').html(),
			templateType: 'mustache'
		});

    //deactivate unecessary layers
    layer.getSubLayer(0).toggle(); //forest
    layer.getSubLayer(4).toggle(); //streams
    layer.getSubLayer(7).toggle(); //recreation sites

    //activate layer toggling
    layerToggle(layer);
  })
  .on('error', function(err) {
    console.log("some error occurred: " + err);
  });
}

export default loadLayer;