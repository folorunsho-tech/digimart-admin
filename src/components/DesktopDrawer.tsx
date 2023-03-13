import React from "react";
import Drawer from "@mui/material/Drawer";
import MenuAccordion from "./MenuAccordion";
import HomeIcon from "@mui/icons-material/Home";
import StoreSelect from "./StoreSelect";
import { SelectChangeEvent } from "@mui/material/Select";
import { Link, NavLink } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import DiscountIcon from "@mui/icons-material/Discount";
import LaunchIcon from "@mui/icons-material/Launch";
type Props = {
  selected: string;
  handleChange: (event: SelectChangeEvent) => void;
  menu: {
    name: string;
    icon: JSX.Element;
    children: {
      name: string;
      path: string;
    }[];
  }[];
  settingsMenu: {
    name: string;
    icon: JSX.Element;
    children: {
      name: string;
      path: string;
    }[];
  }[];
  baseUrl: string;
};
const drawerWidth = 220;
const DesktopDrawer = ({
  selected,
  handleChange,
  menu,
  baseUrl,
  settingsMenu,
}: Props) => {
  return (
    <section>
      <Drawer
        variant="permanent"
        anchor="left"
        open={true}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            // border: "none",
          },
        }}
      >
        <nav className="p-4 py-6 ">
          <h1 className="text-xl font-bold italic">Digimart</h1>
          <StoreSelect handleChange={handleChange} selected={selected} />

          <h3 className="my-2 w-full">
            <NavLink
              to={`/admin/${selected}/home`}
              className={({ isActive }) =>
                isActive
                  ? "pr-2 py-2 pl-1 text-sm font-bold w-full flex gap-2 items-center text-indigo-500 bg-indigo-100 border-l-4 border-indigo-500"
                  : "pr-2 py-2 pl-1 text-sm font-bold w-full flex gap-2 items-center"
              }
            >
              <HomeIcon
                sx={{
                  fontSize: "1.5rem",
                  marginLeft: -0.7,
                }}
              />
              Home
            </NavLink>
          </h3>
          <MenuAccordion selected={selected} menu={menu} baseUrl={baseUrl} />
          <section className="space-y-4 my-4">
            <h3 className="my-3 w-full">
              <NavLink
                to={`/admin/${selected}/customers`}
                className={({ isActive }) =>
                  isActive
                    ? "p-2 text-sm font-bold flex gap-4 items-center text-indigo-500 bg-indigo-100 border-l-4 border-indigo-500"
                    : "p-2 text-sm font-bold flex gap-4 items-center"
                }
              >
                <PersonIcon
                  sx={{
                    fontSize: "1.2rem",
                    padding: 0,
                    marginLeft: -0.7,
                  }}
                />
                Customers
              </NavLink>
            </h3>
            <h3 className="my-3">
              <NavLink
                to={`/admin/${selected}/media`}
                className={({ isActive }) =>
                  isActive
                    ? "p-2 text-sm font-bold flex gap-4 items-center text-indigo-500 bg-indigo-100 border-l-4 border-indigo-500"
                    : "p-2 text-sm font-bold flex gap-4 items-center"
                }
              >
                <PermMediaIcon
                  sx={{
                    fontSize: "1.2rem",
                    marginLeft: -0.7,
                  }}
                />
                Media
              </NavLink>
            </h3>
            <h3 className="my-3">
              <NavLink
                to={`/admin/${selected}/discounts`}
                className={({ isActive }) =>
                  isActive
                    ? "p-2 text-sm font-bold flex gap-4 items-center text-indigo-500 bg-indigo-100 border-l-4 border-indigo-500"
                    : "p-2 text-sm font-bold flex gap-4 items-center"
                }
              >
                <DiscountIcon
                  sx={{
                    fontSize: "1.2rem",
                    marginLeft: -0.7,
                  }}
                />
                Discounts
              </NavLink>
            </h3>
          </section>
          <MenuAccordion
            selected={selected}
            menu={settingsMenu}
            baseUrl={baseUrl}
          />
        </nav>
        <footer className="flex justify-between items-center p-3 mt-3 bg-slate-300">
          <h3 className="font-bold text-lg">{selected}</h3>
          <button className="bg-slate-200 p-2 rounded-lg text-center">
            <Link to="#">
              <LaunchIcon />
            </Link>
          </button>
        </footer>
      </Drawer>
    </section>
  );
};

export default DesktopDrawer;
