const layersOffIndex = [1,2,3,4,5,6,7,8,9,10,11,12,14,16,17,19,20,21];

const deactivateLayer = (layer) => {
    for (var i = 0; i < layersOffIndex.length; i++) {
        layer.getSubLayer(layersOffIndex[i]).toggle();
    };
}

export default deactivateLayer;