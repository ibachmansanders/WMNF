import layers from '../layers';
import createLegend from './createLegend';
import layerToggle from '../Functions/layerToggle';

var createdLayer;

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
        sql: layers.district_boundary_83.sql,
        cartocss: layers.district_boundary_83.cartocss
      }
    ]
  })
  .addTo(map)
  .on('done', function(layer) {
    //add the legend to the map (leaflet method)
    createLegend(map,layer);

    //add info windows
    cartodb.vis.Vis.addInfowindow(map,layer.getSubLayer(16),['location','peak','elevation'], {
			infowindowTemplate: $('#mountain_infowindow_template').html(),
			templateType: 'mustache'
    });
    //iterate through recreation layers, adding infowindow
    const layers = [2,3,4,5,6,7,8,9,10,11,13,14,15,17];
    layers.map((index)=> {
      console.log(index);
      cartodb.vis.Vis.addInfowindow(map,layer.getSubLayer(index),['name','site_type'], {
        infowindowTemplate: $('#recreation_infowindow_template').html(),
        templateType: 'mustache'
      });
    });
    

    //deactivate unecessary layers
    var layersOffIndex = [0,1,2,3,4,6,7,8,9,10,11,13,14,15,17];

    for (var i = 0; i < layersOffIndex.length; i++) {
      layer.getSubLayer(layersOffIndex[i]).toggle();
    };

    //activate layer toggling
    layerToggle(layer);
  })
  .on('error', function(err) {
    console.log("some error occurred: " + err);
  });
}

export default loadLayer;