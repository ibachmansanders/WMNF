import Modal from './Modal';
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
        circle : false
    },
    edit : false,
    remove: false
    });
    map.addControl(drawControl);

    //when the point drawer is used, created a new layer for the feature, add it to the drawnItems featureGroup
    map.on('draw:created', (e) => {
        var layer = e.layer;
        drawnItems.addLayer(layer);
        map.addLayer(drawnItems);

        var innerHTML = Modal();
        $("#modal").html(innerHTML);
        $("#modal").toggle();
    });
}

export default leafletDrawer;