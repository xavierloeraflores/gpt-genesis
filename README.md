To run this project you need to have Nodejs, Prisma, MySQL installed on your machine.
You will also need an OpenAI API key. You will need an account with OpenAI to get an API key. You can then find your API key here: https://platform.openai.com/account/api-keys

Create a .env file in the root directory of the project and add the following variables:

```
DATABASE_URL
OPENAI_API_KEY
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
