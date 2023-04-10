import Form from "../Form";
import { fetchRegister } from "../../redux/thunk/fetchUser";
import { useAppDispatch } from "../../utils/utils";

const Signup = () => {
  const dispatch = useAppDispatch();

  const handlSignup = (email: string, password: string) => {
    const objHeaders = {
      username: email,
      password: password,
      fingerprint: "finger",
    };

    dispatch(fetchRegister(objHeaders));
  };

  return <Form handlClick={handlSignup} buttonText={"Зарегистрироваться"} />;
};

export default Signup;
