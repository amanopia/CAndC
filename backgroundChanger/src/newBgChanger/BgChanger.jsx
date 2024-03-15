import { useState, useRef } from "react";
import "./bgChanger.css";

import styled from "styled-components";
const Tab = styled.div`
  height: 100%;
  background: #fff;
  border-radius: 3%;

  transition: all 0.4s ease;
`;

export default function BgChanger() {
  const radialGradientArr = [
    "200% 107.13% at 50% 100%, #fff 25.41%, #63e 45.27%, #000 100%",
    "200% 107.13% at 50% 100%, #edf2f4 30.41%, #ff5400 43.27%, #ff0054 53.45%, #390099 100%",
    "200% 107.13% at 50% 100%, #edf2f4 30.41%, #8d99ae 47.27%, #ef233c 80.5%, #2b2d42 100%",
    "200% 107.13% at 50% 100%, #fffcf2 20.41%, #403d39 50.45%, #eb5e28 90%",
  ];

  const [gradient, setGradient] = useState(radialGradientArr[3]);

  return (
    <div className="parentContainer">
      {/* element 1 */}
      <div className="tab">
        <div className="tab-icons">
          <div className="tab-icon"></div>
          <div className="tab-icon"></div>
          <div className="tab-icon"></div>
        </div>

        <Tab
          className="tabInnerContent p-4 duration-200"
          style={{ background: `radial-gradient(${gradient})` }}>
          <nav>
            <p>Prospire</p>
            <ul>
              <li>Home</li>
              <li>Our service</li>
              <li>Best Collection</li>
              <li>About us</li>
            </ul>
          </nav>
          <div>
            <p>Generate your vision</p>
            <h1>Crafting your fantasies with a twist of creativity</h1>
          </div>
        </Tab>
      </div>
      {/* element 2 */}
      <div className="colorBar">
        {radialGradientArr.map((gradient, index) => {
          return (
            <button
              key={index}
              onClick={() => setGradient(gradient)}
              className="colorBox"
              style={{ background: `radial-gradient(${gradient})` }}></button>
          );
        })}
      </div>
    </div>
  );
}
