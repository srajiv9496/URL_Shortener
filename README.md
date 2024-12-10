# URL Shortener

A simple URL shortener application built using **Node.js** and **Express**. This project allows users to input a long URL, which is then shortened to a unique identifier (short URL). Users can also track analytics for each shortened URL, including the number of clicks.

## Features

- **Generate Short URL**: Converts a long URL into a short and unique identifier.
- **Redirect to Original URL**: Short URLs redirect users to the original, long URL.
- **Analytics**: Provides analytics about the total number of clicks for each shortened URL.

## Technologies Used

- **Node.js**: JavaScript runtime for building scalable applications.
- **Express.js**: Web application framework for Node.js.
- **MongoDB**: NoSQL database to store short URLs and their visit history.
- **EJS**: Templating engine for rendering dynamic HTML views.

## Installation

To run the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/URL_Shortener.git
   cd URL_Shortener
   ```
   
2. **Install dependencies: Ensure you have Node.js installed. If not, you can download it from here.
     Run the following command to install project dependencies:**
   ```bash
   npm install
   ```
3. **Setup MongoDB**
  Make sure you have MongoDB running locally or use a cloud MongoDB service like MongoDB Atlas. If you're running MongoDB locally, start it using the following command:
   ```bash
   mongod
   ```
   
5. **Run the application**
   After installing dependencies and ensuring MongoDB is running, you can start the app by running:
   ```bash
   npm start
   ```
   
  The server will start on http://localhost:8001

  ### API Endpoints
1. **Generate Short URL(POST/url)**
   Request body:
   ```json
   {
     "url": "http://www.example.com"
   }
   ```
   Response:
   ```json
   {
      "id": "shortID"
   }
   ```
   
2. **Redirect to Original URL(GET/:shortId)**
- **Request**: Access http://localhost:8001/:shortId
- **Response**: Redirects to the original URL associated with the short ID.

3. View Analytics (GET /url/analytics/:shortId)
- **Request**: Access http://localhost:8001/url/analytics/:shortId
- **Response**:
  ```json
  {
    "totalClicks": 15,
    "analytics": [
      { "timestamp": "2024-12-01T12:00:00Z" },
      { "timestamp": "2024-12-01T13:00:00Z" }
    ]
  }
  ```

## Project Structure
   
### **Controllers**
- `controllers/urlController.js`: Handles the logic for URL creation and analytics fetching.
- `controllers/staticController.js`: Handles rendering of the homepage and other static views.

### **Models**
- `models/url.js`: Defines the MongoDB schema for storing short URLs and their visit history.

### **Routes**
- `routes/url.js`: Defines the routes for generating and redirecting short URLs, as well as fetching analytics.
- `routes/staticRoute.js`: Serves static pages like the homepage.

### **Views**
- `views/home.ejs`: Template to render the homepage, allowing users to generate new short URLs and view existing ones.

### **Connection**
- `connection/index.js`: Establishes the connection to the MongoDB database.

