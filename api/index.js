import express from 'express';
//import to send the request to Carto
import request from 'request';

//router object, like a server, will control .get calls
const router = express.Router();

//on .get success, send JSON response
router.get('/', (req, res) => {
  res.send({ data: [] });
});

//create an API endpoint to process user  input
router.post('/', (req, res) => {
  console.log("Request body: " + JSON.stringify(req.body));
  
  //assign body to a variable
  var sqlVar = req.body.sql;

  //TODO hide this using DOTENV npm
  var apiKey = 'xxxx';
  
  //TODO validate the sql!

  var queryURL = 'https://bachmansande.carto.com/api/v2/sql?q=' + sqlVar + "&api_key=" + apiKey;
  console.log(queryURL);


  //use npm Request to send request to carto
  var options = {
    method: "POST",
    url: queryURL,
  };
  request(options, function (error, response, body) {
    if (response.statusCode == 200) {
      res.send({success:true,content:body});
    } else {
      res.send({success:false,content:'server error: ' + response.statusCode});
      console.log(body);
    }
  });

});

export default router;
