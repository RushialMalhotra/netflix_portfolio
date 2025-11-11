import React, { useEffect, useState } from "react";
import "./ContactMe.css";
import profilePlaceholder from "../images/Rushial.jpeg";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaPhoneAlt,
  FaPaperPlane,
} from "react-icons/fa";
import getContactMe, { ContactInfo } from "../queries/getContactMe";

const ContactMe: React.FC = () => {
  const [info, setInfo] = useState<ContactInfo | null>(null);

  useEffect(() => {
    async function fetchContact() {
      const data = await getContactMe();
      setInfo(data);
    }
    fetchContact();
  }, []);

  if (!info) return <div className="contact-loading">Loading...</div>;

  const {
    ciEmailAddress,
    ciLinkedinProfile,
    ciGithubProfile,
    ciSheetEndpoint,
    phoneNumber,
    profileImage,
  } = info;

  return (
    <div className="contact-wrapper">
      <div className="contact-card glass">
        <img
          src={profileImage?.url || profilePlaceholder}
          alt="Rushial Malhotra"
          className="contact-avatar"
        />

        <div className="contact-content">
          <h2 className="contact-title">Let’s Connect</h2>
          <p className="contact-subtitle">
            Feel free to reach out — always open to new ideas and collaborations.
          </p>

          <div className="contact-links">
            {ciEmailAddress && (
              <a href={`mailto:${ciEmailAddress}`}>
                <FaEnvelope /> {ciEmailAddress}
              </a>
            )}
            {phoneNumber && (
              <a href={`tel:${phoneNumber}`}>
                <FaPhoneAlt /> {phoneNumber}
              </a>
            )}
            {ciLinkedinProfile && (
              <a href={ciLinkedinProfile} target="_blank" rel="noopener noreferrer">
                <FaLinkedin /> LinkedIn
              </a>
            )}
            {ciGithubProfile && (
              <a href={ciGithubProfile} target="_blank" rel="noopener noreferrer">
                <FaGithub /> GitHub
              </a>
            )}
            {ciSheetEndpoint && (
              <a href={ciSheetEndpoint} target="_blank" rel="noopener noreferrer">
                <FaPaperPlane /> Message Form
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
