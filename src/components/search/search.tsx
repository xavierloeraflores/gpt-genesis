import SearchBar from "npm/components/searchbar/searchbar";
import { useState } from "react";
import { useRouter } from "next/router";

import { api } from "npm/utils/api";
import SearchResultList from "../searchresultlist/searchresultlist";
import Button from "../button/button";

const Search: React.FC = () => {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");

  const { mutate } = api.articles.createArticle.useMutation({
    onSuccess: (data) => {
      console.log("Success!");
      console.log({ data });
      void router.push(`/generating/${data.response.id}`);
    },
    onError: (error) => {
      console.log("Error!");
      console.log({ error });
    },
  });

  return (
    <div>
      <SearchBar setParentSearchText={setSearchText} />
      <Button text="Generate!" onClick={() => mutate({ title: searchText })} />
      <SearchResultList searchText={searchText} />
    </div>
  );
};

export default Search;
