# Tailwind + React

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