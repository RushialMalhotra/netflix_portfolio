import React from "react";
import "./ProfileBanner.css";

const ProfileBanner: React.FC = () => {
  const linkedinUrl = "https://www.linkedin.com/in/rushial-malhotra/";
  const resumeUrl = "https://www.datocms-assets.com/181937/1762825499-rushial_businessanalyst_resume.pdf";

  const handleResumeClick = () => window.open(resumeUrl, "_blank");
  const handleLinkedinClick = () => window.open(linkedinUrl, "_blank");

  return (
    <section className="profile-banner">
      <video
        className="banner-video"
        src="/videos/profile-banner.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="banner-overlay" />

      <div className="banner-content">
        <h1 className="banner-headline">
          Rushial Malhotra — Technical Business Analyst
        </h1>

        <p className="banner-description">
          “They say curiosity killed the cat—but in my case, it just made me the
          person who asks one question too many. Maybe a little annoying, but
          it’s also how I’ve learned to understand the people behind the
          data—and it’s served me well so far. I recently completed my Master’s
          in Business Analytics at University College Dublin, where I explored
          how data can drive change when we keep humanity at the center of every
          insight. Before that, I worked on large-scale IT projects for the
          Government of India, building systems that aimed to turn policy into
          tools people could actually use. It taught me that technology only
          matters when it works for those it’s built for. Later, at Bank of
          America, I dove into risk-weighted asset modeling and capital
          management—where every query could influence regulatory outcomes and
          capital efficiency. That experience deepened my fascination with how
          data shapes real-world decisions across industries. Now, I’m focused
          on bridging technology, analytics, and business strategy—applying a
          systems mindset shaped by public service, refined by global banking,
          and grounded in curiosity that never really switches off.”
        </p>

        <div className="banner-buttons">
          {/* Resume Button */}
          <button className="play-button" type="button" onClick={handleResumeClick}>
            <div className="icon-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="black"
                role="img"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                aria-hidden="true"
              >
                <path
                  d="M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className="spacer"></div>
            <span className="label">Resume</span>
          </button>

          {/* LinkedIn Button */}
          <button className="more-info-button" type="button" onClick={handleLinkedinClick}>
            <div className="icon-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                role="img"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="spacer"></div>
            <span className="label">Linkedin</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProfileBanner;
