
const superTest = require('supertest');

const createApp = require("./app.js");

const app = createApp();


const request = superTest(app);

test('GET/', async()=>{
    const response = await request.get("/")
    .expect(200)
   .expect('Content-Type', 'application/json')

   expect(response.body).toEqual({location: 'Mars'})

});