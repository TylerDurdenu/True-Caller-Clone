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
import GoogleIcon from "../assets/google_play_icon.png";
import AppleIcon from "../assets/apple_btn_icon.webp";
import tIcon from "../assets/t_icon.png";
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
              <a href="https://play.google.com/store/apps/details?id=com.truecaller&rdid=com.truecaller&referrer=utm_source%3Dweb--header--index">
                <button className="true_caller_btn">
                  <img  className="btnIcons" src={tIcon} alt="" />
                  Try Truecaller for Free
                </button>
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.truecaller&rdid=com.truecaller&referrer=utm_source%3Dweb--header--index">
                <button className="google_play_btn">
                  <img className="btnIcons" src={GoogleIcon} alt="" />
                  Google Play
                </button>
              </a>
              <a href="https://apps.apple.com/us/app/truecaller-number-caller-id/id448142450">
                <button className="app_store_btn">
                  <img className="btnIcons" src={AppleIcon} alt="" />
                  App Store
                </button>
              </a>
            </div>
            <SearchComponent />
          </div>
        </div>
      </div>
      <Home_Video />
      <SpamFight />
      <Testimonial />
      <FinalInfo />
      <Footer />
    </div>
  );
}
