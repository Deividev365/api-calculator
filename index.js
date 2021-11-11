//Framework hapi.js
const Hapi = require('hapi');
const Joi = require('joi');

// logic port and machine
const host = 'localhost';
const port =  process.env.PORT || 8000; 

// Create Server
const server = Hapi.Server({
    host: host,
    port: port
});

// Initiate Server
const init = async () => {

    await server.start();
    console.log("Servidor Ligado na porta " + port);

}


// Define routes // 

require('./routes/routes')(server)




//Initiate app
init();


