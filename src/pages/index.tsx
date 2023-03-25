import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Sandbox from "npm/components/sandbox/sandbox";

import { api } from "npm/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="GPT Genesis - Wikis by ChatGPT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
        <span>Beginning of Sandbox</span>
        <Sandbox />
      </main>
    </>
  );
};

export default Home;
