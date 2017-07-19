const geolocator = (map)=> {
    //set geolocator position, etc.
    var options = {
        locateOptions: {
            maxZoom: 16
        },
        strings: {
            title: "Use your location"
        },
        returnToPrevBounds: true
    };

    //add the geolocator
    L.control.locate(options).addTo(map);
    $(".leaflet-control-locate").append('<p id="locator-text">Your Location</p>');
}

export default geolocator;