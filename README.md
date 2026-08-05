# 🎓 Student Management API

A RESTful Student Management API built with **Node.js** and **Express.js**. This project demonstrates the implementation of CRUD (Create, Read, Update, Delete) operations using an in-memory array as the data store.

## 🚀 Features

- Get all students
- Get a student by ID
- Create a new student
- Update an existing student
- Delete a student

## 🛠️ Technologies Used

- Node.js
- Express.js
- Nodemon

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/students` | Get all students |
| GET | `/students/:id` | Get a student by ID |
| POST | `/students` | Create a new student |
| PUT | `/students/:id` | Update a student |
| DELETE | `/students/:id` | Delete a student |

## ▶️ Getting Started

### Clone the repository

```bash
git clone https://github.com/JamieLeeuw/student-management-api.git
```

### Install dependencies

```bash
npm install
```

### Start the server

```bash
npm run devstart
```

The API will be available at:

```
http://localhost:3000
```

## 🧪 Testing

Use **Postman** to test the API endpoints.

## 📚 What I Learned

- Express.js fundamentals
- REST API design
- CRUD operations
- Express Router
- Route parameters (`req.params`)
- Request body (`req.body`)
- HTTP status codes
- Error handling
