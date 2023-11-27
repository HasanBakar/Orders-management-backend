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
PORT=3000

```

### 4. Start the development server:

- i. step 1: this command use for eslint

```code
npm run lint
```

- ii. step 2: this command use for prettier

```code
npm run prettier
```

- iii. step 3: this command use for typecript compiling

```code
npm run build
```

- iv. step 4: this command use for locally run the project

```code
npm run start:dev
```

or

```code
npm run start:prod
```

- v. step 5: Go to browser search bar and paste the url

```code
http://localhost:3000/api
```

# Usage

## API Endpoints

- POST /api/users: Create a new user.

```code
http://localhost:5000/api/users
```

- GET /api/users: Get all users.

```code
http://localhost:3000/api/users
```

- GET /api/users: Get a users with userId.

```code
http://localhost:3000/api/users/:userId
```

- PUT /api/users/:userId: Update user details.

```code
http://localhost:3000/api/users/:userId
```

- DELETE /api/users/:userId: Delete user with help of userId.

```code
http://localhost:3000/api/users/:userId
```

- PUT /api/users/:userId/orders: Add a product object to the orders array for the user.

```code
http://localhost:3000/api/users/:userId/orders
```

- GET /api/users/:userId/orders: Get all orders of a user.

```code
http://localhost:3000/api/users/:userId/orders
```

- GET /api/users/:userId/orders/total-price: Get the total price of a user's orders.

```code
http://localhost:3000/api/users/:userId/orders/total-price
```

# Validation

User input is validated using Joi. Check the Orders-management-backend/src/app/modules/user/user.validator.ts file for validation details.

# Security

Passwords are hashed using bcrypt for enhanced security.
