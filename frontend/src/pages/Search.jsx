import NavBar from "../components/navBar";
import SearchResults from "../components/searchResults";
import { useLocation } from "react-router-dom";
import SearchComponent from "../components/search";
import "../assets/styles/searchResults.css"
import tick_icon from "../assets/tick_icon.png"
import FinalInfo from "../components/finalInfo";
import Footer from "../components/footer";

export default function Search() {
  const location = useLocation();
  const searchData = location.state?.searchData;
  return (
    <div>
        <NavBar/>
        <div className="searchAdv">
          <img id="icon" src={tick_icon} alt="error" />
          <p id="t_text">Verify any number using Truecaller </p>
        </div>
        <div class="searchResults">
          {searchData ? <SearchResults data={searchData}/> : <p>No search results available</p>}

        </div>
        <FinalInfo/>
        <Footer/>
        </div>

  );
}
