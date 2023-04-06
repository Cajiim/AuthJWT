import { FC, useState } from "react";

import './index.scss';

const Form: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className="form">
      <p>Login</p>
      <input type='email' className="form__input"></input>
      <p>Password</p>
      <input type='password' className="form__input"></input>
    </form>
  );
};

export default Form;
