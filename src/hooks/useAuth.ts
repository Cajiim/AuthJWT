import { useAppSelector } from "../utils/utils";
import { parseToken } from '../utils/utils';

const useAuth = () => {
  const { accessToken } = useAppSelector(({ user }) => user);
  
  const parse = accessToken ? parseToken(accessToken) : '';
  console.log(parse, 'parse');
  return {
    
  };
};

export default useAuth;
