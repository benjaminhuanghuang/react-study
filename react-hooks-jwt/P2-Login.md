# React User Login and Authentication with Axios [2022]
  - https://www.youtube.com/watch?v=X3qyxo_UTR4&ab_channel=DaveGray
  - https://github.com/gitdagray/react_jwt_auth


## Global Auth State
/context/AuthProvider.js
```
  import { createContext, useState } from "react";

  const AuthContext = createContext({});

  export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});

    return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>;
  };

  export default AuthContext;
```

Use AuthProvider in index.js
```
<AuthProvider> 
  <App />
</AuthProvider>
```

User auth state in components
```
  import { useContext } from "react";
  import AuthContext form './AuthContext";

  const Login = ()=>{
    const {setAuth} = useContext(AuthContext);

  }
```