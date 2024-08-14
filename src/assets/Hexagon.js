import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Hexagon = (props) => (
  <Svg
    width="75px"
    height="100px"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...props}
  >
    <Path
      fill="#000000"
      d="M9.166.33a2.25 2.25 0 00-2.332 0l-5.25 3.182A2.25 2.25 0 00.5 5.436v5.128a2.25 2.25 0 001.084 1.924l5.25 3.182a2.25 2.25 0 002.332 0l5.25-3.182a2.25 2.25 0 001.084-1.924V5.436a2.25 2.25 0 00-1.084-1.924L9.166.33z"
    />
  </Svg>
);
export default Hexagon;
