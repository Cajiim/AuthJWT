import { FC } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Auth from "../../pages/Auth";
import Main from "../../pages/Main";
import useAuth from '../../hooks/useAuth';

import "./index.scss";

const App: FC = () => {
  const auth = useAuth();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
      </Routes>
      <Routes>
        <Route path="/main" element={<Main />} />
      </Routes>
    </Router>
  );
};

export default App;
