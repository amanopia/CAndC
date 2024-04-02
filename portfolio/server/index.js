import express from "express";
import { ApolloServer } from "@apollo/server";
import bodyParser from "body-parser";
import cors from "cors";
import { expressMiddleware } from "@apollo/server/express4";
import axios from "axios";

// type defs contain collection of type definitions that describe the shape of the queries that are executed against the shape of the data

const typeDefs = `#graphql 
  type Book {
    title: String
    author: String
  }

  # Query is a special type that lists all the queries the client can execute along with the return type of each Query
  type Query {
    books: [Book]
  } 
`;
const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];

const resolvers = {
  Query: {
    books: () => books,
  },
};
async function startServer() {
  const app = express();

  const server = new ApolloServer({
    typeDefs: `
    type User {
      id: ID,
      name: String!
      username: String!
      email: String!
      phone: String!
      website: String!
    }

    type Todo {
      id: ID!
      title: String!
      completed: Boolean
      userId: ID!
      user: User
    }
    type Query {
      getTodos: [Todo]
      getAllUsers: [User]
      getUser(id: ID) : User
    }
    `,
    resolvers: {
      Todo: {
        user: async (todo) =>
          (
            await axios.get(
              `https://jsonplaceholder.typicode.com/users/${todo.userId}`
            )
          ).data,
      },
      Query: {
        getTodos: async () =>
          (await axios.get("https://jsonplaceholder.typicode.com/todos")).data,
        getAllUsers: async () =>
          (await axios.get("https://jsonplaceholder.typicode.com/users")).data,
        getUser: async (parent, { id }) =>
          (await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`))
            .data,
      },
    },
  });

  app.use(bodyParser.json());
  app.use(cors());

  await server.start();

  app.use("/graphql", expressMiddleware(server));

  app.listen(8000, () => console.log("Server started at port 8000"));
}

startServer();
