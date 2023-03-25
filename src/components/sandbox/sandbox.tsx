import SearchBar from "../searchbar/searchbar";
import SearchResult from "../searchresult/searchresult";

const Sandbox: React.FC = () => {
  return (
    <div>
      <SearchBar />
      <SearchResult result="test" link="/helloworld" />
      <SearchResult result="test" link="/" />
      <SearchResult result="test" link="/" />
    </div>
  );
};
export default Sandbox;
