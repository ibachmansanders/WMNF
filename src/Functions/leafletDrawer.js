import Modal from './modal';
import submitForm from './submitForm';
import WMNFMarker from '../Components/WMNFMarker';

//import the custom marker factory
var customMarker = WMNFMarker();

const leafletDrawer = (map) => {// Create variable for Leaflet.draw features
    var drawnItems = new L.FeatureGroup();

    //add these items to the map
    map.addLayer(drawnItems);

    // Create Leaflet Draw Control for the draw tools and toolbox
    var drawControl = new L.Control.Draw({
    draw : {
        polygon : false,
        polyline : false,
        rectangle : false,
        circle : false,
        marker: {
            icon: new customMarker()
        }
    },
    edit : false,
    remove: false
    });
    map.addControl(drawControl);
    $(".leaflet-draw-toolbar").append("<p>Report an Issue</p>");

    //when the point drawer is used, created a new layer for the feature, add it to the drawnItems featureGroup
    map.on('draw:created', (e) => {
        //clear out any existing drawn items
        drawnItems.eachLayer((layer)=> {
            drawnItems.removeLayer(layer);
        });

        //add the drawn icon to our featureGroup
        var layer = e.layer;
        drawnItems.addLayer(layer);
        map.addLayer(drawnItems);

        //open the modal dialogue
        var innerHTML = Modal(); //generate html
        var target = $("#modal");
        target.html(innerHTML); //push html to div object
        if (target.is(":visible")==false) {target.toggle();} //show div  object (if it's not already visible)
        $("#close").click(()=>{ //activate closing functionality
            target.toggle();
            drawnItems.removeLayer(layer);
        });

        //set up the form to handle submit
        $("#modal-form").submit((event)=> {
            //cancel normal submission
            event.preventDefault();
            submitForm(drawnItems);
        })
    });
}

export default leafletDrawer;