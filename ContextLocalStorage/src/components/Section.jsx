import { useContext } from "react";
import { LevelContext } from "../contexts/LevelContext";

export default function Section({ children, isFancy }) {
  const level = useContext(LevelContext);
  return (
    <section
      className={"section " + isFancy ? "fancy" : ""}
      style={{
        padding: "1rem",
        border: "1px solid black",
        borderRadius: "10px",
      }}>
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}
