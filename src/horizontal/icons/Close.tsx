import React from "react";
import { IconProps } from "../../vertical/icons/types";

export const Close: React.FC<IconProps> = ({
  size = 18,
  fill = "#4C4E64",
  ...rest
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M9 7.58579L13.2929 3.29289C13.6834 2.90237 14.3166 2.90237 14.7071 3.29289C15.0976 3.68342 15.0976 4.31658 14.7071 4.70711L10.4142 9L14.7071 13.2929C15.0976 13.6834 15.0976 14.3166 14.7071 14.7071C14.3166 15.0976 13.6834 15.0976 13.2929 14.7071L9 10.4142L4.70711 14.7071C4.31658 15.0976 3.68342 15.0976 3.29289 14.7071C2.90237 14.3166 2.90237 13.6834 3.29289 13.2929L7.58579 9L3.29289 4.70711C2.90237 4.31658 2.90237 3.68342 3.29289 3.29289C3.68342 2.90237 4.31658 2.90237 4.70711 3.29289L9 7.58579Z"
        fill={fill}
        fillOpacity="0.54"
      />
    </svg>
  );
};
