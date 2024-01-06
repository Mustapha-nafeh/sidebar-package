import React from "react";
import { IconProps } from "../../vertical/icons/types";

export const ExpandNavbar: React.FC<IconProps> = ({
  size = 18,
  fill = "#4C4E64",
  ...rest
}) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24.000000 24.000000"
      preserveAspectRatio="xMidYMid meet"
      {...rest}
    >
      <path
        d="M4 18L20 18"
        stroke={fill}
        strokeOpacity={0.54}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M4 12L20 12"
        stroke={fill}
        strokeOpacity={0.54}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M4 6L20 6"
        stroke={fill}
        strokeOpacity={0.54}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};
