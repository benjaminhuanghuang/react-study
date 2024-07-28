# React Router V6
Setup
```bash
    npm i react-router-dom
```

Create router
```ts
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <NotFoundPage />
    },
    { path: '/dashboard', element: <Dashboard /> },
    { path: '/contact', element: <Contact /> },
]);

<RouterProvider router={router}/>
```

## "Switch" is replaced by routes "Routes"
In react-router-dom v6, "Switch" is replaced by routes "Routes". 
You need to update the import from
```
import { Switch, Route } from "react-router-dom";
```
to
```
import { Routes ,Route } from 'react-router-dom';
```
You also need to update the Route declaration from
```
<Route path="/" component={Home} />
```
to
```
<Route path='/welcome' element={<Home/>} />
```

In react-router-dom, you also do not need to use the exact in the Route declaration.

For more information, you can visit the official documentation: upgrade to react-router-dom v6

## Redirect is replaced by Navigate

For react-router-dom v6, simply replace Redirect with Navigate

import { Navigate } from 'react-router-dom';
.
.
.
{ component: () => <Navigate to="/404" /> }


## Outlet 

Outlet component represnets all the children of the layout
```
import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <main className="App">
            <Outlet />
        </main>
    )
}

export default Layout
```
