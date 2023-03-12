import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { NavLayout } from "./layouts";
import { store } from "./store";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Auth,
  Dashboard,
  AbadonedCheckout,
  OrderDrafts,
  LiveView,
  Reports,
  Summary,
  Collections,
  Products,
  ProductsDrafts,
  Tags,
  StoreDefaults,
  Notifications,
  Payments,
  Policies,
  Domains,
  Stores,
  InitStore,
  Owner,
  Orders,
  Customers,
  Media,
  Discounts,
  Error,
} from "./pages";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
// import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavLayout />,
    errorElement: <Error />,
  },
  {
    path: "admin/:store",
    element: <NavLayout />,
    children: [
      {
        path: "home",
        element: <Dashboard />,
      },
      {
        path: "order",
        element: <Orders />,
      },
      {
        path: "orders/drafts",
        element: <OrderDrafts />,
      },
      {
        path: "orders/abandoned-checkouts",
        element: <AbadonedCheckout />,
      },

      {
        path: "products/all",
        element: <Products />,
      },
      {
        path: "products/collections",
        element: <Collections />,
      },
      {
        path: "products/tags",
        element: <Tags />,
      },
      {
        path: "products/drafts",
        element: <ProductsDrafts />,
      },

      {
        path: "customers",
        element: <Customers />,
      },
      {
        path: "media",
        element: <Media />,
      },
      {
        path: "discounts",
        element: <Discounts />,
      },
      {
        path: "analytics/reports/:report",
        element: <Reports />,
      },
      {
        path: "analytics/live-view",
        element: <LiveView />,
      },
      {
        path: "analytics/summary",
        element: <Summary />,
      },

      {
        path: "settings/store-defaults",
        element: <StoreDefaults />,
      },

      {
        path: "settings/payments",
        element: <Payments />,
      },

      {
        path: "settings/notifications",
        element: <Notifications />,
      },
      {
        path: "settings/policies",
        element: <Policies />,
      },
      {
        path: "settings/domain",
        element: <Domains />,
      },
      // {
      //   path: "design",
      //   element: <Dashboard />,
      // },
    ],
  },
  {
    path: "admin/stores",
    element: <Stores />,
  },
  {
    path: "admin/auth",
    element: <Auth />,
    children: [
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "login",
        element: <SignIn />,
      },
    ],
  },

  {
    path: "admin/initcreatestore",
    element: <InitStore />,
  },

  // {
  //   path: "/api",
  //   element: <API />,
  //   children: [{}],
  // },
  {
    path: "admin/account/:owner",
    element: <Owner />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
