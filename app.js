const { createServer } = require('node:http');

function createApp(){
    return createServer((request,response) => {
        response.statusCode= 200;

        response.setHeader('Content-Type','application/json');
        const jsonResponseBody= JSON.stringify({location: "Mars"});

        response.end(jsonResponseBody);


    });
}

module.exports = createApp;