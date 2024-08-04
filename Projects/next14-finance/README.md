# Build a Finance SaaS Platform With Nextjs, React, Honojs with CSV Upload (2024)
https://www.youtube.com/watch?v=N_uNKAus0II


## Setup
```bash
npx create-next-app@latest finance-tutorial

npx shadcn-ui@latest init
npx shadcn-ui@latest add button
```

## Auth
https://dashboard.clerk.com/
Create new application

Install
```bash
npm i @clerk/nextjs
```

Set env variable

Modify layout.tsx, Add ClerkProvider

Add middleware.ts
https://clerk.com/docs/references/nextjs/custom-signup-signin-pages?_gl=1*v9dl36*_gcl_au*MTkwMzIwMjY3MS4xNzIyODAzNDU4*_ga*MjE0MTY5NzQwMS4xNzIyODAzNDU4*_ga_1WMF5X234K*MTcyMjgwMzQ1Ny4xLjEuMTcyMjgwMzUyOC4wLjAuMA..