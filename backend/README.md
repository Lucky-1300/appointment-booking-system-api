````md id="read1"
# Appointment Booking Backend API 🚀

A backend API for managing appointment bookings using Node.js, Express.js, MongoDB, and JWT Authentication.

---

## Features

- User Registration & Login
- JWT Authentication
- CRUD Operations for Appointments
- Protected Routes
- MongoDB Atlas Integration
- RESTful APIs
- Error Handling Middleware
- Logger Middleware
- Deployment Ready

---

## Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT
- bcryptjs
- Render
- Postman

---

## Folder Structure

backend/
│
├── controllers/
├── middleware/
├── models/
├── routes/
├── .env
├── .gitignore
├── app.js
├── package.json
└── README.md

---

## Installation

Clone the repository:

```bash
git clone YOUR_GITHUB_REPO_LINK
````

Move into project folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=mysecretkey
```

Start the server:

```bash
npm run dev
```

---

## API Endpoints

### Authentication Routes

| Method | Endpoint           | Description   |
| ------ | ------------------ | ------------- |
| POST   | /api/auth/register | Register User |
| POST   | /api/auth/login    | Login User    |

---

### Appointment Routes

| Method | Endpoint              | Description            |
| ------ | --------------------- | ---------------------- |
| POST   | /api/appointments     | Create Appointment     |
| GET    | /api/appointments     | Get All Appointments   |
| GET    | /api/appointments/:id | Get Single Appointment |
| PUT    | /api/appointments/:id | Update Appointment     |
| DELETE | /api/appointments/:id | Delete Appointment     |

---

## Authentication

JWT Authentication is used to protect routes.

Add token in headers:

```txt
Authorization: Bearer YOUR_TOKEN
```

---

## Deployment

Backend deployed on Render.

MongoDB Atlas used as cloud database.

---

## Testing

APIs tested using Postman.

---

## Author

Lucky Ray

```
```
