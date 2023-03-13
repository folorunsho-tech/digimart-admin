import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Header, SideMenu } from "../components/";
import useMediaQuery from "@mui/material/useMediaQuery";
import type { RootState } from "../store";
import { useSelector, useDispatch } from "react-redux";
// import { setStores } from "../store/slices/stores";

const NavLayout = () => {
  const matches = useMediaQuery("(min-width:760px)");
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user);
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    if (user === null) {
      navigate("/admin/auth/login", { replace: true });
    }
  }, [user]);

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
        <Header handleDrawerToggle={handleDrawerToggle} user={user} />
        <main className="p-4 h-screen">
          <Outlet />
        </main>
      </section>
    </nav>
  );
};

export default NavLayout;
