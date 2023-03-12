import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import StoreIcon from "@mui/icons-material/Store";
type Props = {
  currentDisplay: string;
  open: boolean;
};
const DisplayMenu = ({ currentDisplay, open }: Props) => {
  return (
    <section
      id="displaymenu"
      className={`${
        open ? "block" : "hidden"
      }  absolute top-14 bg-gray-100 z-50 w-max h-auto shadow-sm rounded-sm font-semibold border-t-2`}
    >
      {currentDisplay === "accounts" ? (
        <div className=" pt-2 divide-y-2 overflow-y-auto divide-gray-400">
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
      ) : (
        <div className=" sm:w-80 w-80 overflow-y-auto sm:right-20 pt-2 divide-y-2 divide-gray-400">
          <h3 className="flex items-center gap-4 hover:bg-white p-3">
            <StoreIcon /> Stores
          </h3>
          <h3 className="flex items-center justify-between rounded-br-sm rounded-bl-sm bg-red-500 p-3">
            Log Out
            <LogoutIcon />
          </h3>
        </div>
      )}
    </section>
  );
};

export default DisplayMenu;
