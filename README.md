# TrueCaller Clone MERN Project

This project is a clone of the TrueCaller application, built using the MERN stack (MongoDB, Express.js, Vite+React, Node.js). It allows users to search for phone numbers and retrieve associated information.

## Features

* **Phone Number Search:** Users can search for phone numbers to find associated names.
* **Database Integration:** The application stores phone number and name mappings in a MongoDB database.
* **NumVerify API Integration:** If a phone number is not found in the database, the application fetches information from the NumVerify API and adds it to the database.
* **User Naming:** If a number is fetched from the API, users are prompted to provide a name for the number, which is then stored in the database.
* **Spam Reporting:** If a number is a spam, users can report it as spam, which increases the spam score of the user in the db records
* **Authentication and Authorization:**
    * JWT (JSON Web Tokens) for secure authentication.
    * Cookies for managing user sessions.
    * bcrypt for password hashing.
* **Middleware:**
    * cors for cross-origin resource sharing.
    * cookieParser for parsing cookies.
    * morgan for HTTP request logging.
    * helmet for enhanced security.
* **Mongoose:** Used for MongoDB object modeling.
* **Environment variable management:** dotenv is used to handle environment variables.

## Technologies Used

* **Frontend:**
    * Vite+React
* **Backend:**
    * Node.js
    * Express.js
* **Database:**
    * MongoDB
* **Authentication:**
    * jsonwebtoken
    * bcrypt
* **API:**
    * NumVerify API
* **Middleware:**
    * cors
    * cookie-parser
    * morgan
    * helmet
* **Other:**
    * Mongoose
    * dotenv

## Installation

1.  **Clone the repository:**

    ```bash
    git clone <repository_url>
    cd <project_directory>
    ```

2.  **Install backend dependencies:**

    ```bash
    cd backend
    npm install
    ```

3.  **Install frontend dependencies:**

    ```bash
    cd ../frontend
    npm install
    ```

4.  **Set up environment variables:**

    * Create a `.env` file in the `backend` directory.
    * Add the following variables:

        ```
        MONGODB_URI=<your_mongodb_uri>
        PORT=<your_port>
        JWT_SECRET=<your_jwt_secret>
        NUMVERIFY_URL=http://apilayer.net/api/validate
        NUMVERIFY_API_KEY=<your_numverify_api_key>
        DEFAULT_COUNTRY_CODE=IN
        JWT_SECRET=<your_jwt_secret>
        ```

    * Replace the placeholders with your actual values.
    * Create `.env` file in the `frontend` directory.
    * Add the following variable:

        ```
        VITE_BACKEND_URL=<your_backend_url>
        ```

5.  **Run the backend:**

    ```bash
    cd ../backend
    nodemon server.js
    ```

6.  **Run the frontend:**

    ```bash
    cd ../frontend
    npm run dev
    ```

7.  **Access the application:**

    * Open your browser and navigate to `http://localhost:3000`.

## Usage

1.  **Search for a phone number:**
    * Enter a phone number in the search bar and click "Search."
2.  **View results:**
    * If the number is found in the database, the associated name will be displayed.
    * If the number is not found, the application will fetch information from the NumVerify API.
3.  **Provide a name (if applicable):**
    * If the number was fetched from the API, you will be prompted to provide a name for the number.
    * Enter the name and click "Submit."
4.  **Authentication**
    * Users can create accounts and login to the website.

## Notes

* Ensure that you have a MongoDB instance running and that the `MONGODB_URI` environment variable is set correctly.
* Obtain an API key from NumVerify and set the `NUMVERIFY_API_KEY` environment variable.
* The `JWT_SECRET` should be strong, random strings.
* The backend runs on port 5000, and the frontend runs on port 5174.
* dotenv is used to load environment variables from the .env file.
* jsonwebtoken is used for creating and verifying JWT tokens.

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues.
