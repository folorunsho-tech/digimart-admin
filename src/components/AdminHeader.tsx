import React from "react";
import Avatar from "@mui/material/Avatar";
import LogoutIcon from "@mui/icons-material/Logout";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import StoreIcon from "@mui/icons-material/Store";
import { deepPurple } from "@mui/material/colors";
type Props = {
  handleDisplay: (display: string) => void;
  display: string;
  photoUrl: string;
  displayName: string;
};
const AdminHeader = ({
  handleDisplay,
  display,
  photoUrl,
  displayName = "",
}: Props) => {
  return (
    <>
      <button
        className=""
        onClick={() => {
          handleDisplay("accounts");
        }}
      >
        <Avatar
          alt={displayName || ""}
          src={photoUrl || ""}
          sx={{ bgcolor: deepPurple[500] }}
        >
          {displayName[0]?.toUpperCase()}
        </Avatar>
      </button>
      {display === "accounts" && (
        <div className="cursor-pointer absolute top-14 bg-gray-100 z-50 w-max h-auto shadow-sm rounded-sm font-semibold border-t-2 pt-2 divide-y-2 overflow-y-auto divide-gray-400">
          <h3 className="flex items-center gap-4 hover:bg-white p-3">
            <ManageAccountsIcon /> Manage Accounts
          </h3>
          <h3 className="flex items-center gap-4 hover:bg-white p-3">
            <StoreIcon /> Stores
          </h3>
          <h3 className="flex items-center justify-between rounded-br-sm rounded-bl-sm bg-red-500 p-3">
            Log Out
            <LogoutIcon />
          </h3>
        </div>
      )}
    </>
  );
};

export default AdminHeader;
