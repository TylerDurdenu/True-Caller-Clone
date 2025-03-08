import React from 'react';
import '../assets/styles/TrueCaller.css'; // Import your CSS file

function ForAndroid() {
    return (
        <div className="truecaller-page">
            <div className="header">
                <h1>Truecaller for Android</h1>
            </div>

            <div className="content">
                <div className="phone-container">
                    <div className="phone-screen">
                        <div className="phone-number">+91 12346789</div>
                        <div className="insurance-scam">Insurance Scam<br />NAME CALL | BANK INFO.</div>
                        <div className="call-controls">
                            <button className="red">📞</button>
                            <button className="green">📞</button>
                        </div>
                    </div>
                </div>

                <div className="features">
                    <div className="feature blue">
                        <h3>Spam Call Identification and Blocking</h3>
                        <p>Identify and block unwanted spam calls easily with Truecaller. You can manage your block list or activate auto-block.</p>
                        <a href="#">Read more →</a>
                    </div>
                    <div className="feature">
                        <h3>Reverse Phone Lookup</h3>
                    </div>
                    <div className="feature">
                        <h3>Message ID</h3>
                    </div>
                    <div className="feature">
                        <h3>Fraud Detection of SMS</h3>
                    </div>
                    <div className="feature">
                        <h3>Caller ID</h3>
                    </div>
                    <div className="feature">
                        <h3>Identify Unknown Calls & Messages on WhatsApp, Telegram</h3>
                    </div>
                    <div className="feature">
                        <h3>Call Screening by Truecaller Assistant</h3>
                    </div>
                    <div className="feature">
                        <h3>Messaging with Truecaller</h3>
                    </div>
                    <div className="feature">
                        <h3>Truecaller's Call Features</h3>
                    </div>
                    <div className="feature">
                        <h3>Call Recording</h3>
                    </div>
                </div>
            </div>

            <div className="bottom-bar"></div>
        </div>
    );
}

export default ForAndroid;