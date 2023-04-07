import { FC, Dispatch, SetStateAction } from "react";
import "./index.scss";

type THeader = {
  isAuth?: boolean;
  setLogin: Dispatch<SetStateAction<boolean>>;
};

const Header: FC<THeader> = ({ isAuth = false, setLogin }) => {
  return (
    <header className="header">
      {isAuth ? (
        <button className="header__item">Logout</button>
      ) : (
        <>
          <button
            className="header__item"
            type="button"
            onClick={() => setLogin(false)}
          >
            Sign up
          </button>
          <button
            className="header__item"
            type="button"
            onClick={() => setLogin(true)}
          >
            Log in
          </button>
        </>
      )}
    </header>
  );
};

export default Header;
