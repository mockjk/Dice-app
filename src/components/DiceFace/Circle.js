import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Circle = (props) => (
  <Svg
    fill="#000000"
    width="75px"
    height="100px"
    viewBox="0 0 15 15"
    id="circle"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M14,7.5c0,3.5899-2.9101,6.5-6.5,6.5S1,11.0899,1,7.5S3.9101,1,7.5,1S14,3.9101,14,7.5z" />
  </Svg>
);
export default Circle;
