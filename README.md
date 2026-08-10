# Student Management API

RESTful API for managing student records using Node.js, Express.js, and PostgreSQL.

## Overview

The Student Management API provides endpoints for creating, retrieving, updating, and deleting student records.

The application uses PostgreSQL for persistent data storage, Joi for request validation, and Express middleware for request logging and centralized error handling.

## Tech Stack

- Node.js
- Express.js
- PostgreSQL
- Joi
- node-postgres (`pg`)
- Postman

## Project Structure

```text
student-management-api/
├── config/
│   └── db.js
├── controllers/
│   └── studentController.js
├── middlewares/
│   ├── errorHandler.js
│   ├── logger.js
│   └── validateStudent.js
├── routes/
│   └── studentRoutes.js
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── server.js
```

## Getting Started

### Prerequisites

Make sure the following are installed:

- Node.js
- npm
- PostgreSQL

### Clone the Repository

```bash
git clone https://github.com/JamieLeeuw/student-management-api.git
cd student-management-api
```

### Install Dependencies

```bash
npm install
```

## Environment Variables

Create a `.env` file in the root directory:

```env
PORT=8800
DB_PASSWORD=your_postgresql_password
```

The `.env` file contains sensitive information and should not be committed to the repository.

## Database Setup

Create a PostgreSQL database named:

```text
student
```

Create the `students` table:

```sql
CREATE TABLE students (
    studentid SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    date_of_birth DATE NOT NULL,
    gender VARCHAR(7) NOT NULL,
    email VARCHAR(254)
);
```

## Running the Application

Start the development server:

```bash
npm run devstart
```

The API will be available at:

```text
http://localhost:8800
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/students` | Retrieve all students |
| GET | `/students/:id` | Retrieve a student by ID |
| POST | `/students` | Create a new student |
| PUT | `/students/:id` | Update student information |
| DELETE | `/students/:id` | Delete a student |

## API Usage

### Get All Students

```http
GET /students
```

Example response:

```json
[
    {
        "studentid": 1,
        "first_name": "Jamie",
        "last_name": "Leeuw",
        "date_of_birth": "2003-05-10",
        "gender": "Male",
        "email": "jamie@example.com"
    }
]
```

### Get Student by ID

```http
GET /students/1
```

Example response:

```json
{
    "studentid": 1,
    "first_name": "Jamie",
    "last_name": "Leeuw",
    "date_of_birth": "2003-05-10",
    "gender": "Male",
    "email": "jamie@example.com"
}
```

### Create a Student

```http
POST /students
```

Request body:

```json
{
    "first_name": "Jamie",
    "last_name": "Leeuw",
    "date_of_birth": "2003-05-10",
    "gender": "Male",
    "email": "jamie@example.com"
}
```

Example response:

```json
{
    "message": "Student created successfully",
    "student": {
        "studentid": 1,
        "first_name": "Jamie",
        "last_name": "Leeuw",
        "date_of_birth": "2003-05-10",
        "gender": "Male",
        "email": "jamie@example.com"
    }
}
```

### Update a Student

```http
PUT /students/1
```

Request body:

```json
{
    "first_name": "Jamie",
    "last_name": "Leeuw",
    "date_of_birth": "2003-05-10",
    "gender": "Male",
    "email": "updated@example.com"
}
```

Example response:

```json
{
    "message": "Student updated successfully"
}
```

### Delete a Student

```http
DELETE /students/1
```

Example response:

```json
{
    "message": "Student deleted successfully"
}
```

## Validation

Incoming student data is validated using Joi before being processed by the controller.

Validation includes:

- First name
- Last name
- Date of birth
- Gender
- Email
- Student ID

Invalid requests return a `400 Bad Request` response.

## Error Handling

The API uses centralized Express error-handling middleware.

Database errors are passed from controllers using:

```javascript
next(err);
```

The centralized error handler logs errors internally and returns a controlled response to the client.

The API also returns `404 Not Found` when a requested student does not exist.

## HTTP Status Codes

| Status Code | Description |
|-------------|-------------|
| 200 | Request successful |
| 201 | Resource created |
| 400 | Invalid request data |
| 404 | Student not found |
| 500 | Internal server error |

## Testing

The API was tested using Postman.

Test cases include:

- Retrieving all students
- Retrieving a student by ID
- Creating students
- Updating students
- Deleting students
- Invalid request data
- Invalid student IDs
- Non-existent students
- Database errors
- HTTP status code handling

## Database

PostgreSQL is used as the persistent data store.

The application connects to PostgreSQL using the `pg` package and retrieves the database password from environment variables.

## License

This project is intended for educational and portfolio purposes.