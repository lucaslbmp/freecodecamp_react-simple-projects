import { useState } from "react";

export default function RandomColor() {
  const [colorType, setColorType] = useState("hex");
  const [color, setColor] = useState("#000");

  const randomInt = (min, max) => Math.floor((max - min) * Math.random() + min);

  const generateRandomColor = () => {
    let color = Array.from({ length: 3 }, () => randomInt(0, 255));
    colorType === "hex"
      ? setColor(getHex(...color))
      : setColor(getRgb(...color));
  };

  const getRgb = (r, g, b) => `rgb(${r},${g},${b})`;

  const getHex = (...rgb) => {
    let [r, g, b] = rgb.map((c) => c.toString(16));
    return `#${r}${g}${b}`;
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button onClick={() => setColorType("hex")}>Create HEX Color</button>
      <button onClick={() => setColorType("rgb")}>Create RGB Color</button>
      <button onClick={generateRandomColor}>Generate random color</button>
    </div>
  );
}
