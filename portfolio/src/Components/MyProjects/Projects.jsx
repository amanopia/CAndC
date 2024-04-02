import React from "react";
import { useQuery, gql } from "@apollo/client";

import bookGif from "../../assets/book.png";
import eyePng from "../../assets/eye.png";
const GetTodos = gql`
  {
    publication(host: "devaman.hashnode.dev") {
      title
      posts(first: 10) {
        edges {
          node {
            id
            title
            url
            brief
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

function DisplayData() {
  const { loading, error, data } = useQuery(GetTodos);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return data.publication.posts.edges.map(({ node }) => (
    <div key={node.id} className="flex flex-col p-3 border-2 rounded-xl mb-5">
      {console.log(node)}
      <a href={node.url}>
        <img
          src={node.coverImage.url}
          alt=""
          className="rounded-lg mb-4 transition-all satura hover:saturate-200"
        />
      </a>

      <h1 className="mb-3 font-semibold ">{node.title}</h1>
      <p className="text-slate-400 text-xs">{node.brief}</p>
      <div className="mt-4 flex justify-between">
        <p className="flex items-center gap-2 text-sm text-slate-400">
          <img src={bookGif} alt="" className="h-5" /> {node.readTimeInMinutes}
          &nbsp;min
        </p>

        <p className="flex items-center gap-2 text-sm text-slate-400">
          <img src={eyePng} alt="" className="h-4" />
          {node.views}
        </p>
      </div>
    </div>
  ));
}
const Projects = () => {
  return (
    <div className="p-8">
      Projects
      <DisplayData></DisplayData>
    </div>
  );
};

export default Projects;
