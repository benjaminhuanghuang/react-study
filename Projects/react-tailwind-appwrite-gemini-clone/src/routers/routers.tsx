import { createBrowserRouter } from 'react-router-dom';
//
import App from '../App';
import Register from '../pages/Register';
// Actions
import registerAction from './actions/registerAction';

const Router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/register', element: <Register />, action: registerAction },
]);

export default Router;
