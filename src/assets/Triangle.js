import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Triangle = (props) => (
  <Svg
    fill="#000000"
    width="75px"
    height="100px"
    viewBox="1 1 22 23"
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    {...props}
  >
    <Path d="M21.9,19.3l-9-15.6c-0.1-0.1-0.2-0.2-0.3-0.3c-0.5-0.3-1.1-0.2-1.4,0.3l-9,15.6C2,19.4,2,19.6,2,19.8c0,0.6,0.4,1,1,1h18c0.2,0,0.3,0,0.5-0.1C22,20.4,22.1,19.8,21.9,19.3z" />
  </Svg>
);
export default Triangle;
