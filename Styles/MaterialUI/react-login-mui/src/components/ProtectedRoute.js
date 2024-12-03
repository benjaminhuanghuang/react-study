import {Navigate, Route} from 'react-router-dom';

const ProtectedRoute = (props) =>{
  //const {user} = useAuth();
  const user = null;
  
  if(!user) {
    return <Navigate to="/"/>
  }

  return <Route {...props}/>
}


export default ProtectedRoute;