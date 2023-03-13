import React from "react";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

type Props = {
  displayName: string;
  user: any;
};

const InitAccountMenu = ({ displayName = "A", user }: Props) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();

  React.useEffect(() => {
    if (user === null) {
      navigate("/admin/auth/login", { replace: true });
    }
  }, [user]);
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 40, height: 40, backgroundColor: "#6366F1" }}>
              {displayName[0]?.toUpperCase() || ""}
            </Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem
          sx={{
            ["&:hover"]: {
              backgroundColor: "#6366F1",
              color: "error.contrastText",
              ["& .MuiListItemIcon-root"]: {
                color: "error.contrastText",
              },
            },
          }}
          onClick={handleClose}
        >
          <Avatar sx={{ backgroundColor: "#6366F1" }}>
            {displayName[0]?.toUpperCase() || ""}
          </Avatar>
          Manage account
        </MenuItem>
        <Divider />
        <MenuItem
          sx={{
            ["&:hover"]: {
              backgroundColor: "#6366F1",
              color: "error.contrastText",
              ["& .MuiListItemIcon-root"]: {
                color: "error.contrastText",
              },
            },
          }}
          onClick={handleClose}
        >
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Switch account
        </MenuItem>
        <MenuItem
          sx={{
            marginTop: "10px",
            ["&:hover"]: {
              backgroundColor: "#6366F1",
              color: "error.contrastText",
              ["& .MuiListItemIcon-root"]: {
                color: "error.contrastText",
              },
            },
          }}
          onClick={handleClose}
        >
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            marginTop: "10px",
            backgroundColor: "error.main",
            color: "error.contrastText",
            ["&:hover"]: {
              backgroundColor: "error.dark",
            },
          }}
        >
          <ListItemIcon
            sx={{
              color: "error.contrastText",
            }}
          >
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};

export default InitAccountMenu;
