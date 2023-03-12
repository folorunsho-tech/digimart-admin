import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
type Props = {
  handleDisplay: (display: string) => void;
  display: string;
};
const Notifications = ({ handleDisplay, display }: Props) => {
  return (
    <>
      <button
        onClick={() => {
          handleDisplay("notifications");
        }}
      >
        <NotificationsIcon />
      </button>
      {display === "notifications" && (
        <div className="absolute top-14 bg-gray-100 z-50 w-72 h-auto shadow-sm rounded-sm font-semibold border-t-2 pt-2 divide-y-2 overflow-y-auto divide-gray-400">
          <h3 className="flex items-center gap-4 hover:bg-white p-3">Stores</h3>
          <h3 className="flex items-center justify-between rounded-br-sm rounded-bl-sm bg-red-500 p-3">
            Log Out
          </h3>
        </div>
      )}
    </>
  );
};

export default Notifications;
