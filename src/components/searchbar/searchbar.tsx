const SearchBar: React.FC = () => {
  return (
    <div className="flex w-full rounded-md border">
      <input
        type="text"
        placeholder="Search"
        className="grow  rounded-l-md border bg-transparent outline-none"
      />
      <button className="w-1/6 rounded-r-md border bg-transparent">🔎</button>
    </div>
  );
};
export default SearchBar;
