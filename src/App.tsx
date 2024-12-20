import { Route, Routes } from "react-router";
import { AppWrapper } from "./App.styled";
import { ROUTES } from "./routes";

export const App = () => (
  <AppWrapper>
    <Routes>
      {ROUTES.map(({ layout, routes }, index) => (
        <Route key={index} element={layout}>
          {routes.map(({ element, path, name }) => (
            <Route key={name} element={element} path={path} />
          ))}
        </Route>
      ))}
    </Routes>
  </AppWrapper>
);
