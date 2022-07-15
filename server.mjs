import { createServer } from 'node:http';

const server = createServer((request, response) => {
    console.log("request recidived");

    response.statusCode = 200;

    response.setHeader("Content-Type" , "text/html");


    const jsonResponseBody = JSON.stringify()
    response.end("<html><body><h1> ciao mio piccolo server </h1> </body> </html>",
    console.log(" server attivo al local host 3000"));

});

server.listen(3000);