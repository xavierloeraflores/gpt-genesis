import { type NextPage } from "next";
import Head from "next/head";
import { api } from "npm/utils/api";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Generating: NextPage = () => {
  console.log("Generating page");
  const router = useRouter();
  const id: string = router.query.id as string;

  const { mutate } = api.articles.generate.useMutation({
    onSuccess: (data) => {
      console.log("Successful Page Generation!");
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
      <header className="flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-6xl font-bold">GPT Genesis</h1>
        <h2 className="text-center text-2xl font-bold">Wikis by ChatGPT</h2>
        <h3 className="text-center">Created by Xavier Loera Flores</h3>
      </header>
      <main>
        <h1>Generating</h1>
      </main>
    </>
  );
};

export default Generating;
