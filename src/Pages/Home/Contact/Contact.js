import React, {useState} from "react";
import "./Contact.css";
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import Container from "@mui/material/Container";

const CopyToClipboard = ({ content, children }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    const handleClick = () => {
        navigator.clipboard.writeText(content);
        setShowTooltip(true);
        setTimeout(() => {
            setShowTooltip(false);
        }, 2000);
    };

    return (
        <div style={{ position: "relative", display: "inline-block" }}>
            <span onClick={handleClick}>{children}</span>
            {showTooltip && (
                <div
                    style={{
                        position: "absolute",
                        top: "100%",
                        left: "50%",
                        transform: "translateX(-50%)",
                        padding: "5px",
                        background: "#333",
                        color: "#fff",
                        borderRadius: "3px",
                        fontSize: "14px",
                        whiteSpace: "nowrap",
                    }}
                >
                    Copied to clipboard!
                </div>
            )}
        </div>
    );
};

const ContactComponent = () => {
  return (
    <div className="contact-container">
        <Container>
      <div className="contact-items">
          <div className="contact-item fade-in">
            <div className="contact-logo"><FmdGoodIcon sx={{ fontSize: 45 }} /></div>
            <div className="contact-type">Location</div>
            <div className="contact-info">Vaughan, Ontario</div>
          </div>
          <div className="contact-item fade-in">
            <div className="contact-logo"><PhoneAndroidIcon sx={{ fontSize: 45 }} /></div>
            <div className="contact-type">Phone</div>
            <div style={{cursor: 'pointer'}} className="contact-info">
                <CopyToClipboard className="contact-info" content="+1 (226) 977-1768">
                    <span>+1 (226) 977-1768</span>
                </CopyToClipboard>
            </div>
          </div>
          <div className="contact-item fade-in">
            <div className="contact-logo"><EmailIcon sx={{ fontSize: 45 }} /></div>
            <div className="contact-type">Email</div>
            {/*<a href="mailto:yasamanpazoki@gmail.com" className="contact-email">*/}
            {/*    <CopyToClipboard className="contact-info" content="yasamanpazoki@gmail.com">*/}
            {/*        <span>yasamanpazoki@gmail.com</span>*/}
            {/*    </CopyToClipboard>*/}
            {/*</a><br/>*/}
            <a href="mailto:yasaman.pazoki@mail.utoronto.ca" className="contact-email">
                <CopyToClipboard className="contact-info" content="yasaman.pazoki@mail.utoronto.ca">
                    <span>yasaman.pazoki@mail.utoronto.ca</span>
                </CopyToClipboard>
            </a>
          </div>
      </div>
        </Container>
    </div>
  );
}

export default ContactComponent;
