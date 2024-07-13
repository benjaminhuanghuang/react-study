# React Crash Course 2024

https://www.youtube.com/watch?v=LDB4uaJ87e0

https://github.com/bradtraversy/react-crash-2024


## Setup
```sh
npm create vite@latest react-crash-2024
```
config the port in vite.config.js
```js
export default defineConfig({
  ...
  server:{
    port: 3721
  }
})
```

Search "install Tailwind CSS with Vite"
```sh
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
update tailwind.config.js
```js
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
theme: {
    extend: {
        fontFamily: {
            sans: ['Roboto', 'sans-serif'],
        },
        gridTemplateColumns: {
            '70/30': '70% 28%',
        },
    },
},
```
Add css in to index.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Create components
```sh
npm i react-icons
```
```js
import { FaMapMarker } from 'react-icons/fa';
```


## State

Component State

```ts
import { useState } from 'react';


const [showFullDescription, setShowFullDescription] = useState(false);
```

## Router
```sh
npm i react-router-dom
```

App.jsx
```jsx

import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';

 const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />
        <Route
          path='/edit-job/:id'
          element={<EditJobPage updateJobSubmit={updateJob} />}
          loader={jobLoader}
        />
        <Route
          path='/jobs/:id'
          element={<JobPage deleteJob={deleteJob} />}
          loader={jobLoader}
        />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;

```

Highlight the active link
```js
const linkClass = ({ isActive }) =>
    isActive
      ? 'bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
      : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2';

 <NavLink to='/add-job' className={linkClass}>
    Add Job
  </NavLink>
```


```js
import { Outlet } from 'react-router-dom';

import { NavLink } from 'react-router-dom';

import { Link } from 'react-router-dom';

```

## Server side
```sh
npm  i -D json-server

json-server --watch src/job.json --port 8964
```

## Fetch data
```jsx
useEffect(() => {
  const fetchJobs = async () => {
    const apiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs';
    try {
      const res = await fetch(apiUrl);
      const data = await res.json();
      setJobs(data);
    } catch (error) {
      console.log('Error fetching data', error);
    } finally {
      setLoading(false);
    }
  };

  fetchJobs();
}, []);
```