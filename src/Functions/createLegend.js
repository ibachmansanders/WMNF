import legendItemGenerator from './legendItemGenerator';

const createLegend = (map,layer) => {
  //based on http://leafletjs.com/examples/choropleth/
  var legend = L.control({position: 'bottomright'});

  //object holding legend object data
  var legendObjects = {
    "ForestStands": {
      "title":"Forest Stands",
      "toggleId":"stands-toggle",
      "divId":"forest-stand-legend",
      "choroUnit":"&nbspyears",
      "grades":[0, 51, 98, 130, 190]
    }
  };

  legend.onAdd = function () {
    //create legend html element and an array to store titles/colors
    var divLegend = L.DomUtil.create('div', 'info legend'),
        legendContent = "";

    //build legend container
    legendContent += '<div class="container-fluid"><div class="row">'

    //generate all included legends by going through the object
    for (var key in legendObjects) {
      legendContent = legendItemGenerator(legendContent,legendObjects[key].title,legendObjects[key].toggleId,legendObjects[key].divId,legendObjects[key].choroUnit,legendObjects[key].grades);
    };

    //close legendContent Bootstrap elements
    legendContent += '</div></div>';

    divLegend.innerHTML += legendContent;

    return divLegend;
  };
  //add the built legend to the map
  legend.addTo(map);

}

export default createLegend;
