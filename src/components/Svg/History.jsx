import * as React from "react";
import Svg, { Path } from "react-native-svg";
const History = (props) => (
  <Svg
    width={40}
    height={40}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
    <Path
      d="M5.818 6.727V14h7.273"
      stroke="#787878"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M4 24c0 11.046 8.954 20 20 20v0c11.046 0 20-8.954 20-20S35.046 4 24 4c-7.402 0-13.865 4.021-17.323 9.998"
      stroke="#787878"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="m24.005 12-.001 12.009 8.48 8.48"
      stroke="#787878"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default History;
