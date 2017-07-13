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
        index: 17
    },
    {
        //trail
        id: "#1-2",
        index: 12
    },
    {
        //hut
        id: "#1-3",
        index: 14
    },
    {
        //shelter
        id: "#1-4",
        index: 13
    },
    {
        //tentsite
        id: "#1-5",
        index: 15
    },
    {
        //boating
        id: "#2-1",
        index: 11
    },
    {
        //nordic
        id: "#2-2",
        index: 10
    },
    {
        //alpine
        id: "#2-3",
        index: 9
    },
    {
        //family camp
        id: "#3-1",
        index: 7
    },
    {
        //group camp
        id: "#3-2",
        index: 6
    },
    {
        //lodge
        id: "#3-3",
        index: 8
    },
    {
        //picnic
        id: "#4-1",
        index: 3
    },
    {
        //observation
        id: "#4-2",
        index: 4
    },
    {
        //information
        id: "#4-3",
        index: 5
    },
    {
        //fire station
        id: "#5-1",
        index: 1
    },
    {
        //fire tower
        id: "#5-2",
        index: 2
    },
    {
        //mountains
        id: "#6-1",
        index: 16
    },
    {
        //forest
        id: "#6-2",
        index: 0
    }
]

const layerToggle = (layer) => {
    //set the active layers
    $("#1-2,#1-3,#6-1,#4-3").css("background-color","rgba(116,196,118,1)");

    //activate layer toggles using layerInfo object
    layerInfo.map((item)=> {
        $(item.id).click(()=>{
            layerToggleCSS(layer,item.id,item.index);
        });
    });
}

export default layerToggle;