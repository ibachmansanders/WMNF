const getColor = (d,i) => {
  //based on http://leafletjs.com/examples/choropleth/
  if (i==1) {
    return d >= 190  ? '#006d2c' :
           d > 130  ? '#31a354' :
           d > 98  ? '#74c476' :
           d > 51  ? '#bae4b3' :
                     '#edf8e9';
  } else if (i==2) {
    //TODO use these conditionals for other visualizations            
    return d > 11.056659  ? '#252525' :
           d > 6.323420  ? '#636363' :
           d > 3.407805  ? '#969696' :
           d > 1.167274  ? '#cccccc' :
                     '#f7f7f7';
  } else if (i==3) {
    return d > 11.211491  ? '#a50f15' :
           d > 5.959379  ? '#de2d26' :
           d > 3.593089  ? '#fb6a4a' :
           d > 1.267668  ? '#fcae91' :
                     '#fee5d9';
  };
}

export default getColor;
