import { NavLink } from "react-router";
import { HeaderWrapper } from "./Header.styled";
import { ROUTES_KEY } from "@/constants/ROUTES_KEY";

export const Header = () => {
  return (
    <HeaderWrapper>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink to={ROUTES_KEY.HOME_ROUTE}>Home</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES_KEY.ABOUT_US_ROUTE}>About Us</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES_KEY.VACANCIES_ROUTE}>Vacancies</NavLink>
          </li>
        </ul>
      </nav>
    </HeaderWrapper>
  );
};
