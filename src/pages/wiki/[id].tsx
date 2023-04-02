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
  const response = api.articles.getArticleByIdWithContent.useQuery({ id });

  if (!response || response.error || !response.data) {
    return <div>Error</div>;
  }
  const article = response?.data;

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
        <p>{article.content}</p>
        {article.images && article.images[0] && (
          <img src={article.images[0].image} alt={article.title} />
        )}
      </main>
    </>
  );
};

export default Wiki;
