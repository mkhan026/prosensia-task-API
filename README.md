
# Prosensia Task API

A RESTful API for task management built with Node.js, Express, and MongoDB.

## ✨ Features
- User Authentication with JWT
- CRUD operations for Tasks
- MongoDB with Mongoose
- Clean and modular code structure

##  Tech Stack
**Node.js** | **Express.js** | **MongoDB** | **Mongoose** | **JWT**

##  Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/mkhan026/prosensia-task-API.git
cd prosensia-task-API
### 2. Install dependencies
npm install
### 3. Set up environment variables
Create a `.env` file in the root directory:
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname
JWT_SECRET=your_jwt_secret_key_here
PORT=5000
### 4. Run the server
npm run dev
Server will run on `http://localhost:5000`

## 📌 API Routes

### Auth
`POST /api/auth/register` - Register new user  
`POST /api/auth/login` - Login user

### Tasks
`GET /api/tasks` - Get all tasks  
`POST /api/tasks` - Create new task  
`PUT /api/tasks/:id` - Update task  
`DELETE /api/tasks/:id` - Delete task

## Project Structure
prosensia-task-API/
├── controllers/
├── models/
├── routes/
├── middleware/
├── .env
├── .gitignore
├── server.js
└── package.json
## Important
- Never commit `.env` file to GitHub
- `node_modules` is already in `.gitignore`
- Change `JWT_SECRET` and `MONGO_URI` before deploying

##  Author
https://github.com/mkhan026

##  License
This project is licensed under the MIT License
