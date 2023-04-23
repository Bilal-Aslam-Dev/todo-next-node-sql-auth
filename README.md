This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

STEPS TO RUN THE PROJECT:

Firstly, you need GOOGLE_CLIENT_SECRET and GOOGLE_CLIENT_ID in .env file to use Google Auth in the project. You can create yours at https://console.cloud.google.com/apis/credentials, create a new project if you don't have one and click on create credentials, it takes 2 minutes.

1- Install the modules:
``npm i ``

2- Configure husky:
``npm run prepare``

3- Start MySQL and Apache:
``start MySQL and Apache service using XAMPP or any alternative tool``

4- Setup database:
``npx prisma migrate dev --name "db-init"``

5- Configure .env file
`` Copy .env.example and create a .env file in root directory ``

6- Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
