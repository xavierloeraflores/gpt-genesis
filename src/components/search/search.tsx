import SearchBar from "npm/components/searchbar/searchbar";
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
