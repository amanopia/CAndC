import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
const Github = () => {
  const data = useLoaderData();
  // const [data, setFollowerCount] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/amanopia")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((res) => {
  //       console.log(res);
  //       setFollowerCount(res);
  //     });
  // }, []); // This will be called as soon as the component mounts
  return (
    <div className="center m-4 bg-gray-500 text-white p-4 3xl">
      Github followers : {data.followers}
      <img src={data.avatar_url} alt="github picture" />
    </div>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/amanopia");
  return response.json();
};
