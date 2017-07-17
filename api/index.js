import express from 'express';

//router object, like a server, will control .get calls
const router = express.Router();

//on .get success, send JSON response
router.get('/', (req, res) => {
  res.send({ data: [] });
});

//create an API endpoint to process user  input
router.post('/', (req, res) => {
  //read the body of the request, post to main body of page

  //express will deliver a JSON object from the webpage, and we need to parse it
});

export default router;
