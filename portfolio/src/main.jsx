import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://gql.hashnode.com",
  cache: new InMemoryCache(),
});

const query = `
{
  publication(host: "devaman.hashnode.dev") {
    title
    posts(first: 10) {
      edges {
        node {
          id
          title
          url
          author {
            name
          }
          coverImage {
            url
          }
          
          views
          readTimeInMinutes
        }
      }
      
    }
  }
}
`;
client
  .query({
    query: gql`
      ${query}
    `,
  })
  .then((res) => console.log(res));

import Layout from "./Layout.jsx";
import { About, Technologies, Blogs, Experience } from "./index.js";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout></Layout>}>
      <Route path="" element={<About></About>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route
        path="/technologies"
        element={<Technologies></Technologies>}></Route>
      <Route path="/blogs" element={<Blogs></Blogs>}></Route>
      <Route path="/experience" element={<Experience></Experience>}></Route>
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
);

// In graphql the client specifies the data it wants
// todos
// todos {
//   title
// } only fetches the title and not all the data of the todos

// Intead of two api calls, one for title and one for user name, it will be nested in just one call

// I want title and the name of the user who created the todo
// todos {
//   title
//   user {
//     name
//   }
// }
