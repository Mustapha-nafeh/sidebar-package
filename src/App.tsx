
import { useState } from 'react'
import './App.css'
import { NavItem, SubItemIcon } from './verticalFeature/vertical'
import { SidebarLayout } from '@mostafa-nafeh/digitaldojo-sidebar'
import { AIAnalysis } from './vertical/icons/AI-Analysis'
import { Reports } from './vertical/icons/Reports'
import { Broadcasts } from './vertical/icons/Broadcasts'
import { Calendar } from './vertical/icons/Calendar'
import { Resources } from './vertical/icons/Resources'
import { NewsLetter } from './vertical/icons/NewsLetter'
import { Inquiries } from './vertical/icons/Inquiries'
import { Check } from './vertical/icons/Check'
import { Home } from './vertical/icons/Home'
import { Members } from './vertical/icons/Members'
// import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react';

function App() {

  const usePathname = () => {
    const [pathname, setPathname] = useState(window.location.pathname);
  
    useEffect(() => {
      const handleRouteChange = () => {
        setPathname(window.location.pathname);
      };
  
      // Listen for route changes
      window.addEventListener('popstate', handleRouteChange);
  
      return () => {
        // Cleanup: remove event listener when unmounting component
        window.removeEventListener('popstate', handleRouteChange);
      };
    }, []);
  
    return pathname;
  };
  

  const [collapsed, setCollapsed] = useState(false)
  const [toggled, setToggled] = useState(false)
  const [broken, setBroken] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const [open, setOpen] = useState({})
  const [theme] = useState('light')
  const [rtl] = useState(false)
  const [navItems] = useState<NavItem[]>([
    {
      name: "",
      path: "/virtual",
      icon: () => null,
    },
    {
      name: "My Dashboard",
      path: "/",
      icon: (props) => <Home {...props} />,
    },
    {
      name: "Surveys",
      path: "/surveys",
      icon: (props) => <Check {...props} />,
    },
    {
      name: "Inquiries",
      path: "/inquiries",
      icon: (props) => <Inquiries {...props} />,
    },
    {
      name: "Newsletter",
      path: "/newsletter",
      icon: (props) => <NewsLetter {...props} />,
    },
    {
      name: "Resources",
      path: "/resources",
      icon: (props) => <Resources {...props} />,
    },
    {
      name: "Events",
      path: "/events",
      icon: (props) => <Calendar {...props} />,
    },
    {
      name: "Broadcast Tools",
      path: "/broadcast",
      icon: (props) => <Broadcasts {...props} />,
      subItems: [
        {
          name: "SMS Campaign",
          path: "sms-campaign/create-campaign",
          icon: SubItemIcon,
        },
        {
          name: "Email Campaign",
          path: "email-campaign/create-campaign",
          icon: SubItemIcon,
        },
        {
          name: "In App Notifications",
          path: "in-app/create-notification",
          icon: SubItemIcon,
        },
      ],
    },
    {
      name: "AI Chatbot",
      path: "/ai-chatbot",
      icon: (props) => <AIAnalysis {...props} />,
    },
    {
      name: "Reports",
      path: "/reports",
      icon: (props) => <Reports {...props} />,
    },
  
    {
      name: "Members",
      path: "/members",
      icon: (props) => <Members {...props} />,
    },
  ])

  const FooterItemsInit: NavItem[] = [
    {
      name: "Settings",
      path: "/settings",
      icon: (props) => <Home {...props} />,
      subItems: [
        {
          name: "Account",
          path: "account",
          icon: SubItemIcon,
        },
        {
          name: "Notifications",
          path: "notifications",
          icon: SubItemIcon,
        },
        {
          name: "FAQS",
          path: "faq",
          icon: SubItemIcon,
        },
      ],
    },
    {
      name: "Features Management",
      path: "/features-management",
      icon: (props) => <Home {...props} />,
    },
    {
      name: "Provider Support",
      path: "/support",
      icon: (props) => <Home {...props} />,
    },
    {
      name: "Logout",
      action: "LOGOUT",
      path:"",
      icon: (props) => <Home {...props} />,
    },
  ];
  
   const FooterItems = FooterItemsInit.map((item, index) => ({
    ...item,
    id: index,
    subItems: item.subItems?.map((subItem) => ({
      ...subItem,
      id: index + 100,
    })),
  }));
  


  // const [footerItems] = useState([
  // ])
  const [navList] = useState([
  "/virtual",
  "/",
  "/surveys",
  "/inquiries",
  "/newsletter",
  "/resources",
  "/events",
  "/broadcast",
  "/ai-chatbot",
  "/reports",
  "/members",
  "/payments",
  "/management",
  "/staff",
  "/virtual2",
  "/settings",
  "/features-management",
  "/support",
  "",
  ])
  // const [pathMapList, setPathMapList] = useState([
  //   {
  //     name: 'Dashboard',
  //     to: '/dashboard',
  //     icon: 'cil-speedometer',
  //     badge: {
  //       color: 'danger',
  //       text: 'NEW',
  //     },
  //   },
  //   {
  //     name: 'Users',
  //     to: '/users',
  //     icon: 'cil-user',
  //   },
  //   {
  //     name: 'Settings',
  //     to: '/settings',
  //     icon: 'cil-settings',
  //   },
  // ])
  // const [logoutDialog, setLogoutDialog] = useState(false)
  function setLogoutDialog() { console.log('logout dialog')} ;

  const mockUseAppDispatch = () => {
    // Simulating dispatch behavior
    const dispatch = (action: any) => {
      // Here, you can perform any action you need for testing purposes
      console.log('Dispatching action:', action);
      // This is a simple demonstration, you might extend this to perform actual actions in your test environment
    };
  
    return dispatch; // Return the mock dispatch function
  };

  const dummySetOpen = (payload: { key: string; value: boolean }) => {
    setOpen(payload.value);
  };

  // const router = useRouter();
  const path = usePathname();


  return (
    <>

<div className="w-full h-screen flex overflow-hidden">
      <SidebarLayout 
            collapsed={collapsed}
            rtl={rtl}
            theme={theme}
            toggled={toggled}
            broken={broken}
            expanded={expanded}
            open={open}
            navItems={navItems}
            footerItems={FooterItems}
            navList={navList}
            dispatch={mockUseAppDispatch}
            imgUrl="src\assets\Logo-white.png"
            collapsedImgUrl='src\assets\Logo-white-2.png'
            // router={router}
            path={path}
            // pathMapList,
            setLogoutDialog={setLogoutDialog}
            setBroken={setBroken}
            setExpanded={setExpanded}
            setOpen={dummySetOpen}
            setToggled={setToggled}
            setCollapsed={setCollapsed}
          />

        <div
          className={`flex-1 h-full overflow-auto relative px-2 sm:px-3 md:px-4 lg:px-5 scroll-container ${
            collapsed && expanded
              ? "ml-[10.7vw] transition-all duration-300"
              : collapsed && !expanded
              ? "transition-all duration-300"
              : ""
          }`}
        >

        
        </div>
      </div>
     {/* <SidebarLayout 
      collapsed={collapsed}
      rtl={rtl}
      theme={theme}
      toggled={toggled}
      broken={broken}
      expanded={expanded}
      open={open}
      navItems={navItems}
      footerItems={footerItems}
      navList={navList}
      dispatch={mockUseAppDispatch}
      // router={router}
      // path={path}
      // pathMapList,
      setLogoutDialog={setLogoutDialog}
      setBroken={setBroken}
      setExpanded={setExpanded}
      setOpen={dummySetOpen}
      setToggled={setToggled}
      setCollapsed={setCollapsed}
     /> */}
    </>
  )
}

export default App
