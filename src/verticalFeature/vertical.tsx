"use client";
import { Fragment, ReactNode } from "react";
import * as rdd from "react-device-detect";
import { useTranslation } from "react-i18next";
import {
  Menu,
  MenuItem,
  MenuItemStyles,
  Sidebar,
  SubMenu,
  menuClasses,
} from "react-pro-sidebar";
import { SidebarHeader } from "../vertical/SidebarHeader";
import { IconProps } from "../vertical/icons/types";


export const SubItemIcon = (props?: IconProps) => (
  <div className={`w-2 h-2 rounded-full ${props?.fill}`} />
);

export type NavItemAction = "LOGOUT" | undefined;

export interface NavItem {
  name: string;
  path?: string;
  icon: (props?: IconProps) => ReactNode;
  suffix?: ReactNode;
  subItems?: NavItem[];
  id?: string;
  action?: NavItemAction;
}

export interface SidebarLayoutProps {
  // Redux State
  collapsed: boolean;
  rtl: boolean;
  theme: string;
  toggled: boolean;
  broken: boolean;
  expanded: boolean;
  open: any;
  navItems: NavItem[]; // Prop representing navigation items
  footerItems: any[]; // Prop representing footer items
  navList: string[];
  imgUrl: string;
  collapsedImgUrl: string;
  pathMapList?: string[];
  dispatch: Function; // Prop representing the dispatch function
  router?: any;
  path?: string;
  setLogoutDialog: Function; // Prop representing the setLogoutDialog function
  // Redux Dispatch functions
  setBroken: (value: boolean) => void;
  setExpanded: (value: boolean) => void;
  setOpen: (payload: { key: string; value: boolean }) => void;
  setCollapsed: (value: boolean) => void;
  setToggled: (value: boolean) => void;
}

const themes: any = {
  light: {
    sidebar: {
      backgroundColor: "#f7f7f9",
      color: "#607489",
    },
    menu: {
      menuContent: "#f7f7f9",
      icon: "#0098e5",
      disabled: {
        color: "#9fb6cf",
      },
    },
  },
  dark: {
    sidebar: {
      backgroundColor: "#0b2948",
      color: "#8ba1b7",
    },
    menu: {
      menuContent: "#082440",
      icon: "#59d0ff",
      disabled: {
        color: "#3e5e7e",
      },
    },
  },
};

export const SidebarLayout: React.FC<SidebarLayoutProps> = ({
  collapsed,
  rtl,
  theme,
  toggled,
  broken,
  expanded,
  open,
  navItems,
  footerItems,
  navList,
  dispatch,
  router,
  path,
  imgUrl,
  collapsedImgUrl,
  // pathMapList,
  setLogoutDialog,
  setBroken,
  setExpanded,
  setOpen,
  setToggled,
  setCollapsed
}) => {
  // const router = useRouter();
  // const dispatch = useAppDispatch();
  // const path = usePathname();
  // const param = useParams();
  // const id = param?.id;
  const handleToggle = () => {
    dispatch(setToggled(!toggled));
  };

  const handleCollapse = () => {
    dispatch(setCollapsed(!collapsed));
  };

  // const {
  //   data,
  //   refetch,
  //   isSuccess: foldersSuccess,
  // } = useGetAllFoldersQuery(undefined);

  // const [logout, { isLoading, isError }] = useLogoutMutation();


  const { t } = useTranslation();

  const menuItemStyles: MenuItemStyles = {
    root: {
      backgroundColor: "var(--main-bg)", //behind the curve
      fontSize: "13px",
      fontWeight: 400,
    },
    icon: {
      color: themes[theme].menu.icon,
      [`&.${menuClasses.disabled}`]: {
        color: themes[theme].menu.disabled.color,
      },
    },
    SubMenuExpandIcon: {
      display: collapsed && !expanded ? "none" : undefined,
      marginRight: "25px",
      marginBottom: "4px !important",
    },
    subMenuContent: ({ level }) => ({
      backgroundColor: level === 0 ? "white" : "transparent",
    }),
    button: () => ({
      padding: "0px 0px",
      margin: "0px 0px",
      height: "35px",
      [`&.${menuClasses.disabled}`]: {
        color: "#9fb6cf",
      },
    }),
    label: ({ open }) => ({
      fontWeight: open ? 600 : undefined,
    }),
  };

  

  // Split the URL into parts
  const urlParts = path?.split("/");

  // Extract the first two items
  const firstTwoItems = urlParts?.slice(0, 2).join("/");


  return (
    <div
      className="flex h-full overflow-auto relative z-[101] "
      style={{ borderTopRightRadius: 40, borderBottomRightRadius: 40 }}
    >
      {/* <LogoutDialog/> */}
      {collapsed && !broken && <div className="h-2 w-[83px]" />}
      <Sidebar
        collapsed={collapsed && !expanded}
        toggled={toggled}
        onBackdropClick={() => dispatch(setToggled(false))}
        onBreakPoint={(value: boolean) => dispatch(setBroken(value))}
        rtl={rtl}
        breakPoint="xl"
        backgroundColor={"#003F6D"}
        style={{ borderTopRightRadius: 40, borderBottomRightRadius: 40 }}
        rootStyles={{
          width: "15vw",
          color: themes[theme].sidebar.color,
          border: "none",
          position: collapsed && !broken ? "fixed" : undefined,
          top: collapsed && !broken ? 0 : undefined,
          bottom: collapsed && !broken ? 0 : undefined,
          minHeight: collapsed && !broken ? "100vh" : undefined,
          zIndex: 100,
          boxShadow:
            collapsed && !broken && expanded
              ? "0px 0px 10px #0000001a"
              : undefined,
          transition: "all 0.3s ease-in-out",
        }}
        onMouseEnter={() => {
          if (collapsed && !broken && !rdd.isMobile)
            dispatch(setExpanded(true));
        }}
        onMouseLeave={() => dispatch(setExpanded(false))}
      >
        <div
          style={{
            display: "flex",

            backgroundColor: "#003F6D",
            color: "white",
            flexDirection: "column",
            height: "100%",
            borderTopRightRadius: 40,
            borderBottomRightRadius: 40,
            position: "relative",
          }}
          id="noScrollBar"
        >
          <SidebarHeader
            collapsed={collapsed}
            expanded={expanded}
            toggled={toggled}
            broken={broken}
            onToggle={handleToggle}
            onCollapse={handleCollapse}
            imgUrl={imgUrl}
            collapsedImgUrl={collapsedImgUrl}
            style={{ marginBottom: "24px", marginTop: "6px" }} />
          <div
            style={{
              flex: 1,
              marginBottom: "10px",
              paddingLeft: `${collapsed && !expanded ? "1rem" : "2rem"}`,
              position: "relative",
              top: "-0.7rem",
              transition: "all 0.3s ease-in-out",
            }}
          >
            <Menu menuItemStyles={menuItemStyles}>
              {navItems.map((item: NavItem, index: number) => {
                if (item.subItems) {
                  if (path)
                    return (
                      <div key={index}>
                        <SubMenu
                          style={{
                            backgroundColor: "#003F6D",
                            paddingLeft: 10,
                            borderBottomRightRadius:
                              navList.indexOf(path) -
                                navList.indexOf(`${item.path}`) ==
                              1
                                ? 40
                                : 0,
                            borderTopRightRadius:
                              navList.indexOf(`${item.path}`) -
                                navList.indexOf(path) ==
                              1
                                ? 40
                                : 0,
                          }}
                          label={expanded || !collapsed ? t(item.name) : ""}
                          onClick={() => {
                            dispatch(
                              setOpen({
                                key: `${item.path}`,
                                value: !open[`${item.path}`],
                              })
                            );
                          }}
                          className=""
                          icon={item.icon({
                            fill: path != `${item.path}` ? "white" : "#003F6D",
                            size: 25,
                          })}
                        >
                          {item.subItems.map((subItem: any,index:number) => {
                            return (
                              <div
                                key={index}
                                className={`${
                                  path == `${item.path}/${subItem.path}`
                                    ? "rounded-l-full overflow-hidden h-10 flex items-center "
                                    : ""
                                }pl-3 `}
                                style={{
                                  backgroundColor:
                                    path === `${item.path}/${subItem.path}` ||
                                    (`${item.path}/${subItem.path}` !== "/" &&
                                      `${item.path}/${subItem.path}` &&
                                      path.includes(
                                        `${item.path}/${subItem.path}`
                                      ))
                                      ? "var(--main-bg)"
                                      : "#003F6D",
                                }}
                              >
                                <MenuItem
                                  onClick={() => {
                                    if (subItem.path && item.path) {
                                      dispatch(setToggled(false));
                                      router.push(
                                        `${item.path}/${subItem.path}`
                                      );
                                    }
                                  }}
                                  icon={
                                    <SubItemIcon
                                      fill={
                                        path != `${item.path}/${subItem.path}`
                                          ? "bg-white"
                                          : "bg-[#003F6D]"
                                      }
                                    />
                                  }
                                  style={{
                                    borderBottomRightRadius:
                                      navList.indexOf(path) -
                                        navList.indexOf(
                                          `${item.path}/${subItem.path}`
                                        ) ==
                                      1
                                        ? 40
                                        : 0,
                                    borderTopRightRadius:
                                      navList.indexOf(
                                        `${item.path}/${subItem.path}`
                                      ) -
                                        navList.indexOf(path) ==
                                      1
                                        ? 40
                                        : 0,
                                    backgroundColor:
                                      path === `${item.path}/${subItem.path}`
                                        ? "var(--main-bg)" //selected item
                                        : "#003F6D",
                                    color:
                                      path != `${item.path}/${subItem.path}`
                                        ? "white"
                                        : "#003F6D",
                                  }}
                                >
                                  {t(subItem.name)}
                                </MenuItem>
                              </div>
                            );
                          })}
                        </SubMenu>
                      </div>
                    );
                } else {


                  if (path)
                    return (
                      <div
                        key={index}
                        className={`${
                          path == item.path || (firstTwoItems == item.path && firstTwoItems !== '/broadcast')
                            ? "rounded-l-full overflow-hidden h-10 flex items-center space-y-4 "
                            : ""
                        }pl-2  `}
                        style={{
                          backgroundColor:
                            path === item.path ||
                            (item.path !== "/" &&
                              item.path &&
                              path.includes(item.path))
                              ? "var(--main-bg)"
                              : "#003F6D",
                        }}
                      >
                        <MenuItem
                          onClick={() => {
                            if (item.path) {
                              dispatch(setToggled(false));
                              router.push(item.path);
                            }
                          }}
                          icon={item.icon({
                            fill:
                              path != item.path &&
                              firstTwoItems &&
                              firstTwoItems != item.path
                                ? "white"
                                : "#003F6D",
                            size: 25,
                          })}
                          style={{
                            borderBottomRightRadius:
                              navList.indexOf(path) -
                                navList.indexOf(`${item.path}`) ==
                                1 ||
                              (firstTwoItems && firstTwoItems !== '/broadcast' &&
                                navList.indexOf(firstTwoItems) -
                                  navList.indexOf(`${item.path}`) ==
                                  1)
                                ? 40
                                : 0,
                            borderTopRightRadius:
                              navList.indexOf(`${item.path}`) === 0
                                ? 0
                                : navList.indexOf(`${item.path}`) -
                                    navList.indexOf(path) ==
                                    1 ||
                                  (firstTwoItems && firstTwoItems !== '/broadcast' &&
                                    navList.indexOf(`${item.path}`) -
                                      navList.indexOf(firstTwoItems) ==
                                      1)
                                ? 40
                                : 0,
                            backgroundColor:
                              path === item.path ||
                              (item.path !== "/" &&
                                item.path &&
                                path.includes(item.path))
                                ? "var(--main-bg)"
                                : "#003F6D",
                            color:
                              path === item.path ||
                              (item.path !== "/" &&
                                item.path &&
                                path.includes(item.path)) ||
                              firstTwoItems === item.path && firstTwoItems !== '/broadcast' 
                                ? "#003F6D"
                                : undefined,
                            width: item.name === "" ? "101%" : "",
                          }}
                        >
                          {expanded || !collapsed ? t(item.name) : ""}
                        </MenuItem>
                      </div>
                    );
                }
              })}
            </Menu>
          </div>
          <Menu
            menuItemStyles={menuItemStyles}
            style={{
              marginBottom: "10px",
              paddingLeft: `${collapsed && !expanded ? "1rem" : "2rem"}`,
              transition: "all 0.3s ease-in-out",
            }}
          >
            <div
              style={{
                height: "1.5px",
                backgroundColor: "#4C4E6444",
                margin: "15px auto",
                width:
                  collapsed && !expanded
                    ? "calc(100% - 30px)"
                    : "calc(100% - 40px)",
                transition: "all 0.3s ease-in-out",
              }}
            />
            {footerItems.map((item, index: number) => {
              if (item.subItems) {
                if (path)
                  return (
                    <Fragment key={index}>
                      <SubMenu
                        style={{
                          paddingLeft: 8,
                          backgroundColor: "#003F6D",
                        }}
                        label={expanded || !collapsed ? t(item.name) : ""}
                        onClick={() => {
                          dispatch(
                            setOpen({
                              key: `${item.path}`,
                              value: !open[`${item.path}`],
                            })
                          );
                        }}
                        icon={item.icon({
                          size: 25,
                          fill: path != `${item.path}` ? "white" : "#003F6D",
                        })}
                      >
                        {item.subItems.map((subItem: any) => {
                          return (
                            <div
                              key={index}
                              className={`${
                                path == `${item.path}/${subItem.path}`
                                  ? "rounded-l-full overflow-hidden h-10 flex items-center "
                                  : ""
                              }pl-3 `}
                              style={{
                                backgroundColor:
                                  path === `${item.path}/${subItem.path}` ||
                                  (`${item.path}/${subItem.path}` !== "/" &&
                                    `${item.path}/${subItem.path}` &&
                                    path.includes(
                                      `${item.path}/${subItem.path}`
                                    ))
                                    ? "var(--main-bg)"
                                    : "#003F6D",
                              }}
                            >
                              <MenuItem
                                key={index}
                                onClick={() => {
                                  if (subItem.path && item.path) {
                                    dispatch(setToggled(false));
                                    router.push(`${item.path}/${subItem.path}`);
                                  }
                                }}
                                icon={subItem.icon({
                                  size: 25,
                                  fill:
                                    path != `${item.path}/${subItem.path}`
                                      ? "bg-white"
                                      : "bg-[#003F6D]",
                                })}
                                style={{
                                  borderBottomRightRadius:
                                    navList.indexOf(path) -
                                      navList.indexOf(
                                        `${item.path}/${subItem.path}`
                                      ) ==
                                    1
                                      ? 40
                                      : 0,
                                  borderTopRightRadius:
                                    navList.indexOf(
                                      `${item.path}/${subItem.path}`
                                    ) -
                                      navList.indexOf(path) ==
                                    1
                                      ? 40
                                      : 0,
                                  backgroundColor:
                                    path === `${item.path}/${subItem.path}`
                                      ? "white"
                                      : "#003F6D",
                                  color:
                                    path === `${item.path}/${subItem.path}`
                                      ? "#003F6D"
                                      : undefined,
                                }}
                              >
                                {t(subItem.name)}
                              </MenuItem>
                            </div>
                          );
                        })}
                      </SubMenu>
                    </Fragment>
                  );
              } else {
                if (path)
                  return (
                    <div
                      key={index}
                      className={`${
                        path == item.path
                          ? "rounded-l-full overflow-hidden h-10 flex items-center space-y-4 "
                          : ""
                      }pl-2  `}
                      style={{
                        backgroundColor:
                          path === item.path ||
                          (item.path !== "/" &&
                            item.path &&
                            path.includes(item.path))
                            ? "var(--main-bg)"
                            : "#003F6D",
                      }}
                    >
                      <MenuItem
                        onClick={() => {
                          if (item.path) {
                            dispatch(setToggled(false));
                            router.push(item.path);
                          } else {
                            dispatch(setLogoutDialog(true))
                          }
                        }}
                        icon={item.icon({
                          fill: path === item.path || (item.path && path.includes(item.path)) ? "#003F6D" : "white" ,
                        })}
                        style={{
                          backgroundColor:
                            path === item.path ||
                            (item.path && path.includes(item.path))
                              ? "white"
                              : "#003F6D",
                          color: path === item.path || (item.path && path.includes(item.path)) ? "#003F6D" : "white",
                        }}
                      >
                        {expanded || !collapsed ? t(item.name) : ""}
                      </MenuItem>
                    </div>
                  );
              }
            })}
          </Menu>
        </div>
      </Sidebar>
    </div>
  );
}
