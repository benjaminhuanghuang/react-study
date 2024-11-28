import { createBrowserRouter } from 'react-router-dom';
//
import App from '../App';
import Register from '../pages/Register';
import Login from '../pages/Login';

// Actions
import registerAction from './actions/registerAction';
import loginAction from './actions/loginAction';

const Router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/register', element: <Register />, action: registerAction },
  { path: '/login', element: <Login />, action: loginAction},
]);

export default Router;
