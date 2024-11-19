import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/routes.jsx";
import HomeProvider, { HomeContext } from "./Provider/HomeProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HomeProvider>
      <RouterProvider router={router} />
    </HomeProvider>
  </StrictMode>
);
