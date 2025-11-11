const { SiteClient } = require("datocms-client");
const fs = require("fs");

const client = new SiteClient(process.env.DATOCMS_API_TOKEN);
const data = JSON.parse(fs.readFileSync("./projects_import.json", "utf8"));

(async () => {
  try {
    for (const project of data) {
      const created = await client.items.create(project);
      console.log(`✅ Created project: ${created.project_title}`);
    }
    console.log("🎉 All projects uploaded successfully.");
  } catch (error) {
    console.error("❌ Upload failed:", error);
  }
})();
