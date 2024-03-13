import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

// Card Component
import Card from "./components/Card";
function App() {
  const imgArray = [
    {
      userName: "Delba",
      src: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8",
      alt: "Delba image",
      jobDescrciption:
        "Delba is UI/UX wizard who has let more than a 100 clients to success",
    },
    {
      userName: "John",
      src: "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "John image",
      jobDescrciption:
        "John is a part of our AI team which focusses on increasing the customer's revenue",
    },
  ];

  return (
    <>
      <h1 className="bg-green-400 text-black p-5 rounded-xl mb-4">
        Tailwind test
      </h1>
      <Card
        userName={imgArray[0].userName}
        src={imgArray[0].src}
        alt={imgArray[0].alt}
        jobDescrciption={imgArray[0].jobDescrciption}></Card>
      <Card
        userName={imgArray[1].userName}
        src={imgArray[1].src}
        alt={imgArray[1].alt}></Card>
    </>
  );
}

export default App;
