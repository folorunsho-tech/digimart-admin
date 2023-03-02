import React from "react";
import ReactDOM from "react-dom/client";
import { NavLayout } from "./layouts";
import "./index.css";
import { store } from "./store";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Auth, Dashboard, API } from "./pages";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";

const router = createBrowserRouter([
  {
    path: "/:store",
    element: <NavLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/auth",
        element: <Auth />,
        children: [
          {
            path: "/login",
            element: <SignIn />,
          },
          {
            path: "/signup",
            element: <SignUp />,
          },
        ],
      },
    ],
  },
  {
    path: "/api",
    element: <API />,
    children: [{}],
  },
]);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
