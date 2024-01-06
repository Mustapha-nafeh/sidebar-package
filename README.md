# SidebarLayout Component

This component represents the sidebar layout used in your application. It accepts the following props:

## Props

- `collapsed`: (Boolean) Indicates whether the sidebar is collapsed.
- `rtl`: (Boolean) Right-to-left layout indicator.
- `theme`: (String) Theme used for the sidebar layout.
- `toggled`: (Boolean) Indicates whether the sidebar is toggled.
- `broken`: (Boolean) Indicates whether the sidebar layout is broken.
- `expanded`: (Boolean) Indicates whether the sidebar is expanded.
- `open`: (Boolean) Indicates whether the sidebar is open.
- `navItems`: (Array) Array of navigation items.
- `footerItems`: (Array) Array of items for the footer.
- `navList`: (Array) List of navigation items.
- `dispatch`: (Function) Function for dispatching actions.
- `imgUrl`: (String) URL for the sidebar image when not collapsed.
- `collapsedImgUrl`: (String) URL for the sidebar image when collapsed.
- `path`: (String) Current path.
- `setLogoutDialog`: (Function) Function to set the logout dialog.
- `setBroken`: (Function) Function to set the sidebar layout as broken. (use it with the broken boolean)
- `setExpanded`: (Function) Function to set the sidebar as expanded. (use it with the expanded boolean)
- `setOpen`: (Function) Function to set the sidebar as open. (use it with the open boolean)
- `setToggled`: (Function) Function to set the sidebar as toggled. (use it with the toggled boolean)
- `setCollapsed`: (Function) Function to set the sidebar as collapsed. (use it with the collapsed boolean)

## Usage

```jsx
import SidebarLayout;

const MyComponent = () => {
  // Your code here
  return (
    <SidebarLayout
      // ...props
    />
  );
}

## Note

Please ensure to provide all required props for the `SidebarLayout` component to render correctly.
```
