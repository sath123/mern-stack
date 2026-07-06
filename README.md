# MERN Stack CRUD Application

A full-stack CRUD application built using the MERN stack.

## Features

- User-friendly React frontend
- RESTful API using Express.js
- MongoDB database integration
- Create, Read, Update and Delete operations
- Responsive UI

## Tech Stack

### Frontend

- React.js
- React Router DOM
- Axios

### Backend

- Node.js
- Express.js
- Mongoose
- CORS
- dotenv

### Database

- MongoDB

## Project Structure

```
mernstack/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── controller/
│   ├── model/
│   ├── routes/
│   ├── index.js
│   └── package.json
│
└── README.md
```

## Installation

### Clone the repository

```bash
git clone https://github.com/yourusername/mernstack.git
```

### Install frontend dependencies

```bash
cd client
npm install
```

### Install backend dependencies

```bash
cd ../server
npm install
```

### Configure environment variables

Create a `.env` file inside the `server` folder.

Example:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### Run Backend

```bash
cd server
npm start
```

### Run Frontend

```bash
cd client
npm run dev
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /users | Get all users |
| POST | /users | Create user |
| PUT | /users/:id | Update user |
| DELETE | /users/:id | Delete user |

## Future Improvements

- Authentication
- Pagination
- Search
- Docker support
- Deployment on AWS

## Author

Sathees kumar
