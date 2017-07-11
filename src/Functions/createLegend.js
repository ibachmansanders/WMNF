import getColor from './getColor';
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
    },
    "TrailsPeaks": {
      "title":"Trails and Peaks",
      "toggleId":"trails-peaks-toggle",
      "divId":"trails-peaks-legend",
      "choroUnit":"",
      "grades":[]
    },
    "POIs": {
      "title":"Recreation",
      "toggleId":"recreation-toggle",
      "divId":"recreation-legend",
      "choroUnit":"",
      "grades":[]
    },
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

  //set up event listeners to hide layers and their legends based on object contents
  $("#stands-toggle").click(() => {
    console.log("forest");
    $("#forest-stand-legend").toggle("slow");
    layer.getSubLayer(0).toggle();
  });
  $("#trails-peaks-toggle").click(() => {
    console.log("trails");
    $("#trails-peaks-legend").toggle("slow");
    layer.getSubLayer(5).toggle();
    layer.getSubLayer(8).toggle();
  });
  $("#recreation-toggle").click(() => {
    console.log("recreation");
    $("#recreation-legend").toggle("slow");
    layer.getSubLayer(7).toggle();
  });
}

export default createLegend;
