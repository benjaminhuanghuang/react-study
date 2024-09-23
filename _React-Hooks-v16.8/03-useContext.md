# useContext
Manage a state globally

```js
// context/index.js
import { createContext } from 'react'

export context GlobalContext = createContext(null);
function GlobalState({children}) {
    const [theme, setTheme] = useState('light');
    return( 
        <GlobalContext.Provider value={{theme, setTheme}}>
            {children}
        </GlobalContext.Provider>
    );
}


// App.js
<GlobalState>
    <App/>
</GlobalState>

// use context
function MyComponent() {
    const [setTheme, theme] = useContext(GlobalContext);

    return(

    );
}
```