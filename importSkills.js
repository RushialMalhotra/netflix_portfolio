// importSkills.js
const { buildClient } = require("@datocms/cma-client");
const fs = require("fs");

const client = buildClient({ apiToken: process.env.DATOCMS_API_TOKEN });
const skills = JSON.parse(fs.readFileSync("skills.json", "utf-8")).items;

// ✅ Use the correct model ID for your Skill model
const skillModelId = "IyxDEfJQRiC3e0o7Qkf4cA";

(async () => {
  console.log(`🚀 Starting import of ${skills.length} skills...`);
  for (const skill of skills) {
    try {
      await client.items.create({
        item_type: { type: "item_type", id: skillModelId },
        skill_name: skill.skillName,
        skill_category: skill.skillCategory,
        skill_level: skill.skillLevel,
        skill_icon_key: skill.skillIconKey,
      });
      console.log(`✅ Imported: ${skill.skillName}`);
    } catch (error) {
      console.error(`❌ Failed: ${skill.skillName}`);
      console.error(JSON.stringify(error, null, 2));
    }
  }
  console.log("🎯 All done!");
})();
