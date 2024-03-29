import React from "react";
import { IconProps } from "./types";

export const Reports: React.FC<IconProps> = ({
  size = 18,
  fill = "#4C4E64",
  ...rest
}) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M2 4H0V18C0 19.1 0.9 20 2 20H16V18H2V4ZM18 0H6C4.9 0 4 0.9 4 2V14C4 15.1 4.9 16 6 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM17 9H7V7H17V9ZM13 13H7V11H13V13ZM17 5H7V3H17V5Z"
        fill={fill}
        fillOpacity="0.87"
      />
    </svg>
  );
};
