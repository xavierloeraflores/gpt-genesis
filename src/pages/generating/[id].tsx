import { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import { api } from "npm/utils/api";
import { useRouter } from "next/router";
import { useEffect } from "react";

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

const Generating: NextPage = () => {
  console.log("Generating page");
  const router = useRouter();
  const id: string = router.query.id as string;

  const { mutate } = api.articles.generate.useMutation({
    onSuccess: async (data) => {
      console.log("Success!");
      console.log({ data });
      void router.push(`/wiki/${id}`);
    },
    onError: (error) => {
      console.log("Error!");
      console.log({ error });
    },
  });

  useEffect(() => {
    console.log("Generating page useEffect");
    mutate({ id: id });
  }, []);

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
        <h1>Generating</h1>
      </main>
    </>
  );
};

export default Generating;
