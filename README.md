Expense Tracker Backend
Overview
This is the backend for the Expense Tracker application, built with Node.js, Express.js, and MongoDB. The backend handles user authentication, managing expense records, and providing API endpoints for interacting with the frontend.

Features
User Authentication: Users can sign up, log in, and manage their expense records securely.
Expense Management: Allows users to add, update, retrieve, and delete expenses.
Database Integration: Uses MongoDB to store user and expense data.
RESTful API: Exposes API endpoints for frontend integration.
Technologies Used
Backend: Node.js, Express.js
Database: MongoDB (via Mongoose)
Authentication: JWT-based token authentication
Setup Instructions
1. Clone the Repository
bash
Copy code
git clone git@github.com:yorokss/expenceTracker.git
cd expenceTracker
2. Install Dependencies
Navigate to the backend directory and install the required packages:

bash
Copy code
cd backend
npm install
3. Configuration
Create a .env file in the backend directory and configure the following environment variables:
bash
Copy code
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
MONGO_URI: Your MongoDB connection string. If you're using MongoDB Atlas, provide the connection string there.
JWT_SECRET: A secret key used to sign JWT tokens for user authentication.
4. Start the Server
Start the backend server:

bash
Copy code
npm start
The backend server will run on http://localhost:5000.

5. API Endpoints
User Endpoints
POST /signup: Register a new user.

Request body:
json
Copy code
{
  "name": "yogesh rajput",
  "email": "yogesh@example.com",
  "password": "yourPassword123"
}
POST /login: Log in an existing user.

Request body:
json
Copy code
{
  "email": "yogesh@example.com",
  "password": "yourPassword123"
}
Response:
json
Copy code
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ODJiZWRmOTU3YjZhOTA4MWVkOTk4MyIsImlhdCI6MTczNjYyMjIyMiwiZXhwIjoxNzM2NjI1ODIyfQ.IR4Jnj-0RQMYSOt3_nDDDFe3y6CHWXgN0sryKIoZv_0"
}
Expense Endpoints
POST /expenses: Add a new expense.

Request body:
json
Copy code
{
  "amount": 50.00,
  "category": "Food",
  "description": "Lunch",
  "date": "2025-01-12",
 
}
GET /expenses: Retrieve all expenses for the authenticated user.

Response:
json
Copy code
[
  {
    "_id": "expense_id_here",
    "amount": 50.00,
    "category": "Food",
    "description": "Lunch",
    "date": "2025-01-12",
    "userID": "user_id_here"
  }
]
PUT /expenses/:id: Update an existing expense.
  
Request body:
json
Copy code
{
  "amount": 60.00,
  "category": "Food",
  "description": "Dinner",
  "date": "2025-01-13"
}
DELETE /expenses/:id: Delete an expense.

Database Models
User Schema
js
Copy code
const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    date: { type: Date, default: Date.now(), required: true },
  },
  { timestamps: true }
);
Expense Schema
js
Copy code
const ExpenceSchema = new Schema({
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: String, required: false },
  userID: { type: Schema.Types.ObjectId, ref: 'user' },
}, { timestamps: true });
Additional Notes
Authentication: JWT tokens are used to authenticate users. Tokens should be sent in the Authorization header as Bearer <token> for endpoints requiring user authentication.
Database: MongoDB is used for storing user and expense data. Make sure your MongoDB service is running or use a service like MongoDB Atlas.
Contributing
Feel free to fork the repository, create issues, or submit pull requests. Contributions to improve backend functionality, security, and user management are welcome!
