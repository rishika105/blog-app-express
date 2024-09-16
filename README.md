# Blog App (Express)

This is a simple Blog Application built with **Express.js**. The app provides functionality to create, like, and comment on blog posts. It follows a Model-Route-Controller (MRC) structure, allowing for clear separation of concerns between the data models, controllers, and routes.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/rishika105/blog-app-express.git
   ```

2. Navigate to the project directory:
   ```bash
   cd blog-app-express
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add the necessary environment variables (e.g., database connection string).

5. Start the server:
   ```bash
   npm start
   ```

## Features

- **Post Creation:** Users can create blog posts with titles and content.
- **Likes:** Users can like blog posts.
- **Comments:** Users can add comments to blog posts.

## Technologies Used

- **Express.js:** Web framework for building RESTful APIs.
- **MongoDB:** NoSQL database for storing blog posts, likes, and comments.
- **Mongoose:** ODM library for MongoDB, used for data modeling.
- **Node.js:** JavaScript runtime for backend services.
- **Dotenv:** For managing environment variables.

## Usage (Postman)

1. **Create a Post:**
   Send a POST request to `/api/posts` with a `title` and `content` in the request body.

2. **Like a Post:**
   Send a POST request to `/api/posts/:id/like` to like a specific post.

3. **Comment on a Post:**
   Send a POST request to `/api/posts/:id/comment` with a `comment` in the request body to add a comment to a post.

