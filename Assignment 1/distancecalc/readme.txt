# Distance Calculator API

## Overview
This project provides an API for calculating and storing the distance between two geographical points using the Haversine formula. The distances are stored in a MongoDB database to avoid redundant calculations for repeated queries.

## Tools and Dependencies
- **Node.js**: JavaScript runtime used for building the server.
- **Express**: Web framework for Node.js used to create the server and define routes.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **dotenv**: Module to load environment variables from a `.env` file.
- **body-parser**: Middleware to parse incoming request bodies.
- **MongoDB**: NoSQL database used to store calculated distances.
- **Postman**: API testing tool used to test the endpoints.




API Endpoint
Calculate Distance
URL: /api/distance
Method: POST
Testing the API
You can test the API using Postman:

1. Open Postman and create a new POST request.
2. Set the URL to http://localhost:3000/api/distance.
3. In the Headers tab, add Content-Type: application/json.
4. In the Body tab, select raw and add the following JSON:
 - The Long and Lat of the Location.
----------------------------------------
{
    "origin": [40.7128, -74.0060],
    "destination": [34.0522, -118.2437]
}
----------------------------------------
5. Send the request and view the response.
 - For this long lat the response will be 
----------------------------------------
{
    "distance": 3940.064
}
