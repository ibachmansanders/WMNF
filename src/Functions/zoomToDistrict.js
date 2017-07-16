//Use NFPA as an example to get you  going- setSQL, setBounds?
//set map bounds based on returned data TODO config for this map
// function setBounds(map) {
// 	var sqlCall = new cartodb.SQL({user:'clientdemos'});
// 	var sql = "SELECT * FROM" + sqlSource + " WHERE nfpa.state != ''" + yearSQL + stateSQL + "(" + stateSQLin + ")" + typeSQL + propertySQL + ageSQL + genderSQL + deathSQL + injurySQL;
// 	var corner1;
// 	var corner2;
// 	sqlCall.getBounds(sql).done(function(bounds) {
// 		map.fitBounds(bounds, {
// 			paddingBottomRight: [500,0]
// 		});
// 	});
// }

//toggle highlighting on mouseover for district filters
const toggleLayer = [
    {
        id: "androscoggin",
        index: 19
    },
    {
        id: "pemigewasset",
        index: 20
    },
    {
        id: "saco",
        index: 21
    }
]

const zoomToDistrict = (layer, map) => {
    //iterate through district buttons, add listeners to toggle layer visibility
    toggleLayer.map((l)=> {
        var button = document.getElementById(l.id);
        button.addEventListener("mouseenter",function() {
            layer.getSubLayer(l.index).toggle();
        });
        button.addEventListener("mouseleave",function() {
            layer.getSubLayer(l.index).toggle();
        });
    });
}

export default zoomToDistrict;