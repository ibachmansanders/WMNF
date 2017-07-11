import getColor from './getColor';

//NOTE unit and grades are optional paramters
const legendItemGenerator = (legendContent,title,toggleId,divId,choroUnit,grades) => {
  console.log("title: "+title);
  //container for FOREST STANDS
  legendContent += '<div class="col-sm-4">';
  //add title and toggle interaction
  legendContent += '<strong>' + title + '</strong> &nbsp <input id="' + toggleId + '"  class="form-check-input" type="checkbox" value="checked" checked><br/>';
  // loop through cancer rates and generate a label with a colored square for each interval
  legendContent += '<div id="' + divId + '">';
  if (title=="Forest Stands") { //only use unit if it's a choropleth legend item
    var unit = choroUnit;
    for (var i = 0; i < grades.length; i++) {
      legendContent +=
          '<i style="background:' + getColor(grades[i] + 0.01,1) + '"></i> ' +
          grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + unit + '<br>' : '+');
    };
  } else if (title == 'Trails and Peaks') {
    legendContent += '<i><img src="https://s3.amazonaws.com/com.cartodb.users-assets.production/production/bachmansande/assets/20170710172003mountain-15.svg" alt="Mountain Icon"></i>Peaks >4000 ft<br>';
    legendContent += '<i><img src="https://s3.amazonaws.com/com.cartodb.users-assets.production/production/bachmansande/assets/20170710203126trail.svg" alt="Trail Icon"></i>Hiking Trails<br>';
  } else if (title == 'Recreation') {
    //put this huge legend into two columns
    legendContent += '<div class="container-fluid">';
    legendContent += '<div class="row">';

    //first column
    legendContent += '<div class="col-sm-6">';
    legendContent += '<i><img src="https://s3.amazonaws.com/com.cartodb.users-assets.production/maki-icons/building-18.svg" alt="Hut"></i>Huts & Lodges<br>';
    legendContent += '<i><img src="https://s3.amazonaws.com/com.cartodb.users-assets.production/production/bachmansande/assets/20170710160800information-15.svg" alt="Info"></i>Info Center<br>';
    legendContent += '<i><img src="https://s3.amazonaws.com/com.cartodb.users-assets.production/production/bachmansande/assets/20170710162204canoe.svg" alt="Boating"></i>Boating<br>';
    legendContent += '<i><img src="https://s3.amazonaws.com/com.cartodb.users-assets.production/maki-icons/building-18.svg" alt="Rental Cabin"></i>Rental Cabin<br>';
    legendContent += '<i><img src="https://s3.amazonaws.com/com.cartodb.users-assets.production/production/bachmansande/assets/20170710170609hiking.svg" alt="Trailhead"></i>Trailhead<br>';
    legendContent += '<i><img src="https://s3.amazonaws.com/com.cartodb.users-assets.production/production/bachmansande/assets/20170710162834observation.svg" alt="Observation"></i>Observation<br>';
    legendContent += '<i><img src="https://s3.amazonaws.com/com.cartodb.users-assets.production/maki-icons/campsite-18.svg" alt="Camping"></i>Camping<br>';
    legendContent += '</div>';

    //second column
    legendContent += '<div class="col-sm-6">';
    legendContent += '<i><img src="https://s3.amazonaws.com/com.cartodb.users-assets.production/maki-icons/skiing-18.svg" alt="Alpine"></i>Alpine Skiing<br>';
    legendContent += '<i><img src="https://s3.amazonaws.com/com.cartodb.users-assets.production/production/bachmansande/assets/20170710164205nordic.svg" alt="Nordic"></i>Nordic Skiing<br>';
    legendContent += '<i><img src="https://s3.amazonaws.com/com.cartodb.users-assets.production/production/bachmansande/assets/20170710163451groupcamp.svg" alt="Camp"></i>Group Camp<br>';
    legendContent += '<i><img src="https://s3.amazonaws.com/com.cartodb.users-assets.production/production/bachmansande/assets/20170710164913shelter-15.svg" alt="Shelter"></i>Shelter<br>';
    legendContent += '<i><img src="https://s3.amazonaws.com/com.cartodb.users-assets.production/production/bachmansande/assets/20170710164921campsite-11.svg" alt="Tentsite"></i>Tentsite<br>';
    legendContent += '<i><img src="https://s3.amazonaws.com/com.cartodb.users-assets.production/production/bachmansande/assets/20170710165259firetower.svg" alt="Fire"></i>Fire Lookout<br>';
    legendContent += '<i><img src="https://s3.amazonaws.com/com.cartodb.users-assets.production/production/bachmansande/assets/20170710165514picnic-site-15.svg" alt="Picnic"></i>Picnic<br>';
    legendContent += '</div>'

    //close bootstrap elements
    legendContent += '</div></div>';
  };
  //close legend inner content container
  legendContent += '</div>';
  //close legend Bootsrap container
  legendContent += '</div>';

  //return the legendContent to the map
  return legendContent;
}

export default legendItemGenerator;
