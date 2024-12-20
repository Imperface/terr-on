import React from "react";
import { AnonymousLayout } from "@/layouts";

import Home from "@/pages/Home";

import { ROUTES_KEY } from "@/constants/ROUTES_KEY";
import AboutUs from "./pages/AboutUs";
import Vacancies from "./pages/Vacancies";

interface MainRoutesInterface {
  layout: React.JSX.Element;
  routes: {
    name: string;
    title: string;
    element: React.JSX.Element;
    path: string;
    isPublic: boolean;
  }[];
}

export const ROUTES: MainRoutesInterface[] = [
  {
    layout: <AnonymousLayout />,
    routes: [
      {
        name: "home",
        title: "Home page",
        element: <Home />,
        path: ROUTES_KEY.HOME_ROUTE,
        isPublic: true,
      },
      {
        name: "aboutUs",
        title: "About us page",
        element: <AboutUs />,
        path: ROUTES_KEY.ABOUT_US_ROUTE,
        isPublic: true,
      },
      {
        name: "vacancies",
        title: "Vacancies page",
        element: <Vacancies />,
        path: ROUTES_KEY.VACANCIES_ROUTE,
        isPublic: true,
      },
    ],
  },
];
