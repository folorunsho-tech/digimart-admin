import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Header, SideMenu } from "../components/";
import useMediaQuery from "@mui/material/useMediaQuery";

const NavLayout = () => {
  const matches = useMediaQuery("(min-width:760px)");
  const navigate = useNavigate();

  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  useEffect(() => {
    navigate("/admin/Store1/home", { replace: true });
  }, []);
  return (
    <nav className="sm:flex py-6">
      <SideMenu
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
      />
      <section
        className="flex-1 overflow-y-auto"
        style={{
          marginLeft: !matches ? 0 : 250,
        }}
      >
        <Header handleDrawerToggle={handleDrawerToggle} />
        <main className="p-4 h-screen">
          <Outlet />
        </main>
      </section>
    </nav>
  );
};

export default NavLayout;
