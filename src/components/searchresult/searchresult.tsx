import Link from "next/link";

export interface SearchResultProps {
  title: string;
  id: string;
}

const SearchResult: React.FC<SearchResultProps> = ({ title, id }) => {
  console.log("hello", id, title);
  return (
    <Link
      href={`/${id}`}
      className="my-1 flex w-full w-full rounded-sm border bg-white p-1"
    >
      <span className="">{title}</span>
    </Link>
  );
};

export default SearchResult;
