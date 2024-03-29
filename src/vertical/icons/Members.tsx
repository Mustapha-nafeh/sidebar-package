import React from "react";
import { IconProps } from "./types";

export const Members: React.FC<IconProps> = ({
  size = 18,
  fill = "#4C4E64",
  ...rest
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 22 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.67 9.12988C17.04 10.0599 18 11.3199 18 12.9999V15.9999H22V12.9999C22 10.8199 18.43 9.52988 15.67 9.12988Z"
        fill={fill}
        fillOpacity="0.87"
      />
      <path
        d="M8 8C10.2091 8 12 6.20914 12 4C12 1.79086 10.2091 0 8 0C5.79086 0 4 1.79086 4 4C4 6.20914 5.79086 8 8 8Z"
        fill={fill}
        fillOpacity="0.87"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 8C16.21 8 18 6.21 18 4C18 1.79 16.21 0 14 0C13.53 0 13.09 0.0999998 12.67 0.24C13.5 1.27 14 2.58 14 4C14 5.42 13.5 6.73 12.67 7.76C13.09 7.9 13.53 8 14 8Z"
        fill={fill}
        fillOpacity="0.87"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 9C5.33 9 0 10.34 0 13V16H16V13C16 10.34 10.67 9 8 9Z"
        fill={fill}
        fillOpacity="0.87"
      />
    </svg>
  );
};
