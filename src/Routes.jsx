import React from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "pages/NotFound";
import CryptoCapLandingPage from "pages";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <CryptoCapLandingPage /> },
    { path: "*", element: <NotFound /> },
  ]);

  return element;
};

export default ProjectRoutes;
