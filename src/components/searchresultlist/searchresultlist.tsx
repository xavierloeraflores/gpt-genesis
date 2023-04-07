import SearchResult from "../searchresult/searchresult";
import { api } from "npm/utils/api";

export interface SearchResultListProps {
  searchText: string;
}

const SearchResultList: React.FC<SearchResultListProps> = ({ searchText }) => {
  const searchResults = api.articles.search.useQuery({ text: searchText }).data
    ?.searchResults;

  return (
    <div>
      {searchResults ? (
        searchResults.map((result) => (
          <SearchResult
            id={result.id}
            title={result.title}
            key={result.id}
            generated={result.generated}
            images={result.images}
          />
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default SearchResultList;
