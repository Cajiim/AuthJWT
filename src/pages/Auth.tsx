import { FC, useState } from "react";
import Header from "../components/Header";
import Login from "../components/Login";
import Signup from "../components/Signup";

const Auth: FC = () => {
  const [login, setLogin] = useState(false);

  return (
    <div>
      <Header setLogin={setLogin}/>
      {login ? <Login /> : <Signup />}
    </div>
  );
};

export default Auth;
