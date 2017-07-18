import express from 'express';
//import jQuery
import {$, jQuery} from 'jquery';
import Window from 'window';

//assign jQuery to a virtual window so that it can be used
const window = new Window();
window.$ = $;
window.jQuery = jQuery;

//router object, like a server, will control .get calls
const router = express.Router();

//on .get success, send JSON response
router.get('/', (req, res) => {
  res.send({ data: [] });
});

//create an API endpoint to process user  input
router.post('/data', (req, res) => {
  console.log(req.body);
  //assign body to a variable
  var sqlVar = req.body.sql;

  //TODO hide this using DOTENV npm
  var apiKey = 'XXXX';
  
  //TODO validate the sql!

  var queryURL = 'https://bachmansande.carto.com/api/v2/sql?q=' + sqlVar + '&api_key=' + apiKey;

  //TEST
  console.log(queryURL);

  //AJAX function here to send to carto!
  //send queryURL TODO finish
  $.ajax({
    type: 'POST',
    contentType: application/JSON,
    url: queryURL,
    success: (response)=>{
      console.log('success');
      console.log(JSON.stringify(response));
    },
    error: (xhr, status, error) => {
            alert ("Server error: " + error);
    }
  });

});

export default router;
