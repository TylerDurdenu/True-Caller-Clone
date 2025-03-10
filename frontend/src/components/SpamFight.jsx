import NoPhone from "../assets/no_call.png"
import NoMessages from "../assets/no_message.png"
import UserCalls from "../assets/user_calls.png"
import Rating from "../assets/ratings.png"
import Verify from "../assets/verify.png"
import Downloads from "../assets/downloads.png"
function SpamFight() {
    return (
        <div className="spamFight">
            <div className="spam_fight_head">
                <h3>Our fight against spam in 2024</h3>
            </div>
            <div className="spam-fight-content">
                <div className="spam-fight-img-and-des">
                    <div id="mrR">
                        <img  className="spam-fight-icons" src={NoPhone} alt="" />
                        <p className="spam-fight-num">56 billion+</p>
                        <p className="spam-fight-des">Spam & fraud calls identified</p>
                    </div>
                    <div>
                        <img className="spam-fight-icons" src={NoMessages} alt="" />
                        <p className="spam-fight-num">3.2 trillion+</p>
                        <p className="spam-fight-des">Unknown calls identified</p>
                    </div>
                    <div>
                        <img className="spam-fight-icons" src={UserCalls} alt="" />
                        <p className="spam-fight-num">56 billion+</p>
                        <p className="spam-fight-des">Spam & fraud calls identifies</p>
                    </div>
                </div>
                <div className="spamFight-middle">
                    <hr className="cR" />
                    <p className="spam-users">Loved by our users</p>
                    <hr className="cR" />
                </div>
                <div className="spam-fight-img-and-des">
                    <div id="mrR">
                        <img className="spam-fight-icons" src={Verify} alt="" />
                        <p className="spam-fight-num">433 million</p>
                        <p className="spam-fight-des"> Monthly active users</p>
                    </div>
                    <div>
                        <img className="spam-fight-icons" src={Downloads} alt="" />
                        <p className="spam-fight-num">1 billion+</p>
                        <p className="spam-fight-des">Downloads</p>
                    </div>
                    <div>
                        <img className="spam-fight-icons" src={Rating} alt="" />
                        <p className="spam-fight-num">1.5 million+</p>
                        <p className="spam-fight-des">5-star ratings</p>
                    </div>
                </div>
            </div>
            <div className="spam-fight-btn">
                <button className="downloadBtn sp">Download Truecaller</button>
            </div>

        </div>
    );
}

export default SpamFight;