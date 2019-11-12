const express = require('express');
const app = express();
const load = require('express-load');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const fs = require('fs');
const http = require('http');
const server = http.createServer(app);
const routes = require('./routes');
// const io = require('socket.io').listen(server);

// const methodOverride = require('method-override');
// const config = require('./config.js')();
app.use(morgan('dev'));
// Run the app by serving the static files in the dist directory
app.use(express.static(__dirname + '/public/dist/biblioteca'));

app.use(bodyParser.urlencoded({ limit: '10mb', extended: 'true' }));
app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use(routes);
// load('controllers').into(app);

// Evento connection ocorre quando entra um novo usuário.
// io.on('connection', function(socket){
//     let contador = 0;
//     fs.readFile("count.txt", 'utf8', (err, data) => {
//         if(err) reject(err);    
//         contador = Number(data)+1;
//         socket.emit("visitas", contador);
//         fs.writeFile("count.txt", contador, err => {
//             if(err) console.log(err);
//         });
//     });
    
//     console.log("#### Novo Visitante ####")
// });
// const options  = {
//     //useMongoClient: true,
//     useNewUrlParser: true,
//     autoReconnect: true,
//     reconnectTries: 20, // Never stop trying to reconnect -> Number.MAX_VALUE
//     reconnectInterval: 500 // Reconnect every 500ms
//   }
// mongoose.connect(config.mongodb, options)
// .then((res) => {
//     console.log('Conectado ao mongo', config.mongodb);
// })
// .catch(err => console.log(err));
// const mongoPromise = mongoose.connect(config.mongodb, options);

// mongoPromise.then(() => {
//   console.log('Conectado ao MongoDB');
// });

// mongoPromise.catch(err => console.error(err));


mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-bihaw.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Conectado ao Mongo'))
.catch((err) => console.log(err));



// Start the app by listening on the default Heroku port
server.listen(process.env.PORT || 8080, () => {
    const serverPort = process.env.PORT || 8080;
    console.log(`Listening on server_port ${serverPort}`);
});