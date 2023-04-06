import { FC } from "react";
import "./index.scss";

type THeader = {
  isAuth?: boolean;
};

const Header: FC<THeader> = ({ isAuth = false }) => {
  return (
    <header className="header">
      {isAuth ? (
        <button className="header__item">Logout</button>
      ) : (
        <>
          <button className="header__item">Sign up</button>
          <button className="header__item">Log in</button>
        </>
      )}
    </header>
  );
};

export default Header;
