import SearchBar from "npm/components/searchbar/searchbar";
import SearchResult from "npm/components/searchresult/searchresult";

import { api } from "npm/utils/api";
import { useState } from "react";

import SearchResultList from "../searchresultlist/searchresultlist";

const Search: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <div>
      <SearchBar setParentSearchText={setSearchText} />
      <SearchResultList searchText={searchText} />
    </div>
  );
};

export default Search;
