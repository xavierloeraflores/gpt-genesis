import { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import { api } from "npm/utils/api";
import { useRouter } from "next/router";

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
      <header className="flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-6xl font-bold">GPT Genesis</h1>
        <h2 className="text-center text-2xl font-bold">Wikis by ChatGPT</h2>
        <h3 className="text-center">Created by Xavier Loera Flores</h3>
      </header>
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
