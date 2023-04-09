import Form from "../Form";
import { fetchLogin } from '../../redux/thunk/fetchUser';
import { useAppDispatch } from "../../utils/utils";

const Login = () => {
  const dispatch = useAppDispatch();

  const handlLogin = (email: string, password: string) => {
    const objHeaders = {
      email: email,
      password: password,
      fingerprint: 'fingerprint',
    }
    dispatch(fetchLogin(objHeaders));
  };

  return <Form handlClick={handlLogin} buttonText={"Войти"} />;
};

export default Login;
