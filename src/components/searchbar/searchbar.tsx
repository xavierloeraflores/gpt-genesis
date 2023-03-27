import { useState } from "react";
import Button from "../button/button";

export interface SearchBarProps {
  setParentSearchText: (text: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ setParentSearchText }) => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="flex w-full rounded-md ">
      <input
        type="text"
        placeholder="Search"
        className="grow rounded-md border bg-transparent bg-white outline-none"
        onChange={(e) => {
          setSearchText(e.target.value);
          console.log(searchText);
        }}
      />
      <Button
        text="Search 🔎"
        onClick={() => setParentSearchText(searchText)}
      />
      <Button text="Generate" onClick={() => console.log("generating")} />
    </div>
  );
};
export default SearchBar;
