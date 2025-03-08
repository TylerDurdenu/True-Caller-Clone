import info from "../assets/info.mp4";
function Home_Video() {
  return (
    <div className="homeVideo">
      <div className="videoInfo">
        <p className="new-text">NEW!</p>
        <h1>Truecaller finally works on iPhone!</h1>
        <p className="description">
          Truecaller finally works on iPhone! Know who’s calling in real time
          with the latest update. Powered by Apple’s new framework, it’s fast,
          secure and keeps you in control.
        </p>
        <button className="downloadBtn">Download Now!</button>
      </div>
      <div className="video">
        <video autoPlay muted loop>
          <source src={info} type="video/mp4" />
          your browser does not support this video
        </video>
      </div>
    </div>
  );
}
export default Home_Video;
