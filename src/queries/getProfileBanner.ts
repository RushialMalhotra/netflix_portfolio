import datoCMSClient from "./datoCMSClient";

const getProfileBanner = async () => {
  const QUERY = `
    {
      profileBanner {
        headline
        tagline
        profileSummary
        linkedinLink
        githubLink
        resumeLink {
          url
        }
        profileImage {
          responsiveImage(imgixParams: { fit: crop, w: 400, h: 400, auto: format }) {
            src
            width
            height
            alt
          }
        }
        backgroundImage {
          url
        }
        seoSettings {
          title
          description
          image {
            url
          }
        }
      }
    }
  `;
  return datoCMSClient.request(QUERY);
};

export default getProfileBanner;
