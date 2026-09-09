# Timestamp Microservice

A RESTful timestamp microservice built as part of the freeCodeCamp Timestamp Microservice project.

## Features
Returns the current Unix timestamp and UTC date.
Accepts Unix timestamps in milliseconds.
Accepts date strings such as 2015-12-25.
Returns an error for invalid dates.
API Endpoints
Current timestamp
GET /api


Example response:

{
  "unix": 1451001600000,
  "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
}

## Timestamp from date
GET /api/2015-12-25

## Timestamp from Unix timestamp
GET /api/1451001600000


Example response:

{
  "unix": 1451001600000,
  "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
}

Invalid date
GET /api/invalid-date


Example response:

{
  "error": "Invalid Date"
}

## Technologies
Node.js
Express.js
CORS
JavaScript
Running Locally

## Installation:

npm install


Start the server:

npm start


The application will run on the configured port.

## Project

This project was completed as part of the freeCodeCamp Timestamp Microservice certification project.