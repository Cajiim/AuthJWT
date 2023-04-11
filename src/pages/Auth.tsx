import { FC, useState } from "react";

import Header from "../components/Header";
import Login from "../components/Login";
import Signup from "../components/Signup";

const Auth: FC = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div>
      <Header setIsLogin={setIsLogin}/>
      {isLogin ? <Login /> : <Signup />}
    </div>
  );
};

export default Auth;
