const geocoder = (map) => {
    //use MapZen's geocoder with a bounding box to limit searches within NH
    var focusLatLng = L.latLng(44.148619,-71.453007);
    var focusLatLngTL= L.latLng(44.629436, -72.374840);
    var focusLatLngBR= L.latLng(43.592258, -70.707836);
    var focusBounds =  L.latLngBounds(focusLatLngTL,focusLatLngBR);

    var mapGeocoder = L.control.geocoder('mapzen-ghp51ci', {
        bounds: focusBounds,
        position: 'topright',
        placeholder: 'Search the White Mountains',
        expanded: true,
        markers: true
    }).addTo(map);

    //set zoom on search result
    mapGeocoder.on('select', function (e) {
        map.setZoom(14); 
    });
}

export default geocoder;

