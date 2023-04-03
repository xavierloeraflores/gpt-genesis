import { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import { api } from "npm/utils/api";
import { useRouter } from "next/router";
import Header from "npm/components/header/header";

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
      <Header />
      <main>
        <h1>Wiki</h1>
        <h2>{article.title}</h2>
        <p>{article.content}</p>
        {article.images && article.images[0] && (
          <Image
            src={article.images[0].image}
            alt={article.title}
            width={300}
            height={300}
          />
        )}
      </main>
    </>
  );
};

export default Wiki;
