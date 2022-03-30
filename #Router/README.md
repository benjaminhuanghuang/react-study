## React Router Clone

## Router
- HashRouter

- BrowserRouter




## Navigate
```
import { useNavigate } from "react-router-dom";

export default function Page() {
  let navigate = useNavigate();

  <Link component="button" onClick={() => navigate("/")}>
}
```