//setup and run server for app
import config from './config'; //server config files
import apiRouter from './api'; //component in which I'll store api setup

//create body parser to interpret out-going data
import bodyParser from 'body-parser';
var jsonParser = bodyParser.json();


//set up Sass Dependencies for SCSS
import sassMiddleware from 'node-sass-middleware';
import path from 'path'; //helps find the Sass files

//bring in express to run server
import express from 'express';
const server = express();

//set up Sass file origin and destinations
server.use(sassMiddleware({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public')
}));

//set up EJS as the DOM builder, pulling from 'views' folder
server.set('view engine', 'ejs');

//build basic framework with server request GET from root dir
server.get('/', (req, res) => {
  //start building content
  res.render('index', {
    content: '...app initialization...'
  });
  //TODO express static to build website w/out sending the public folder, possibly making it more secure
  //res.sendStatic('index');
});

//assign body-parser to handle post request
server.use(jsonParser);

//find api config file --intercepts anything coming my way via url /api
server.use('/api', apiRouter);

//send finished web content to the public dir
server.use(express.static('public'));

//report that server is succesfully listening on port
server.listen(config.port, () => {
  console.info('Express listening on port', config.port);
});
