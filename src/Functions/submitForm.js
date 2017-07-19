import sendData from './sendData';

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
        var sql2 = '{"type":"Point","coordinates":[' + coord.lng + ',' + coord.lat + "]}'),4326),'" + name + "','" + email + "','" + comments + "','" + type + "','" + coord.lat + "','" + coord.lng +"')";
        var masterSQL = sql + sql2;
        //send SQL to server via sendData function
        sendData(masterSQL,name);
    });

    //clean up
    drawnItems.eachLayer((layer)=>{
        drawnItems.removeLayer(layer);
    });
    $("#modal").toggle();
    document.getElementById("modal-form").reset();
}

export default submitForm;