import getColor from './getColor';

//NOTE unit and grades are optional paramters
const legendItemGenerator = (legendContent,title,toggleId,divId,choroUnit,grades) => {
  console.log("title: "+title);
  //container for FOREST STANDS
  legendContent += '<div class="col-sm-12">';
  //add title and toggle interaction
  legendContent += '<strong>' + title + '</strong><br/>';
  // loop through cancer rates and generate a label with a colored square for each interval
  legendContent += '<div id="' + divId + '">';
  if (title=="Forest Stands") { //only use unit if it's a choropleth legend item
    var unit = choroUnit;
    for (var i = 0; i < grades.length; i++) {
      legendContent +=
          '<i style="background:' + getColor(grades[i] + 0.01,1) + '"></i> ' +
          grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + unit + '<br>' : '+');
    };
  }
  //close legend inner content container
  legendContent += '</div>';
  //close legend Bootsrap container
  legendContent += '</div>';

  //return the legendContent to the map
  return legendContent;
}

export default legendItemGenerator;
