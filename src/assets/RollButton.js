import * as React from "react";
import Svg, { G, Rect, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */
const RollButton = (props) => (
  <Svg
    width="45px"
    height="45px"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <G id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
      <G id="Reload">
        <Rect
          id="Rectangle"
          fillRule="nonzero"
          x={0}
          y={0}
          width={24}
          height={24}
        />
        <Path
          d="M4,13 C4,17.4183 7.58172,21 12,21 C16.4183,21 20,17.4183 20,13 C20,8.58172 16.4183,5 12,5 C10.4407,5 8.98566,5.44609 7.75543,6.21762"
          id="Path"
          stroke="#787878"
          strokeWidth={1}
          strokeLinecap="round"
        />
        <Path
          d="M9.2384,1.89795 L7.49856,5.83917 C7.27552,6.34441 7.50429,6.9348 8.00954,7.15784 L11.9508,8.89768"
          id="Path"
          stroke="#787878"
          strokeWidth={1}
          strokeLinecap="round"
        />
      </G>
    </G>
  </Svg>
);
export default RollButton;
