To run this project you need to have Nodejs, Prisma, MySQL installed on your machine

Create a .env file in the root directory of the project and add the following variables:

```
DATABASE_URL
```

Then run the following commands in the root directory of the project:

```
npm install
```

```
npx prisma generate
```

```
npx prisma db push
```

```
export NODE_ENV=development
```

```
npm run build
```

```
npm start
```
