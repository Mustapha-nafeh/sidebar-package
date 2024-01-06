import React from "react";
import { IconProps } from "./types";

export const Expand: React.FC<IconProps> = ({ size = 18,fill="#ffffff", ...rest }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g clipPath="url(#clip0_1_6)">
        <path
          d="M7.48542 0.8882C7.00818 0.410965 6.23443 0.410965 5.75719 0.8882L0.510324 6.13507C0.033017 6.61238 0.033017 7.38625 0.510324 7.86355L5.75719 13.1104C6.23443 13.5877 7.00818 13.5877 7.48542 13.1104C7.96265 12.6332 7.96265 11.8594 7.48542 11.3822L3.96677 7.86355C3.48946 7.38625 3.48946 6.61238 3.96677 6.13507L7.48542 2.61642C7.96265 2.13919 7.96265 1.36544 7.48542 0.8882Z"
          fill={fill}
          fillOpacity="0.6"
        />
        <path
          d="M11.8683 0.8882L6.62141 6.13507C6.1441 6.61238 6.1441 7.38625 6.62141 7.86355L11.8683 13.1104C12.3455 13.5877 13.1193 13.5877 13.5965 13.1104C14.0737 12.6332 14.0737 11.8594 13.5965 11.3822L10.0779 7.86355C9.60055 7.38625 9.60055 6.61238 10.0779 6.13507L13.5965 2.61642C14.0737 2.13919 14.0737 1.36544 13.5965 0.8882C13.1193 0.410965 12.3455 0.410965 11.8683 0.8882Z"
          fill={fill}
          fillOpacity="0.38"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_6">
          <rect width="14" height="14" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
