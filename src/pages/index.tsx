import { type NextPage } from "next";
import Head from "next/head";
import Sandbox from "npm/components/sandbox/sandbox";
import Search from "npm/components/search/search";

const Home: NextPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-100">
      <Head>
        <title>GPT Genesis</title>
        <meta name="description" content="GPT Genesis - Wikis by ChatGPT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Search />
      <Sandbox />
    </main>
  );
};

export default Home;
