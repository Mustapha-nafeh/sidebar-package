import React from "react";
import { IconProps } from "./types";

export const Staff: React.FC<IconProps> = ({
  size = 18,
  fill = "#4C4E64",
  ...rest
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M16 2H15V0H13V2H5V0H3V2H2C0.89 2 0 2.9 0 4V18C0 19.1 0.89 20 2 20H16C17.1 20 18 19.1 18 18V4C18 2.9 17.1 2 16 2ZM9 5C10.66 5 12 6.34 12 8C12 9.66 10.66 11 9 11C7.34 11 6 9.66 6 8C6 6.34 7.34 5 9 5ZM15 17H3V16C3 14 7 12.9 9 12.9C11 12.9 15 14 15 16V17Z"
        fill={fill}
        fillOpacity="0.87"
      />
    </svg>
  );
};
