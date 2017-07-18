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
    $(".leaflet-draw-toolbar").prepend("<p>Report an Issue</p>");

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

//TODO moduleize
const submitForm = (drawnItems) => {
    //retrieve form content
    var name = $("#name").val();
    var email = $("#email").val();
    var comments = $("#comments").val();
    var type = $("input[name=optionsRadios]:checked").val();

    //set up SQL
    drawnItems.eachLayer((layer)=> {
        var sql = "INSERT INTO events_collector (the_geom, name, email, comments, type, latitude, longitude) VALUES (ST_SetSRID(ST_GeomFromGeoJSON('";
        var coord = layer.getLatLng();
        var sql2 = "{'type':'Point','coordinates':[" + coord.lng + "," + coord.lat + "]}'),4326),'" + name + "','" + email + "','" + comments + "','" + type + "','" + coord.lat + "','" + coord.lng +"')";
        var masterSQL = sql + sql2;
        //send SQL to server via sendData function
        sendData(masterSQL);
    });

    //clean up
    drawnItems.eachLayer((layer)=>{
        drawnItems.removeLayer(layer);
    });
    $("#modal").toggle();
    document.getElementById("modal-form").reset();
}

//TODO Moduleize
const sendData = (sql) => {
    //build SQL into JSON object
    var data = { "sql" : sql };
    //TODO
    console.log(sql);
    console.log(data);
    //AJAX post (to api/index )
    $.ajax({
        url: './api/data',
        type: 'POST',
        data: data,
        success: (response) => {
            console.log(response);
        },
        error: (xhr, status, error) => {
            alert ("error: " + error);
        }
    });
}