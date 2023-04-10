import { FC } from "react";
import Header from "../components/Header";

const Main: FC = () => {
  return (
    <div>
      <Header setIsLogin={() => {}}/>
      <p>Авторизован</p>
    </div>
  );
};

export default Main;
