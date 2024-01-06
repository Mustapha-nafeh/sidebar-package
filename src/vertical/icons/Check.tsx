import React from "react";
import { IconProps } from "./types";

export const Check: React.FC<IconProps> = ({
  size = 18,
  fill = "#4C4E64",
  ...rest
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 19 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d="M11 4H0V6H11V4Z" fill={fill} />
      <path d="M11 0H0V2H11V0Z" fill={fill} />
      <path d="M7 8H0V10H7V8Z" fill={fill} />
      <path
        d="M17.5901 5.92969L13.3401 10.1697L11.2201 8.04969L9.81006 9.45969L13.3401 12.9997L19.0001 7.33969L17.5901 5.92969Z"
        fill={fill}
      />
    </svg>
  );
};
