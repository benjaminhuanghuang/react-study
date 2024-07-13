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

```