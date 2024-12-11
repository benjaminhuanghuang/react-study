
# React + TS + Tailwind + ESlint + Prettier Boilerplate

## Setup

### Vite project setup
- Change port

### Support alias @
Modify vite.config.ts
```js
resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Map '@' to the 'src' directory
    },
  },
```
Install type for path module
```sh
npm i @types/node -D
```

Add the same alias in your tsconfig.json file under the paths property:
```json
{
  "compilerOptions": {
    "baseUrl": ".", // Ensure this is set to the root directory
    "paths": {
      "@/*": ["src/*"] // Map '@/*' to 'src/*'
    }
  }
}
```

### Jest
```sh
npm i -D jest
```

### Prettier
```sh
npm i -D prettier
```
Modify .prettierrc

### Router
```sh
npm install react-router-dom
```
### Tailwind

https://tailwindcss.com/docs/guides/vite
```sh
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Modify tailwind.config.js

Update index.css




## Dark mode



## Nav

