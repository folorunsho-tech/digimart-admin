import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useLocation } from "react-router-dom";
import MobileSearch from "./MobileSearch";
import Notifications from "./Notifications";
import AdminHeader from "./AdminHeader";
import DesktopSearch from "./DesktopSearch";

type Props = {
  handleDrawerToggle: () => void;
  user: any;
};
const Header = ({ handleDrawerToggle, user }: Props) => {
  const matches = useMediaQuery("(min-width:760px)");
  const { pathname } = useLocation();
  const currentPath = pathname.split("/")[3];
  const [display, setDisplay] = React.useState<string>("");
  const handleDisplay = (display: string) => {
    setDisplay(display);
  };
  React.useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (event.target.closest(".absolute")) {
        return;
      } else {
        handleDisplay("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleDisplay]);

  React.useEffect(() => {
    const handleEsc = (event: any) => {
      if (event.key === "Escape") {
        handleDisplay("");
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [handleDisplay]);

  return (
    <header className="flex gap-6 items-center px-4 pb-6">
      {!matches && (
        <button
          className="bg-gray-100 p-1 rounded-md "
          onClick={handleDrawerToggle}
        >
          <MenuIcon fontSize="medium" />
        </button>
      )}
      <h1 className="text-lg font-bold capitalize">{currentPath}</h1>
      <section className="ml-4 sm:ml-8 lg:ml-12 flex items-center gap-8 justify-end w-full relative">
        {!matches ? <MobileSearch /> : <DesktopSearch />}
        <Notifications handleDisplay={handleDisplay} display={display} />
        <AdminHeader
          handleDisplay={handleDisplay}
          display={display}
          photoUrl={user?.photoUrl}
          displayName={user?.displayName}
        />
      </section>
    </header>
  );
};

export default Header;
