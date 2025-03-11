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
                
              <div className="finalInfoBtnContainer">
                <a style={{textDecoration:"none"}} href="https://play.google.com/store/apps/details?id=com.truecaller&rdid=com.truecaller&referrer=utm_source%3Dweb--header--index">
                    <button className="true_caller_btn t">
                        Try Truecaller for Free
                    </button>
                </a>
                <a style={{textDecoration:"none"}} href="https://play.google.com/store/apps/details?id=com.truecaller&rdid=com.truecaller&referrer=utm_source%3Dweb--header--index">
                    <button className="google_play_btn g">Google Play</button>
                </a>
                <a style={{textDecoration:"none"}} href="https://apps.apple.com/us/app/truecaller-number-caller-id/id448142450">
                    <button className="app_store_btn a">App Store</button>
                </a>
              </div>
            </div>
        </div>
    );
}
export default FinalInfo;