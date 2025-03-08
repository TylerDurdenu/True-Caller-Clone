import NavBar from "../components/navBar";
import SearchResults from "../components/searchResults";
import { useLocation } from "react-router-dom";

export default function Search() {
  const location = useLocation();
  const searchData = location.state?.searchData;
  return (
    <div>
        <NavBar/>
      {searchData ? <SearchResults data={searchData}/> : <p>No search results available</p>}
    </div>
  );
}
