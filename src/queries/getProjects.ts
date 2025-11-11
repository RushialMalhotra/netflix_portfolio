// src/queries/getProjects.ts
import { GraphQLClient } from "graphql-request";

const DATOCMS_API_URL = "https://graphql.datocms.com/";
const API_TOKEN = process.env.REACT_APP_DATOCMS_READONLY_TOKEN;

if (!API_TOKEN) {
  console.error("❌ Missing DatoCMS API token. Set REACT_APP_DATOCMS_READONLY_TOKEN in .env.local");
}

const datoCMSClient = new GraphQLClient(DATOCMS_API_URL, {
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
});

export const getProjects = async () => {
  const QUERY = `
    {
      allProjects {
        projectTitle
        projectDescription(markdown: true)
        projectPrimaryLink
        projectNotebookLink
        projectTableauLink
        projectDemoLink
        projectTags
        projectThumbnail {
          url
          alt
        }
        projectGallery {
          url
          alt
        }
        projectSeoSettings {
          title
          description
          image {
            url
          }
        }
      }
    }
  `;

  try {
    console.log("🔄 Fetching Projects from DatoCMS...");
    const data = await datoCMSClient.request(QUERY);
    console.log("✅ Projects loaded successfully");
    return data;
  } catch (err) {
    console.error("🔥 DatoCMS project fetch failed:", err);
    return { allProjects: [] };
  }
};
