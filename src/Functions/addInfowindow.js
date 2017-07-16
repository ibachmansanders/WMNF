const layers = [
    {
        index: 0   ,
        interactivity: 'dist_name, manager',
        interactivityArray: ['dist_name','manager']
    },
    {
        index: 1,
        interactivity: 'acres, ev_name, stand_age',
        interactivityArray: ['acres','ev_name', 'stand_age']
    },
    {
        index: 13,
        interactivity: 'name,mi_length',
        interactivityArray: ['name','mi_length']
    },
    {
        index: 17,
        interactivity: 'location,peak,elevation',
        interactivityArray: ['location','peak','elevation']
    },
];

const layersIndex = [3,4,5,6,7,8,9,10,11,12,,14,15,16,18];

const addInfowindow = (layer, map) => {

    //iterate through layers, adding infowindow
    layers.map((object)=> {
        var sublayer = layer.getSubLayer(object.index);
        sublayer.setInteractivity(object.interactivity)
        cdb.vis.Vis.addInfowindow(map, sublayer, object.interactivityArray);
    });

    //iterate through recreation layers, adding infowindow
    layersIndex.map((index)=> {
        var sublayer = layer.getSubLayer(index);
        sublayer.setInteractivity('name,site_type');
        cdb.vis.Vis.addInfowindow(map,sublayer, ['name','site_type']);
    });
}

export default addInfowindow;