import express from 'express';

//router object, like a server, will control .get calls
const router = express.Router();

//on .get success, send JSON response
router.get('/', (req, res) => {
  res.send({ data: [] });
});

export default router;
