import { createServer } from 'node:http';

const server = createServer((request, response) => {
    console.log("request recidived");

    response.statusCode = 200;

    response.setHeader("Content-Type" , "application/json");


    const jsonResponseBody = JSON.stringify({location: "Mars"})
    response.end(jsonResponseBody)
    console.log(" server attivo al local host 3000");

});

server.listen(3000); //content lenght: 62