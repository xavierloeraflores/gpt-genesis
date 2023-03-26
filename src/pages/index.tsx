import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Sandbox from "npm/components/sandbox/sandbox";
import SearchBar from "npm/components/searchbar/searchbar";
import SearchResult from "npm/components/searchresult/searchresult";

import { api } from "npm/utils/api";
import type { SearchResultProps } from "npm/components/searchresult/searchresult";
import type { searchBarProps } from "npm/components/searchbar/searchbar";
import { useCallback, useState } from "react";
import Search from "npm/components/search/search";

export const useSearch = (
  searchText: string,
  setSearchResults: (results: Array<SearchResultProps>) => void
) => {
  console.log("searching");
  const results = api.articles.search.useQuery({ text: searchText }).data
    ?.searchResults;
  console.log("setting");
  setSearchResults(results as Array<SearchResultProps>);
};

const Home: NextPage = () => {
  const [searchResults, setSearchResults] = useState(Array<SearchResultProps>);

  // const hello = api.example.hello.useQuery({ text: "from tRPC" });
  // const results = api.articles.search.useQuery({ text: "hello" }).data
  //   ?.searchResults;

  // const useSearch = useCallback((searchText: string) => {
  //   console.log("searching");
  //   const results = api.articles.search.useQuery({ text: searchText }).data
  //     ?.searchResults;
  //   console.log("setting");
  //   setSearchResults(results as Array<SearchResultProps>);
  // }, []);

  // const search = (searchText: string) => {
  //   console.log("searching");
  //   const results = api.articles.search.useQuery({ text: searchText }).data
  //     ?.searchResults;
  //   console.log("setting");
  //   setSearchResults(results as Array<SearchResultProps>);
  // };

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
