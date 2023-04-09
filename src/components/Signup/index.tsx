import Form from "../Form";
import { useNavigate } from "react-router-dom";
import { fetchRegister } from "../../redux/thunk/fetchUser";
import { useAppDispatch, useAppSelector } from "../../utils/utils";
import { useEffect, useState } from "react";

const Signup = () => {
  const dispatch = useAppDispatch();
/*   const history = useNavigate();

  const { accessToken } = useAppSelector(({ user }) => user); */

  const handlSignup = (email: string, password: string) => {
    const objHeaders = {
      email: email,
      password: password,
      fingerprint: "fingerprint",
    };

    dispatch(fetchRegister(objHeaders));
  };

  return <Form handlClick={handlSignup} buttonText={"Зарегистрироваться"} />;
};

export default Signup;

/* const parseToken = (token: string) => {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload);
  }; */
