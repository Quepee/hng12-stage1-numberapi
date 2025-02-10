Number Classification API
The Number Classification API is a simple RESTful API that classifies numbers based on their mathematical properties and provides fun facts about them. It determines if a number is prime, perfect, or an Armstrong number, checks if it is odd or even, calculates the digit sum, and fetches a fun fact from the Numbers API. The API is built with Node.js, Express, and Axios, supports CORS, and is deployed on Render.

Features
Classifies numbers as prime, perfect, or Armstrong numbers
Determines if a number is odd or even
Calculates the digit sum of a number
Fetches fun facts from the Numbers API
Uses path parameters instead of query parameters
Returns responses in JSON format
Handles error validation for invalid numbers
Project Setup
Install Node.js and NPM
Clone the repository
Navigate into the project folder
Install dependencies using npm install
Start the server using npm start
The server will run at http://localhost:3000
API Endpoints
To classify a number, use the following endpoint:

GET http://localhost:3000/api/classify-number/371

Example response:
{
"number": 371,
"is_prime": false,
"is_perfect": false,
"properties": ["armstrong", "odd"],
"digit_sum": 11,
"fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}

For invalid input, the API returns an error:

GET http://localhost:3000/api/classify-number/abc

Response:
{
"number": "abc",
"error": true
}

The root endpoint provides classifications for predefined numbers 371, 28, and 7.

Deployment
The API is deployed on Render and is accessible via its public URL.

Contributing
Contributions are welcome through pull requests or issue submissions.