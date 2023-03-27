import SearchBar from "npm/components/searchbar/searchbar";
import { useState } from "react";

import { api } from "npm/utils/api";
import SearchResultList from "../searchresultlist/searchresultlist";
import Button from "../button/button";

const Search: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const { mutate, isLoading } = api.articles.generate.useMutation({
    onSuccess: (data) => {
      console.log("Success!");
      console.log({ data });
    },
    onError: (error) => {
      console.log("Error!");
      console.log({ error });
    },
  });
  return (
    <div>
      <SearchBar setParentSearchText={setSearchText} />
      <Button text="Generate!" onClick={() => mutate({ text: searchText })} />
      <SearchResultList searchText={searchText} />
    </div>
  );
};

export default Search;
