import { useState } from "react";
import ColoerChanger from "./ColoerChanger";

function Buttons() {
  const [color, setColor] = useState("WHITE");
  return (
    <>
      <button
        onClick={() => {
          setColor("WHITE");
        }}
      >
        White
      </button>
      <button
        onClick={() => {
          setColor("BLACK");
        }}
      >
        Black
      </button>
      <button
        onClick={() => {
          setColor("PINK");
        }}
      >
        Pink
      </button>
      <button
        onClick={() => {
          setColor("RED");
        }}
      >
        Red
      </button>
      <ColoerChanger coloer={color}></ColoerChanger>
    </>
  );
}

export default Buttons;
