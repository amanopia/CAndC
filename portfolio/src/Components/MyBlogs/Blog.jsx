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
      <div className="p-3 border-2 rounded-xl mb-5 flex flex-col sm:flex-row sm:items-stretch xl:h-full xl:flex-col xl:gap-12 dark:border-slate-500">
        <img
          src={node.coverImage.url}
          alt=""
          className="rounded-lg mb-4 transition-all hover:saturate-200 sm:h-56 sm:w-64  sm:object-cover sm:mb-0 sm:mr-4 md:h-80 md:w-96 xl:h-52 xl:w-full 2xl:h-56"
        />
        <div className="flex flex-col justify-between xl:h-full ">
          <div>
            <h1 className="mb-3 font-semibold text-lg md:text-2xl lg:text-4xl xl:text-4xl">
              {node.title}
            </h1>
            <p className="text-slate-400 text-xs md:text-sm xl:text-base 2xl:text-lg">
              {node.brief}
            </p>
          </div>

          {/* read time and views count */}
          <div className="mt-4 flex justify-between">
            <p className="flex items-center gap-2 text-sm lg:text-base 2xl:text-lg text-slate-400">
              <img
                src={bookGif}
                alt=""
                className="h-5
               icons lg:h-5 2xl:h-7 dark:invert"
              />
              {node.readTimeInMinutes}
              &nbsp;min
            </p>

            <p className="flex items-center gap-2 text-sm lg:text-base 2xl:text-lg text-slate-400">
              <img
                src={eyePng}
                alt=""
                className="h-4 icons lg:h-5 2xl:h-6 dark:invert"
              />
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
    <div className="p-8 mb-14">
      <div className="gap-2 xl:flex xl:flex-row 2xl:flex-row">
        <DisplayData></DisplayData>
      </div>
      <button className="text-slate-400 text-xs md:text-sm xl:text-base mt-10 border-dotted p-2 border-4 hover:text-black hover:border-black transition-all dark:hover:text-white dark:hover:border-white">
        More blogs coming soon
      </button>
    </div>
  );
};

export default Blogs;
