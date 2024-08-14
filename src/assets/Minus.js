import * as React from "react";
import Svg, { Line } from "react-native-svg";
const Minus = (props) => (
  <Svg
    fill="#000000"
    width="75px"
    height="100px"
    viewBox="0 0 24 24"
    id="minus"
    data-name="Flat Line"
    xmlns="http://www.w3.org/2000/svg"
    className="icon flat-line"
    {...props}
  >
    <Line
      id="primary"
      x1={19}
      y1={12}
      x2={5}
      y2={12}
      style={{
        fill: "none",
        stroke: "rgb(0, 0, 0)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 0.5,
      }}
    />
  </Svg>
);
export default Minus;
