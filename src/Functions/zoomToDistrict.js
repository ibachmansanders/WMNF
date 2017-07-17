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