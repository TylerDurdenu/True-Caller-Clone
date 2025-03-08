import Naming from "./naming";
import { useState } from "react";
import SpamReport from "./spamReport";
function SearchResults(params) {
  const [showNaming, setShowNaming] = useState(false);
  const [showReporting, setShowReporting] = useState(false);
  const handleGiveNameClick = () => {
    setShowNaming(true);
    setShowReporting(false);
  };
  const handleReportClick = () => {
    setShowNaming(false);
    setShowReporting(true);
  };
  return (
    <div>
      <ol>
        {params.data === "Invalid phone number" ? (
          <li>{params.data}</li>
        ) : (
          <>
            {params.data.names.length === 0 ? (
              <li>Name: No name found</li>
            ) : (
              <li>Name: {params.data.names}</li>
            )}
            <li>State: {params.data.state}</li>
            <li>Spam Score: {params.data.spamScore}</li>

            <li>Phone number{params.data.number}</li>
          </>
        )}
      </ol>
      <button onClick={handleGiveNameClick}>Give a name</button>
      <button onClick={handleReportClick}>Report</button>
      {showReporting && <SpamReport phone={params.data.number} />}
      {showNaming && <Naming phone={params.data.number} />}
    </div>
  );
}
export default SearchResults;
