import Link from "next/link";

export interface SearchResultProps {
  result: string;
  link: string;
}

const SearchResult: React.FC<SearchResultProps> = ({ result, link }) => {
  return (
    <Link
      href={link}
      className="my-1 flex w-full w-full rounded-sm border bg-white p-1"
    >
      <span className="">{result}</span>
    </Link>
  );
};

export default SearchResult;
