import { FC, Dispatch, SetStateAction } from "react";

import { useAppSelector, useAppDispatch } from "../../utils/utils";
import { logout } from "../../redux/reducers/reducerUser";

import "./index.scss";

type THeader = {
  isAuth?: boolean;
  setIsLogin: Dispatch<SetStateAction<boolean>>;
};

const Header: FC<THeader> = ({ setIsLogin }) => {
  const dispatch = useAppDispatch();
  const { isAuth } = useAppSelector(({ user }) => user);

  return (
    <header className="header">
      {isAuth ? (
        <button
          className="header__item"
          type="button"
          onClick={() => {
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
            dispatch(logout());
          }}
        >
          Logout
        </button>
      ) : (
        <>
          <button
            className="header__item"
            type="button"
            onClick={() => setIsLogin(false)}
          >
            Sign up
          </button>
          <button
            className="header__item"
            type="button"
            onClick={() => setIsLogin(true)}
          >
            Log in
          </button>
        </>
      )}
    </header>
  );
};

export default Header;
