# Babel
    - Babel is transpiler for javascript
    - for JSX
    - for ES6

## Use Babel(5.x) as browser transpiler
    - https://cdnjs.com/libraries/babel-core
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.34/browser.js"></script>
    <script type="text/babel">
        ReactDOM.render( <ul>
                <li>apple</li> 
                <li>facebook</li> 
                <li>google</li> 
                </ul>, document.getElementById('react-jsx-container'));
    </script>

# Online jsx transpile
    https://babeljs.io/repl/  transpile jsx to javascript


# Command line
Install babel
```
    npm i babel-cli -g
```
using the Babel CLI with a watch (-w) and a directory flag (-d) to compile all
source JSX files from /jsx to a destination folder /js, and recompile on
changes.
```
    "scripts": {
    "build-clock": "babel /jsx -d /js -w"
    },
```