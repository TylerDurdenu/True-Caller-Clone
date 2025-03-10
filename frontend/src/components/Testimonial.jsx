import testimonialImg from "../assets/testimonial.avif"
import Marquee from "../assets/marquee.png";
function Testimonial() {
    return (
        <div className="testimonial-container">
            <div className="testimonial-marquee">
                <img src={Marquee} alt="" />
            </div>
            <div className="testCont">
                <img src={testimonialImg} alt="" />
                <div >
                    <p className="new-text">IMPACT</p>
                    <p className="Gr">Making an Impact through Truecaller <span id="dot">.</span> </p>
                    <p>Truecaller was created to identify who was calling, but today it is being used to fight crimg, help loved ones</p>
                    <button className="downloadBtn">Read more</button>
                </div>
            </div>
        </div>
    )
}
export default Testimonial