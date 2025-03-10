import NavBar from "../components/navBar";
import "../assets/styles/home.css";
import trueCallerHome from "../assets/true_caller_home.png";
import SearchComponent from "../components/search";
import true_caller_icon from "../assets/true_caller_icon.avif";
import Home_Video from "../components/home_vedio_cont";
import Footer from "../components/footer";
import SpamFight from "../components/SpamFight";
import Testimonial from "../components/Testimonial";
import FinalInfo from "../components/finalInfo";
export default function Home() {
  console.log("link clicked");
  return (
    <div>
      <div className="homeImg">
        <NavBar />
        <div className="homeContent">
          <div className="homeContel">
            <p>The World's Best Caller ID and Spam Blocking App</p>
            <div className="homeBtns">
              <button className="true_caller_btn">
                Try Truecaller for Free
              </button>
              <button className="google_play_btn">Google Play</button>
              <button className="app_store_btn">App Store</button>
            </div>
            <SearchComponent />
          </div>
        </div>
      </div>
      <Home_Video/>
      <SpamFight/>
      <Testimonial/>
      <FinalInfo/>
      <Footer/>
    </div>
  );
}
