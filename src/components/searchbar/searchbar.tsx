import { useState } from "react";
import Button from "../button/button";

export interface SearchBarProps {
  setParentSearchText: (text: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ setParentSearchText }) => {
  return (
    <div className="flex w-full rounded-md">
      <input
        type="text"
        placeholder="Search 🔎"
        className="grow rounded-md border bg-transparent bg-white p-1 outline-none"
        onChange={(e) => {
          setParentSearchText(e.target.value);
        }}
      />
      <Button text="Generate" onClick={() => console.log("generating")} />
    </div>
  );
};
export default SearchBar;
