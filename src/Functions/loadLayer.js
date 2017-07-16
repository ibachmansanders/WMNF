import layers from '../layers';
import createLegend from './createLegend';
import layerToggle from './layerToggle';
import deactivateLayer from './deactivateLayer';
import addInfowindow from './addInfowindow';
import zoomToDistrict from './zoomToDistrict';

var createdLayer;

const loadLayer = (map) => {
  cartodb.createLayer(map, {
    user_name: 'bachmansande',
    type: 'cartodb',
    sublayers: [
      {
        sql: layers.district_boundary_83.sql,
        cartocss: layers.district_boundary_83.cartocss
      },
      {
        sql: layers.stands_fsvegattributes.sql,
        cartocss: layers.stands_fsvegattributes.cartocss
      },
      {
        sql: layers.firestations.sql,
        cartocss: layers.firestations.cartocss
      },
      {
        sql: layers.firetowers.sql,
        cartocss: layers.firetowers.cartocss
      },
      {
        sql: layers.picnic.sql,
        cartocss: layers.picnic.cartocss
      },
      {
        sql: layers.observation.sql,
        cartocss: layers.observation.cartocss
      },
      {
        sql: layers.admin_info.sql,
        cartocss: layers.admin_info.cartocss
      },
      {
        sql: layers.group_camping.sql,
        cartocss: layers.group_camping.cartocss
      },
      {
        sql: layers.family_camping.sql,
        cartocss: layers.family_camping.cartocss
      },
      {
        sql: layers.lodge.sql,
        cartocss: layers.lodge.cartocss
      },
      {
        sql: layers.alpine.sql,
        cartocss: layers.alpine.cartocss
      },
      {
        sql: layers.nordic.sql,
        cartocss: layers.nordic.cartocss
      },
      {
        sql: layers.boating.sql,
        cartocss: layers.boating.cartocss
      },
      {
        sql: layers.hiking_trails_83.sql,
        cartocss: layers.hiking_trails_83.cartocss
      },
      {
        sql: layers.shelter.sql,
        cartocss: layers.shelter.cartocss
      },
      {
        sql: layers.amc_hut.sql,
        cartocss: layers.amc_hut.cartocss
      },
      {
        sql: layers.tent_site.sql,
        cartocss: layers.tent_site.cartocss
      },
      {
        sql: layers.peaks_4000ft.sql,
        cartocss: layers.peaks_4000ft.cartocss
      },
      {
        sql: layers.trail_head.sql,
        cartocss: layers.trail_head.cartocss
      },
      {
        sql: layers.district_boundary_androscoggin.sql,
        cartocss: layers.district_boundary_androscoggin.cartocss
      },
      {
        sql: layers.district_boundary_pemigewasset.sql,
        cartocss: layers.district_boundary_pemigewasset.cartocss
      },
      {
        sql: layers.district_boundary_saco.sql,
        cartocss: layers.district_boundary_saco.cartocss
      }
    ]
  })
  .addTo(map)
  .on('done', function(layer) {
    //set interaction of layer
    layer.setInteraction(true);

    //deactivate unecessary layers
    deactivateLayer(layer);

    //add the legend to the map (leaflet method)
    createLegend(map,layer);

    //activate layer toggling
    layerToggle(layer);

    //Add infowindow to layers
    addInfowindow(layer, map);

    //add zoom to district functionality
    zoomToDistrict(layer, map);
  })
  .on('error', function(err) {
    console.log("some error occurred: " + err);
  });
}

export default loadLayer;