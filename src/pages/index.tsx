import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Sandbox from "npm/components/sandbox/sandbox";
import SearchBar from "npm/components/searchbar/searchbar";

import { api } from "npm/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>GPT Genesis</title>
        <meta name="description" content="GPT Genesis - Wikis by ChatGPT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
        <header>
          <h1 className="text-6xl font-bold">GPT Genesis</h1>
          <h2 className="text-center text-2xl font-bold">Wikis by ChatGPT</h2>
          <h3 className="text-center">Created by Xavier Loera Flores</h3>
        </header>
        <SearchBar />
        <span>Beginning of Sandbox</span>
        <Sandbox />
      </main>
    </>
  );
};

export default Home;
