# Events Management API

- NodeJS API

- This API is built using [Express.js](https://expressjs.com/) web framework, and is using [Typescript](https://www.typescriptlang.org/).
- `process.env` - [DotEnv](https://github.com/motdotla/dotenv) for storing custom constant configurations.
  -For Database, [MongoDB](https://www.mongodb.com/) and [Mongoose](https://mongoosejs.com/) object modeling.
- For Routing - [express](https://expressjs.com/en/guide/routing.html)

# initial configuration

## loads environment variables from a .env file into process.env.

### Usage

Create a `.env` file in the root of your project:

```dosini
PORT="SERVERRUNNINGPORT EX. 8000"
MONGODB_CNN="YOURMONGODBCONNECTION"
```

In the project directory, you can run:

### `npm install`

To install all dependencies

# Local deployment

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
API [http://localhost:8000/api](http://localhost:8000/api)

# Load Data

For user:

```sh

# API Routes:
+--------+-------------------------+
  Method | URI
+--------+-------------------------+
  Get    | /api/users/seed
+--------+-------------------------+

```

That will populate database with users:

```sh

# API Routes:
+----------+-------------------------+
  USERNAME | PASSWORD
+----------+-------------------------+
  "user"   | "prueba"
+----------+-------------------------+
  "staff"  | "prueba"
+----------+-------------------------+
  "admin"  | "prueba"
+----------+-------------------------+

```
