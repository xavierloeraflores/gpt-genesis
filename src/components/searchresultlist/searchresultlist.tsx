import SearchResult from "../searchresult/searchresult";
import { useState, useEffect } from "react";
import type { SearchResultProps } from "../searchresult/searchresult";
import { api } from "npm/utils/api";

export interface searchResultListProps {
  searchText: string;
}

const SearchResultList: React.FC<searchResultListProps> = ({ searchText }) => {
  const searchResults = api.articles.search.useQuery({ text: searchText }).data
    ?.searchResults;
  console.log("setting");

  return (
    <div>
      {searchResults ? (
        searchResults.map((result) => (
          <SearchResult id={result.id} title={result.title} key={result.id} />
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default SearchResultList;
