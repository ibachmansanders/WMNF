function layerToggleCSS(layer,id,sublayer) {
    layer.getSubLayer(sublayer).toggle();
    if (layer.getSubLayer(sublayer).isVisible()==true) {
        $(id).css("background-color","rgba(116,196,118,1)");
    } else {
        $(id).css("background-color","#252525")
    };
}

const layerToggle = (layer) => {
    //set the active layers
    $("#1,#2").css("background-color","rgba(116,196,118,1)");

    //activate mountain layer toggle
    $("#1").click(() => {
        layerToggleCSS(layer,"#1",8);
    });
    //activate trail layer toggle
    $("#2").click(() => {
        layerToggleCSS(layer,"#2",5);
    });
    //activate forests layer toggle
    $("#4").click(() => {
        layerToggleCSS(layer,"#4",0);
        $(".legend").toggle("slow");
    });
}

export default layerToggle;