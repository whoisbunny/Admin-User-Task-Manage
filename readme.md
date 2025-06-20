# Project Environment Variables

This project uses environment variables for both the server and client. Below are the details for each:

## Server (`server/.env`)
```
mongoUrl = mongodb://localhost:27017/Company_DB
PORT = 4000
JWT_SECRET = your_jwt_secret_key
JWT_EXPIRATION = 1h
```
- `mongoUrl`: MongoDB connection string
- `PORT`: Port number for the server
- `JWT_SECRET`: Secret key for JWT authentication
- `JWT_EXPIRATION`: JWT token expiration time

## Client (`client/.env`)
```
VITE_BASE_URL = "http://localhost:4000/api/"
```
- `VITE_BASE_URL`: Base URL for API requests from the client

Make sure to update these values as per your environment and never commit sensitive data to public repositories.
