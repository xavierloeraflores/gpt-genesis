import { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import { api } from "npm/utils/api";
import { useRouter } from "next/router";

interface Article {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}
interface ArticleProps {
  article: Article;
}

const Wiki: NextPage = () => {
  const router = useRouter();
  const id: string = router.query.id as string;
  const response = api.articles.getArticleById.useQuery({ id });
  if (!response || response.error || !response.data) {
    return <div>Error</div>;
  }
  const article = response?.data;

  if (article.generated == 0) {
    return (
      <>
        <h1>Generating</h1>
        {
          // setTimeout(() => {router.reload();}, 3000)
        }
      </>
    );
  }

  return (
    <>
      <Head>
        <title>GPT Genesis</title>
        <meta name="description" content="GPT Genesis - Wikis by ChatGPT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Wiki</h1>
      <header>
        <h1>GPT Genesis</h1>
        <h2>Wikis by ChatGPT</h2>
        <h3>Created by Xavier Loera Flores</h3>
      </header>
      <main>
        <h1>Wiki</h1>
        <h2>{article.title}</h2>
      </main>
    </>
  );
};

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   // const router = useRouter();
//   // const id:string = router.query.id as string;
//   //   const id: string = (context.params?.id as string) || "";
//   const id: string = (context.params?.id as string) || "";

//   const article = api.articles.getArticleById.useQuery({ id });
//   if (article.error) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     notFound: false,
//     props: {
//       article: article.data,
//     },
//   };
// };

export default Wiki;
