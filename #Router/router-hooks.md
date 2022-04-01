


```
import { useNavigate, useLocation } from "react-router-dom";

const Component=()=>{
  const navigate = useNavigate();
  const location = useLocation();

  //  jump
  navigate("/login", { state: { from: location }, replace: true });

  // read current location
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
}
```