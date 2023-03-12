import React from "react";
import MobileDrawer from "./MobileDrawer";
import DesktopDrawer from "./DesktopDrawer";
import useMediaQuery from "@mui/material/useMediaQuery";
import { SelectChangeEvent } from "@mui/material/Select";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import SellIcon from "@mui/icons-material/Sell";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SettingsIcon from "@mui/icons-material/Settings";
type Props = {
  handleDrawerToggle: () => void;
  mobileOpen: boolean;
};
const stores = [
  {
    id: "Store1",
  },
  {
    id: "Store2",
  },
];
const SideMenu = ({ handleDrawerToggle, mobileOpen }: Props) => {
  const matches = useMediaQuery("(min-width:760px)");
  const [selected, setSelected] = React.useState(stores[0].id);

  const handleChange = (event: SelectChangeEvent) => {
    setSelected(event.target.value);
  };
  const baseUrl = `/admin/${selected}`;
  const menu = [
    {
      name: "Orders",
      icon: (
        <LocalMallIcon
          sx={{
            fontSize: "1.2rem",
            color: "#001d3d",
          }}
        />
      ),
      children: [
        { name: "Order", path: `${baseUrl}/order` },
        { name: "Drafts", path: `${baseUrl}/orders/drafts` },
        {
          name: "Abandoned Checkouts",
          path: `${baseUrl}/orders/abandoned-checkouts`,
        },
      ],
    },
    {
      name: "Products",
      icon: (
        <SellIcon
          className="rotate-90"
          sx={{
            fontSize: "1.2rem",
            color: "#001d3d",
          }}
        />
      ),
      children: [
        { name: "Products", path: `${baseUrl}/products/all` },
        {
          name: "Collections",
          path: `${baseUrl}/products/collections`,
        },
        {
          name: "Tags",
          path: `${baseUrl}/products/tags`,
        },
      ],
    },
    {
      name: "Analytics",
      icon: (
        <AssessmentIcon
          className="rotate-90"
          sx={{
            fontSize: "1.2rem",
            color: "#001d3d",
          }}
        />
      ),
      children: [
        { name: "Summary", path: `${baseUrl}/analytics/summary` },
        {
          name: "Reports",
          path: `${baseUrl}/analytics/reports/:report`,
        },
        {
          name: "Live View",
          path: `${baseUrl}/analytics/live-view`,
        },
      ],
    },
  ];
  const settingsMenu = [
    {
      name: "Settings",
      icon: (
        <SettingsIcon
          sx={{
            fontSize: "1.2rem",
            color: "#001d3d",
          }}
        />
      ),
      children: [
        { name: "Store", path: `${baseUrl}/settings/store-defaults` },
        { name: "Payments", path: `${baseUrl}/settings/payments` },
        {
          name: "Notifications",
          path: `${baseUrl}/settings/notifications`,
        },
        {
          name: "Policies",
          path: `${baseUrl}/settings/policies`,
        },
        {
          name: "Domain",
          path: `${baseUrl}/settings/domain`,
        },
      ],
    },
  ];
  return (
    <>
      {matches ? (
        <DesktopDrawer
          stores={stores}
          handleChange={handleChange}
          selected={selected}
          menu={menu}
          settingsMenu={settingsMenu}
          baseUrl={baseUrl}
        />
      ) : (
        <MobileDrawer
          handleDrawerToggle={handleDrawerToggle}
          mobileOpen={mobileOpen}
          stores={stores}
          handleChange={handleChange}
          selected={selected}
          menu={menu}
          settingsMenu={settingsMenu}
          baseUrl={baseUrl}
        />
      )}
    </>
  );
};

export default SideMenu;
