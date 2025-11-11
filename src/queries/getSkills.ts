// src/queries/getSkills.ts
import { request } from "graphql-request";

const DATOCMS_API_URL = "https://graphql.datocms.com/";
const API_TOKEN = process.env.REACT_APP_DATOCMS_READONLY_TOKEN;

const query = `
  {
    allSkills {
      id
      skillName
      skillCategory
      skillIcon {
        url
      }
      skillLevel
      skillIconKey
    }
  }
`;

export default async function getSkills() {
  if (!API_TOKEN) {
    console.error("❌ Missing DatoCMS API token. Set REACT_APP_DATOCMS_READONLY_TOKEN in .env.local");
    return [];
  }

  console.log("🔄 Fetching Skills from DatoCMS...");

  try {
    const headers = {
      Authorization: `Bearer ${API_TOKEN}`,
    };

    const data: any = await request(DATOCMS_API_URL, query, {}, headers);
    const skills = data?.allSkills || [];

    const formatted = skills.map((s: any) => ({
      id: s.id,
      name: s.skillName,
      category: s.skillCategory,
      icon: s.skillIcon?.url || "",
      level: s.skillLevel || 0,
      iconKey: s.skillIconKey || "",
    }));

    if (!formatted.length) {
      console.warn("⚠️ No skills found or schema mismatch", data);
    } else {
      console.log(`✅ Loaded ${formatted.length} skills from DatoCMS`);
    }

    return formatted;
  } catch (err: any) {
    console.error("🔥 DatoCMS request failed:", err);
    return [];
  }
}
