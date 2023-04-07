import { FC, useState } from "react";

import "./index.scss";

type TForm = {
  handlClick: (email: string, password: string) => void;
  buttonText: string;
};

const Form: FC<TForm> = ({ handlClick, buttonText }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className="form">
      <p>Login</p>
      <input
        value={email}
        type="email"
        className="form__input"
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <p>Password</p>
      <input
        value={password}
        type="password"
        className="form__input"
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button
        className="form__button"
        type="button"
        onClick={() => handlClick(email, password)}
      >
        {buttonText}
      </button>
    </form>
  );
};

export default Form;
