import { FC } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Auth from "../../pages/Auth";
import Main from "../../pages/Main";
import useAuth from "../../hooks/useAuth";
import { useAppSelector } from "../../utils/utils";
import "./index.scss";

const App: FC = () => {
  useAuth();
  const { isAuth } = useAppSelector(({ user }) => user);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={isAuth ? <Navigate replace to="/main" /> : <Auth />}
        />
      </Routes>
      <Routes>
        <Route
          path="/main"
          element={!isAuth ? <Navigate replace to="/" /> : <Main />}
        />
      </Routes>
    </Router>
  );
};

export default App;
