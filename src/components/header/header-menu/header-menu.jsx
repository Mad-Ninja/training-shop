import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu } from "./burger-menu/burger";
import { UsefulLinks } from "./menu-icons/menu-icons";

import "./header-menu.scss";

export const HeaderMenu = () => {
  const [isBurgerActive, setIsBurgerActive] = useState(false);
  return (
    <div className="wrapper">
      <div className="header-menu">
        <Link to="/" className="header-logo" data-test-id="header-logo-link">
          CleverShop
        </Link>
        <Menu
          isBurgerActive={isBurgerActive}
          setIsBurgerActive={setIsBurgerActive}
        />
        <UsefulLinks
          isBurgerActive={isBurgerActive}
          setIsBurgerActive={setIsBurgerActive}
        />
      </div>
    </div>
  );
};
