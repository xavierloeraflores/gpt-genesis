import { type NextPage } from "next";
import Head from "next/head";
import Sandbox from "npm/components/sandbox/sandbox";
import Search from "npm/components/search/search";

const Home: NextPage = () => {
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
      <main className="flex min-h-screen flex-col items-center bg-gray-100">
        <Search />
        <span>Beginning of Sandbox</span>
        <Sandbox />
      </main>
    </>
  );
};

export default Home;
