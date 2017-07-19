function layerToggleCSS(layer,id,sublayer) {
    layer.getSubLayer(sublayer).toggle();
    if (layer.getSubLayer(sublayer).isVisible()==true) {
        $(id).css("background-color","rgba(116,196,118,1)");
    } else {
        $(id).css("background-color","#252525")
    };
}

const layerInfo = [
    {
        //trailhead
        id: "#1-1",
        index: 18
    },
    {
        //trail
        id: "#1-2",
        index: 13
    },
    {
        //hut
        id: "#1-3",
        index: 15
    },
    {
        //shelter
        id: "#1-4",
        index: 14
    },
    {
        //tentsite
        id: "#1-5",
        index: 16
    },
    {
        //boating
        id: "#2-1",
        index: 12
    },
    {
        //nordic
        id: "#2-2",
        index: 11
    },
    {
        //alpine
        id: "#2-3",
        index: 10
    },
    {
        //family camp
        id: "#3-1",
        index: 8
    },
    {
        //group camp
        id: "#3-2",
        index: 7
    },
    {
        //lodge
        id: "#3-3",
        index: 9
    },
    {
        //picnic
        id: "#4-1",
        index: 4
    },
    {
        //observation
        id: "#4-2",
        index: 5
    },
    {
        //information
        id: "#4-3",
        index: 6
    },
    {
        //fire station
        id: "#5-1",
        index: 2
    },
    {
        //fire tower
        id: "#5-2",
        index: 3
    },
    {
        //mountains
        id: "#6-1",
        index: 17
    },
    {
        //forest
        id: "#6-2",
        index: 1
    }
]

const layerToggle = (layer) => {
    //set the active layers
    $("#1-1,#1-2,#1-3").css("background-color","rgba(116,196,118,1)");

    //activate layer toggles using layerInfo object
    layerInfo.map((item)=> {
        $(item.id).click(()=>{
            layerToggleCSS(layer,item.id,item.index);
            if (item.id == "#6-2") {
                $(".legend").toggle();
                console.log("6.2");
            };
        });
    });
}

export default layerToggle;