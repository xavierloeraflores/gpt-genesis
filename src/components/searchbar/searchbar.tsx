const SearchBar: React.FC = () => {
  return (
    <div className="flex w-full rounded-md border bg-white">
      <input
        type="text"
        placeholder="Search"
        className="grow border-r bg-transparent outline-none"
      />
      <button className="w-1/6  bg-transparent">🔎</button>
    </div>
  );
};
export default SearchBar;
