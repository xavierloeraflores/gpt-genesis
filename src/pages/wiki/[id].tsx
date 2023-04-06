import { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import { api } from "npm/utils/api";
import { useRouter } from "next/router";
import Header from "npm/components/header/header";
import Footer from "npm/components/Footer/footer";

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
        <h1 className="w-full text-center text-4xl">{article.title}</h1>
        {article.images && article.images[0] && (
          <Image
            src={article.images[0].image}
            alt={article.title}
            width={300}
            height={300}
            className="float-right"
          />
        )}
        <p>{article.content}</p>
      </main>
      <Footer />
    </>
  );
};

export default Wiki;
