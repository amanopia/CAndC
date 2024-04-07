import React from "react";
import { useQuery, gql } from "@apollo/client";

import "./Blogs.css";
import bookGif from "../../assets/book.png";
import eyePng from "../../assets/eye.png";
import Variants from "./Variants.jsx";

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

  if (loading)
    return (
      <div>
        <Variants></Variants>
        <Variants></Variants>
        <Variants></Variants>
      </div>
    );
  if (error) return <p>Error: {error.message}</p>;

  return data.publication.posts.edges.map(({ node }) => (
    <a key={node.id} href={node.url}>
      <div className="p-3 border-2 rounded-xl mb-5 flex flex-col sm:flex-row sm:items-stretch ">
        {console.log(node)}
        <img
          src={node.coverImage.url}
          alt=""
          className="rounded-lg mb-4 transition-all hover:saturate-200 sm:h-56 sm:w-64  sm:object-cover sm:mb-0 sm:mr-4 md:h-80 md:w-96"
        />
        <div className="flex flex-col justify-around">
          <div>
            <h1 className="mb-3 font-semibold text-lg md:text-2xl lg:text-4xl xl:text-5xl">
              {node.title}
            </h1>
            <p className="text-slate-400 text-xs md:text-xs lg:text-lg xl:text-sxl">
              {node.brief}
            </p>
          </div>

          {/* read time and views count */}
          <div className="mt-4 flex justify-between">
            <p className="flex items-center gap-2 text-sm lg:text-lg text-slate-400">
              <img
                src={bookGif}
                alt=""
                className="h-5
               icons lg:h-7"
              />
              {node.readTimeInMinutes}
              &nbsp;min
            </p>

            <p className="flex items-center gap-2 text-sm lg:text-lg text-slate-400">
              <img src={eyePng} alt="" className="h-4 icons lg:h-6" />
              {node.views}
            </p>
          </div>
        </div>
      </div>
    </a>
  ));
}
const Blogs = () => {
  return (
    <div className="p-8 xl:flex">
      <DisplayData></DisplayData>
    </div>
  );
};

export default Blogs;
