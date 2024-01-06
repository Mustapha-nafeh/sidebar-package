import styled from "@emotion/styled";
import React from "react";
import { Expand } from "./icons/Expand";
// import {
//   setCollapsed,
//   setToggled,
// } from "@/core/features/layout/redux/layout-slice";
import { Close } from "../horizontal/icons/Close";

interface SidebarHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    collapsed: boolean;
    expanded: boolean;
    toggled: boolean;
    broken: boolean;
    onToggle: () => void;
    onCollapse: () => void;
    imgUrl?: string;
    collapsedImgUrl?: string;
  }

const StyledSidebarHeader = styled.div`
  height: 64px;
  min-height: 64px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: transparent;
  > div {
    width: 100%;
    overflow: hidden;
  }
`;

const StyledLogo = styled.div`
  color: var(--primary);
  font-size: 24px;
  font-weight: 700;
`;

export const SidebarHeader: React.FC<SidebarHeaderProps> = ({
    children,
    collapsed,
    expanded,
    toggled,
    broken,
    onToggle,
    onCollapse,
    imgUrl,
    collapsedImgUrl,
  ...rest
}) => {
    return (
      <StyledSidebarHeader {...rest} style={{ backgroundColor: "#003F6D" }}>
        <div
          className={`flex items-center justify-between w-full ${
            collapsed && !expanded ? "flex-col " : "flex-row"
          } cursor-pointer select-none mt-6`}
          onClick={() => {
            if (broken) {
              onToggle(); // Call the provided onToggle function
            } else {
              onCollapse(); // Call the provided onCollapse function
            }
          }}
        style={{
          transition: "all 0.3s ease-in-out",
          backgroundColor: "#003F6D",
        }}>
        {collapsed && !expanded ? (
          <StyledLogo>
            <img
              src={collapsedImgUrl}
              alt="logo"
              draggable={false}
              className="cursor-pointer"
              style={{ width: "4rem"}}
              
            />
          </StyledLogo>
        ) : (
          <img
            src={imgUrl}
            alt="logo"
            draggable={false}
            className="cursor-pointer"
            style={{ width: "70%", maxWidth: "calc(100% - 30px)" }}
          />
        )}
        {broken ? (
          <Close size={collapsed || expanded ? 20 : 18} />
        ) : (
          <Expand
            size={collapsed || expanded ? 20 : 18}
            style={{
              transform: collapsed ? "rotate(180deg)" : "rotate(0deg)",
              transition: "all 0.3s ease-in-out",
              marginTop: collapsed ? "10px" : "0px",
              fill:"#ffffff"
            }}
          />
        )}
      </div>
    </StyledSidebarHeader>
  );
};
