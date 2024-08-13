import * as React from "react";
import Svg, { Path } from "react-native-svg";
const HorizontalDiamond = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={75}
    height={100}
    viewBox="0 0 6.5 6.5"
    xmlSpace="preserve"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.049 6.151a.267.267 0 0 0 .388 0l2.738-2.738a.267.267 0 0 0 0-.388L3.451.3a.267.267 0 0 0-.388 0L.325 3.037a.267.267 0 0 0 0 .388z"
    />
  </Svg>
);
export default HorizontalDiamond;