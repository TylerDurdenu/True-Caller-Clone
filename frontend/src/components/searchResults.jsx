import Naming from "./naming";
import { useState } from "react";
import SpamReport from "./spamReport";
import spamReportImg from "../assets/markAsSpam.png";
import SaveContactImg from "../assets/saveContact.png";
import suggestNameImg from "../assets/suggestName.png";
import PhoneIcon from "../assets/phone_icon.png"
import AddressIcon from "../assets/address.png"

function SearchResults(params) {
  const [showNaming, setShowNaming] = useState(false);
  const [showReporting, setShowReporting] = useState(false);

  const isNotFound = params.data.names === "Not found" || params.data==="Invalid phone number" || params.data.names.length === 0;

  const nameCounts = !isNotFound
    ? params.data.names.reduce((acc,name)=> {
        acc[name] = (acc[name] || 0)+1;
      return acc;
    },{}):{};
  const mostFrequentName = !isNotFound 
      ? Object.keys(nameCounts).reduce((a, b) =>
          nameCounts[a] >= nameCounts[b] ? a : b
        )
      : "No frequent name found";

  const allUnique = !isNotFound && Object.values(nameCounts).every(count=> count ===1);

  const displayName = isNotFound ? "No name found" : allUnique ? params.data.names[0] : mostFrequentName;

  const handleGiveNameClick = () => {
    setShowNaming(true);
    setShowReporting(false);
  };
  const handleReportClick = () => {
    setShowNaming(false);
    setShowReporting(true);
  };
  const handleDownload = () => {
    const dataStr = JSON.stringify(params.data, null, 2); 
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement("a");
    a.href = url;
    a.download = "search_result.json"; 
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);  
  };


  return (
    <div className="searchResultsCard">
      <div className="search-card-name">
        <p>Identified by <span id="itFont">true</span><span id="bdR">caller</span></p>
        <ol>
          {params.data === "Invalid phone number" ? (
            <li style={{color:"red"}} className="user_name">{params.data}</li>
          ) : (
            <>
              {params.data.names.length === 0 ? (
                <li className="user_name">Name: No name found</li>
              ) : (
                <li className="user_name">Name: {displayName}</li>
              )}
            </>
          )}
        </ol>
        <div className="searchCardBtns">
        <button onClick={handleDownload}>
          <img src={SaveContactImg} alt="" />
          Save Contact</button> 
        <button onClick={handleGiveNameClick}>
          <img src={suggestNameImg} alt="" />
          Suggest name</button>
        <button id="cr" onClick={handleReportClick}>
        <img src={spamReportImg} alt="" />

          Mark as Spam</button>
      </div>
      </div>
      
      <div className="otherSearchInfo">
        <li >
          <img className="searchResIcon" src={PhoneIcon} alt="" />
            <p className="resultHead">M-{params.data.carrier}</p></li>
        <li className="phone_num">{params.data.number}</li>
        <li className="resultHead">
          <img className="searchResIcon" src={AddressIcon} alt="" />
            <p className="resultHead">Address</p>
        </li>
        <li className="address">          {params.data.state}, {params.data.countryName}</li>

        <li id="spam">Spam Score: {params.data.spamScore}</li>

        
      </div>
      {showReporting && (
  <div className="popup-overlay">
    <div className="report-popup-container">
      <button className="popup-close" onClick={() => setShowReporting(false)}>X</button>
      <SpamReport phone={params.data.number} />
    </div>
  </div>
)}

{showNaming && (
  <div className="popup-overlay">
    <div className="popup-container">
      <button className="popup-close" onClick={() => setShowNaming(false)}>X</button>
      <Naming phone={params.data.number} />
    </div>
  </div>
)}

    </div>
  );
}
export default SearchResults;
