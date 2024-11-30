# Build and Deploy AI Chat App Using ReactJS, TailwindCSS, Appwrite 💥 Step-by-Step Tutorial

https://www.youtube.com/watch?v=cvd2XGJBgLg

https://gist.github.com/codewithsadee/79947ae799f6a0ff84b0f0ab3f152227

## Setup 13:20

```sh
npm create vite@latest phoenix


```

### Setup tailwind 14:23

https://tailwindcss.com/docs/guides/vite
```sh
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Modify tailwind.config.js
https://gist.github.com/codewithsadee/79947ae799f6a0ff84b0f0ab3f152227

Update index.css
https://gist.github.com/codewithsadee/79947ae799f6a0ff84b0f0ab3f152227

### Setup prettier for code formatting 17:34

```sh
npm i -D --save-exact prettier
```
.prettierrc and .prettierignore
https://gist.github.com/codewithsadee/79947ae799f6a0ff84b0f0ab3f152227

### Google font, icons and images 23:17

fonts.google.com 
Search DM Sans
https://fonts.google.com/specimen/DM+Sans
Get font -> Get embed code -> Change styles -> Weight - One value - Medium 500 -> Copy code

https://fonts.google.com/icons
Style - Rounded
Select the icon
Copy the "Static icon font"

Add pics from https://drive.google.com/file/d/1K0o82z-f8Zcb6A-2MMal_NUs_O6qlvmz/view

## react-helmet to change meta title and description 26:50

```sh
npm i react-helmet
npm i --save-dev @types/react-helmet
```

## Register page, component and css 30:05

## Appwrite 1:07

https://appwrite.io/
Create project: phoenix
Web
Name: phoenix(local)
HostName: localhost

Install SDK

Settings

## Register error handling: Snackbar and Context and hooks



## Framer motion  1:45

```
npm i framer-motion
```

## Login 1:59

## Reset Link

## Reset Password

## App 2:29

## Sidebar 3:06




## Gimini API 4:12
https://ai.google.dev/

Get API key

Put API key to .env file
install @google/generative-ai

## AppWrite DB  4:18


## React-markdown 5:01

```sh
npm i react-markdown remark-gfm
```

## Deploy to Vercel 6:24

https://vercel.com/pricing