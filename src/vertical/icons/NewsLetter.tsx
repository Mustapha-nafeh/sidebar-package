import React from "react";
import { IconProps } from "./types";

export const NewsLetter: React.FC<IconProps> = ({
  size = 18,
  fill = "#4C4E64",
  ...rest
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M0 12H5V10H0V12ZM6.5 12H11.5V10H6.5V12ZM13 12H18V10H13V12ZM0 16H2V14H0V16ZM4 16H6V14H4V16ZM8 16H10V14H8V16ZM12 16H14V14H12V16ZM16 16H18V14H16V16ZM0 8H8V6H0V8ZM10 8H18V6H10V8ZM0 0V4H18V0H0Z"
        fill={fill}
        fillOpacity="0.87"
      />
    </svg>
  );
};
