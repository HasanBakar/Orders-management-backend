# Express TypeScript Mongoose User CRUD Project Orders-management-backend

# Intro:

- In this project, It is a comprehensive backend repo for building a user management system with order management capabilities. It utilizes the Express framework, TypeScript for type safety, Mongoose for interacting with a MongoDB database, and provides a modular structure for easy customization.

- Here, we implement with help of using: Mongoose, Express, TypeScript, Joi for validation, bcrypt for password hashing, cors for cross-origin resource sharing, dotenv for environment variables, ts-node-dev for running TypeScript in development, ESLint for code linting and prettier for code formatter.

# Key Features:

- User registration with validation
- User login with password hashing
- Get all users, get user by ID
- Update user details
- Delete user
- Add product object to user orders
- Get all orders of a user
- Get the total price of a user's orders using Mongoose aggregate

# Technologies Used:

- Mongoose
- Express
- TypeScript
- Joi
- bcrypt
- cors
- dotenv
- ts-node-dev
- ESLint
- Prettier

# Prerequisites:

- Node.js and npm installed
- Basic understanding of Express, TypeScript, Mongoose, and MongoDB
- Familiarity with user management and order management concepts

# Getting Started:

### 1. Clone the project repository

```git
   git clone https://github.com/HasanBakar/Orders-management-backend.git
   cd Orders-management-backend
```

### 2. Install dependencies using npm

```npm
npm install

```

### 3.Create a .env file in the root directory with the following content:

```code
DATABASE_URL=your_mongodb_url
PORT=5000

```
