import { useState } from "react";

import type { SearchResultProps } from "../searchresult/searchresult";

export interface searchBarProps {
  setParentSearchText: (text: string) => void;
}

const SearchBar: React.FC<searchBarProps> = ({ setParentSearchText }) => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="flex w-full rounded-md border bg-white">
      <input
        type="text"
        placeholder="Search"
        className="grow border-r bg-transparent outline-none"
        onChange={(e) => {
          setSearchText(e.target.value);
          console.log(searchText);
        }}
      />
      <button
        onClick={() => setParentSearchText(searchText)}
        className="w-1/6  bg-transparent"
      >
        🔎
      </button>
      <button className="w-1/6  bg-transparent">Generate</button>
    </div>
  );
};
export default SearchBar;
