import { Header } from "@/components/Header/Header";
import { AnonymousLayoutWrapper } from "./AnonymousLayout.styled";
import { Outlet } from "react-router";
import { Footer } from "@/components/Footer/Footer";

export const AnonymousLayout = () => {
  return (
    <AnonymousLayoutWrapper className="anonymousLayout">
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </AnonymousLayoutWrapper>
  );
};
