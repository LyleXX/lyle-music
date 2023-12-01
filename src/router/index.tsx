import React, { lazy } from "react";
import type { RouteObject } from "react-router-dom";
import { Navigate } from "react-router-dom";

const Discover = lazy(() => import("@/views/discover/Discover.tsx"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/discover" />,
  },
  {
    path: "/discover",
    element: <Discover />,
  },
];

export default routes;
