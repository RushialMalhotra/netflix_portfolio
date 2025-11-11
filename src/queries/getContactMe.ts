// src/queries/getContactMe.ts
import { GraphQLClient } from "graphql-request";

const DATOCMS_API_URL = "https://graphql.datocms.com/";
const API_TOKEN = process.env.REACT_APP_DATOCMS_READONLY_TOKEN;
const ENVIRONMENT = "main"; // ✅ override just for this module

if (!API_TOKEN) {
  console.error("❌ Missing DatoCMS API token. Set REACT_APP_DATOCMS_READONLY_TOKEN in .env.local");
}

const client = new GraphQLClient(DATOCMS_API_URL, {
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
    "X-Environment": ENVIRONMENT,
  },
});

// ✅ Correct camelCase GraphQL field names
const QUERY = `
  {
    contactInfo {
      ciEmailAddress
      ciLinkedinProfile
      ciGithubProfile
      ciSheetEndpoint
      phoneNumber
      profileImage {
        url
      }
    }
  }
`;

export interface ContactInfo {
  ciEmailAddress: string;
  ciLinkedinProfile: string;
  ciGithubProfile?: string;
  ciSheetEndpoint?: string;
  phoneNumber?: string;
  profileImage?: {
    url: string;
  };
}

interface ContactInfoResponse {
  contactInfo: ContactInfo;
}

export const getContactMe = async (): Promise<ContactInfo | null> => {
  try {
    console.log("🔄 Fetching Contact Info from DatoCMS...");
    const data = await client.request<ContactInfoResponse>(QUERY);
    console.log("✅ Contact Info fetched successfully:", data);
    return data?.contactInfo || null;
  } catch (err) {
    console.error("🔥 DatoCMS contact info fetch failed:", err);
    return null;
  }
};

export default getContactMe;
