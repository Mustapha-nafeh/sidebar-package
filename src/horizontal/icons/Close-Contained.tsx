import React from "react";
import { IconProps } from "../../vertical/icons/types";

export const CloseContained: React.FC<IconProps> = ({
  size = 18,
  fill = "#4C4E64",
  ...rest
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M10 0.5C4.47 0.5 0 4.97 0 10.5C0 16.03 4.47 20.5 10 20.5C15.53 20.5 20 16.03 20 10.5C20 4.97 15.53 0.5 10 0.5ZM15 14.09L13.59 15.5L10 11.91L6.41 15.5L5 14.09L8.59 10.5L5 6.91L6.41 5.5L10 9.09L13.59 5.5L15 6.91L11.41 10.5L15 14.09Z"
        fill={fill}
        fillOpacity="0.54"
      />
    </svg>
  );
};
