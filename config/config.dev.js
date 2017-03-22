module.exports = {
    swaggerOptions: {
        swaggerDefinition: {
            info: {
            title: 'IOT API',
            version: '1.0.0',
            description: 'Demonstrating IOT',
            },
            host: '138.197.86.37:'+port,
            basePath: '/',
        },
        apis: ['./apiRoutes/*.js'],
    },
    allowedOrigins = [
        'http://127.0.0.1:3005', 
        'http://localhost:3005', 
        'http://138.197.86.37:3005'
    ]
  
}