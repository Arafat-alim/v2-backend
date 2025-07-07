# v2-backend

This is the backend for the second version of my portfolio. It is a Node.js application built with Express, MongoDB, and Mongoose.

## Features

*   **User authentication:** Users can register, login, and logout. Authentication is handled with JSON Web Tokens (JWTs) and cookies.
*   **Healthcheck endpoint:** A simple endpoint to verify that the server is running.

## Getting Started

### Prerequisites

*   Node.js (v22.11.0 or higher)
*   MongoDB

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/your-username/v2-backend.git
    ```

2.  Install the dependencies:

    ```bash
    npm install
    ```

3.  Create a `.env` file in the root of the project and add the following environment variables:

    ```
    PORT=5001
    MONGO_URI=your-mongodb-connection-string
    CORS_ORIGIN=http://localhost:3000
    ACCESS_TOKEN_SECRET=your-access-token-secret
    ACCESS_TOKEN_EXPIRY=1d
    REFRESH_TOKEN_SECRET=your-refresh-token-secret
    REFRESH_TOKEN_EXPIRY=10d
    ```

4.  Start the server:

    ```bash
    npm start
    ```

## API Documentation

### Healthcheck

*   **GET /api/v1/healthcheck**

    Returns a 200 OK status if the server is running.

### Users

*   **POST /api/v1/users/register**

    Registers a new user.

    **Request body:**

    ```json
    {
      "username": "your-username",
      "password": "your-password"
    }
    ```

*   **POST /api/v1/users/login**

    Logs in a user.

    **Request body:**

    ```json
    {
      "username": "your-username",
      "password": "your-password"
    }
    ```

*   **POST /api/v1/users/logout**

    Logs out a user. Requires authentication.

## Technologies Used

*   **Node.js:** A JavaScript runtime built on Chrome's V8 JavaScript engine.
*   **Express:** A fast, unopinionated, minimalist web framework for Node.js.
*   **MongoDB:** A cross-platform document-oriented database program.
*   **Mongoose:** An Object Data Modeling (ODM) library for MongoDB and Node.js.
*   **JSON Web Tokens (JWT):** A compact, URL-safe means of representing claims to be transferred between two parties.
*   **bcrypt:** A library for hashing passwords.
*   **cookie-parser:** A middleware for parsing cookies.
*   **morgan:** A middleware for logging HTTP requests.
*   **winston:** A logger for just about everything.
*   **chalk:** A library for styling terminal output.
*   **husky:** A tool for running scripts at different stages of the git lifecycle.
*   **eslint:** A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
*   **prettier:** An opinionated code formatter.
