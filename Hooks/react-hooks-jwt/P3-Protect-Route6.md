# React Protected Routes | Role-Based Authorization | React Router v6 [2022]
  - https://www.youtube.com/watch?v=oUZjO00NkhY&ab_channel=DaveGray
  - https://github.com/gitdagray/react_jwt_auth


## Hooks
把代码
```
  import { useContext } from "react";
  import AuthContext form './AuthContext";

  const Login = ()=>{
    const {setAuth} = useContext(AuthContext);

  }
```
抽取到一个hook中
useAuth.js
```
const useAuth = () => {
  return useContext(AuthContext);
}
```
Use the hook:
```
import useAuth from '../hooks/useAuth';

const Login = ()=>{
  const {setAuth} = useAuth();
}
```

## ResuireAuth.js
ResuireAuth is a wrapper for the router to be protected. In ResuireAuth, we check the role and auth of the user

protect multi routes
```
 <Route element={<RequireAuth />}>
    <Route path="admin" element={<Admin />} />
    <Route path="editor" element={<Editor />} />
    <Route path="lounge" element={<Lounge />} />
  </Route>
```
protect route based on use's role   
```
  <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
    <Route path="admin" element={<Admin />} />
  </Route>

  <Route element={<RequireAuth allowedRoles={[ROLES.Editor, ROLES.Admin]} />}>
    <Route path="lounge" element={<Lounge />} />
  </Route>
```