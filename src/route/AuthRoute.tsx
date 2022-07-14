import { Navigate, Outlet } from 'react-router-dom';
import { isLogin } from '../api/Auth';

const AuthRoute = () => {
  return isLogin() ? <Outlet /> : <Navigate to="/signin" />;
};

export default AuthRoute;
