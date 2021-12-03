import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg
    fill="none"
    height={24}
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    width={24}
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path d="m9 18 6-6-6-6" />
  </Svg>
);

export default SvgComponent;
