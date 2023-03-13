import React from "react";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import CancelIcon from "@mui/icons-material/Cancel";
import HomeIcon from "@mui/icons-material/Home";
import StoreSelect from "./StoreSelect";
import { NavLink, useLocation } from "react-router-dom";
import { SelectChangeEvent } from "@mui/material/Select";
import MenuAccordion from "./MenuAccordion";
import PersonIcon from "@mui/icons-material/Person";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import DiscountIcon from "@mui/icons-material/Discount";
import LaunchIcon from "@mui/icons-material/Launch";
const drawerWidth = 300;

type Props = {
  selected: string;
  handleChange: (event: SelectChangeEvent) => void;
  handleDrawerToggle: () => void;
  mobileOpen: boolean;

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
const MobileDrawer = ({
  handleDrawerToggle,
  mobileOpen,
  selected,
  handleChange,
  menu,
  baseUrl,
  settingsMenu,
}: Props) => {
  return (
    <nav className="relative ">
      <section>
        {mobileOpen && (
          <button
            style={{
              top: 10,
              right: 10,
              zIndex: 1500,
              position: "absolute",
              padding: "0.5rem",
              backgroundColor: "transparent",
              border: "none",
            }}
            onClick={handleDrawerToggle}
          >
            <CancelIcon
              sx={{
                color: "white",
                fontSize: "2rem",
              }}
            />
          </button>
        )}
        <CssBaseline />
        <Drawer
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block" },

            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <nav className="p-4 space-y-4">
            <h1 className="text-xl font-bold italic">Digimart</h1>
            <StoreSelect handleChange={handleChange} selected={selected} />
            <h3 className="my-3">
              <NavLink
                to={`/admin/${selected}/home`}
                onClick={handleDrawerToggle}
                className={({ isActive }) =>
                  isActive
                    ? "p-2 text-sm font-bold flex gap-4 items-center text-indigo-500 bg-indigo-100 border-l-4 border-indigo-500"
                    : "p-2 text-sm font-bold flex gap-4 items-center"
                }
              >
                <HomeIcon
                  sx={{
                    fontSize: "1.2rem",
                  }}
                />
                Home
              </NavLink>
            </h3>
            <MenuAccordion
              selected={selected}
              menu={menu}
              baseUrl={baseUrl}
              handleClick={handleDrawerToggle}
            />
            <section className="space-y-4 my-4">
              <h3 className="my-3 w-full">
                <NavLink
                  to={`/admin/${selected}/customers`}
                  onClick={handleDrawerToggle}
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
                  onClick={handleDrawerToggle}
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
                  onClick={handleDrawerToggle}
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
              handleClick={handleDrawerToggle}
            />
          </nav>
          <footer className="flex justify-between items-center p-3 mt-8 bg-slate-300">
            <h3 className="font-bold text-lg">{selected}</h3>
            <button className="bg-slate-200 p-2 rounded-lg text-center">
              <LaunchIcon />
            </button>
          </footer>
        </Drawer>
      </section>
    </nav>
  );
};

export default MobileDrawer;
