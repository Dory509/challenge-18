# Social Network API

This project is a social network API built with Express.js, MongoDB, and Mongoose. It provides a backend for managing users, thoughts, and reactions, allowing for a fully functional social networking experience.

## Features

- User management: Create, update, delete, and retrieve users.
- Thought management: Create, update, delete, and retrieve thoughts.
- Reaction management: Add and remove reactions to thoughts.
- Friend management: Add and remove friends from user profiles.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JavaScript

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd social-network-api
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Create a `.env` file in the root directory and add your MongoDB connection string:
   ```
   MONGODB_URI=<your-mongodb-connection-string>
   ```

## Usage

1. Start the server:
   ```
   npm run start
   ```
2. The API will be available at `http://localhost:3000`.

## API Endpoints

- **Users**
  - `GET /api/users` - Retrieve all users
  - `GET /api/users/:userId` - Retrieve a single user by ID
  - `POST /api/users` - Create a new user
  - `PUT /api/users/:userId` - Update a user by ID
  - `DELETE /api/users/:userId` - Delete a user by ID
  - `POST /api/users/:userId/friends/:friendId` - Add a friend
  - `DELETE /api/users/:userId/friends/:friendId` - Remove a friend

- **Thoughts**
  - `GET /api/thoughts` - Retrieve all thoughts
  - `GET /api/thoughts/:thoughtId` - Retrieve a single thought by ID
  - `POST /api/thoughts` - Create a new thought
  - `PUT /api/thoughts/:thoughtId` - Update a thought by ID
  - `DELETE /api/thoughts/:thoughtId` - Delete a thought by ID
  - `POST /api/thoughts/:thoughtId/reactions` - Add a reaction to a thought
  - `DELETE /api/thoughts/:thoughtId/reactions/:reactionId` - Remove a reaction from a thought

## Walkthrough Video

A walkthrough video demonstrating the functionality of the API can be found at: [Walkthrough Video Link](<insert-link-here>)

## License

This project is licensed under the MIT License.