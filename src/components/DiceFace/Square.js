import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Square = (props) => (
  <Svg
    fill="#000000"
    width="75px"
    height="100px"
    viewBox="0 0 15 15"
    id="square"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M13,14H2c-0.5523,0-1-0.4477-1-1V2c0-0.5523,0.4477-1,1-1h11c0.5523,0,1,0.4477,1,1v11C14,13.5523,13.5523,14,13,14z" />
  </Svg>
);
export default Square;
