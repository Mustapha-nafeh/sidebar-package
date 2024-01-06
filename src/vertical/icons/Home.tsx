import React from "react";
import { IconProps } from "./types";

export const Home: React.FC<IconProps> = ({
  size = 18,
  fill = "#4C4E64",
  ...rest
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M8 17V11H12V17H17V9H20L10 0L0 9H3V17H8Z"
        fill={fill}
        fillOpacity="0.87"
      />
    </svg>
  );
};
