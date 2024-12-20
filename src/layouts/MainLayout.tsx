import { MainLayoutWrapper } from "./MainLayout.styled";
import { Outlet } from "react-router";

export const MainLayout = () => {
  return (
    <MainLayoutWrapper>
      <Outlet />
    </MainLayoutWrapper>
  );
};
