import FooterTopImg from "../assets/footerTopImg.avif";

function FinalInfo() {
    return (
        <div className="finalInfo">
            <div>
                <img src={FooterTopImg} alt="" />
            </div>
            <div className="finalCont">
                <p className="new-text">DOWNLOAD NOW</p>
                <p className="Gr">Trust your communication with Truecaller</p>
                <p>Truecaller was created to identify who was calling, but today it is being used to fight crimg, help loved ones</p>
                <button className="true_caller_btn t">
                Try Truecaller for Free
              </button>
              <button className="google_play_btn g">Google Play</button>
              <button className="app_store_btn a">App Store</button>
            </div>
        </div>
    );
}
export default FinalInfo;