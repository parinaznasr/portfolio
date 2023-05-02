import React from "react";
import "./Contact.css";
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';

const ContactComponent = () => {
  return (
    <div className="contact-container">
      <div className="contact-items">
        <div className="contact-items-frame">
          <div className="contact-item fade-in">
            <div className="contact-logo"><FmdGoodIcon sx={{ fontSize: 45 }} /></div>
            <div className="contact-type">Location</div>
            <div className="contact-info">Vaughan, Ontario</div>
          </div>
          <div className="contact-item fade-in">
            <div className="contact-logo"><PhoneAndroidIcon sx={{ fontSize: 45 }} /></div>
            <div className="contact-type">Phone</div>
            <div className="contact-info">+1 (226) 977-1768</div>
          </div>
          <div className="contact-item fade-in">
            <div className="contact-logo"><EmailIcon sx={{ fontSize: 45 }} /></div>
            <div className="contact-type">Email</div>
            <a href="mailto:yasamanpazoki@gmail.com" className="contact-email">yasamanpazoki@gmail.com</a><br/>
            <a href="mailto:yasaman.pazoki@mail.utoronto.ca" className="contact-email">yasaman.pazoki@mail.utoronto.ca</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactComponent;
