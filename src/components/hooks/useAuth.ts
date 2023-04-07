import { useAppSelector } from "../utils/utils";
import { parseToken } from '../utils/utils';

const useAuth = () => {
  const { accessToken } = useAppSelector(({ user }) => user);
  
  const parse = accessToken ? parseToken(accessToken) : '';
  
  return {
    
  };
};

export default useAuth;
