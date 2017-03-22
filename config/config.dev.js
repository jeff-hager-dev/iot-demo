var config = {};

config.env = "dev";

config.port = 3005;
config.host = 'localhost';

config.swaggerOptions ={
    swaggerDefinition: {
        info: {
            title: 'IOT API',
            version: '1.0.0',
            description: 'Demonstrating IOT',
        },
        host: config.host+':'+config.port,
        basePath: '/',
    },
    apis: ['./apiRoutes/*.js'],
};

config.allowedOrigins = [
    'http://127.0.0.1:3005',  
    'http://'+config.host+':'+config.port
]

module.exports = config;