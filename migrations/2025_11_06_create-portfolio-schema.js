/**
 * Migration: Create Portfolio Schema (Final Clean Version)
 * Compatible with DatoCMS CLI v3
 */

module.exports = async (client) => {
  console.log("🚀 Creating schema for Rushial Portfolio…");

  // ============================
  // 1. Profile Banner
  // ============================
  const profileBanner = await client.itemTypes.create({
    name: "Profile Banner",
    api_key: "profile_banner",
    singleton: true,
  });

  await client.fields.create(profileBanner.id, {
    label: "Headline",
    field_type: "string",
    api_key: "pb_headline",
    validators: { required: {} },
  });

  await client.fields.create(profileBanner.id, {
    label: "Tagline",
    field_type: "string",
    api_key: "pb_tagline",
  });

  await client.fields.create(profileBanner.id, {
    label: "Profile Summary",
    field_type: "text",
    api_key: "pb_summary",
  });

  await client.fields.create(profileBanner.id, {
    label: "Profile Image",
    field_type: "file",
    api_key: "pb_profile_image",
  });

  await client.fields.create(profileBanner.id, {
    label: "Resume (PDF)",
    field_type: "file",
    api_key: "pb_resume_link",
  });

  await client.fields.create(profileBanner.id, {
    label: "LinkedIn URL",
    field_type: "string",
    api_key: "pb_linkedin_link",
  });

  await client.fields.create(profileBanner.id, {
    label: "GitHub URL",
    field_type: "string",
    api_key: "pb_github_link",
  });

  await client.fields.create(profileBanner.id, {
    label: "SEO Settings",
    field_type: "seo",
    api_key: "pb_seo_settings",
  });

  // ============================
  // 2. Projects
  // ============================
  const project = await client.itemTypes.create({
    name: "Project",
    api_key: "project",
    sortable: true,
  });

  await client.fields.create(project.id, {
    label: "Project Title",
    field_type: "string",
    api_key: "project_title",
    validators: { required: {} },
  });

  await client.fields.create(project.id, {
    label: "Project Description",
    field_type: "text",
    api_key: "project_description",
  });

  await client.fields.create(project.id, {
    label: "Primary Link",
    field_type: "string",
    api_key: "project_primary_link",
  });

  await client.fields.create(project.id, {
    label: "Notebook Link",
    field_type: "string",
    api_key: "project_notebook_link",
  });

  await client.fields.create(project.id, {
    label: "Tableau Link",
    field_type: "string",
    api_key: "project_tableau_link",
  });

  await client.fields.create(project.id, {
    label: "Demo Link",
    field_type: "string",
    api_key: "project_demo_link",
  });

  await client.fields.create(project.id, {
    label: "Thumbnail",
    field_type: "file",
    api_key: "project_thumbnail",
  });

  await client.fields.create(project.id, {
    label: "Gallery Images",
    field_type: "gallery",
    api_key: "project_gallery",
  });

  await client.fields.create(project.id, {
    label: "Project Tags",
    field_type: "string",
    api_key: "project_tags",
  });

  await client.fields.create(project.id, {
    label: "SEO Settings",
    field_type: "seo",
    api_key: "project_seo_settings",
  });

  // ============================
  // 3. Skills
  // ============================
  const skill = await client.itemTypes.create({
    name: "Skill",
    api_key: "skill",
  });

  await client.fields.create(skill.id, {
    label: "Skill Name",
    field_type: "string",
    api_key: "skill_name",
  });

  await client.fields.create(skill.id, {
    label: "Skill Icon",
    field_type: "file",
    api_key: "skill_icon",
  });

  await client.fields.create(skill.id, {
    label: "Proficiency (0–100)",
    field_type: "integer",
    api_key: "skill_level",
  });

  // ============================
  // 4. Timeline
  // ============================
  const timeline = await client.itemTypes.create({
    name: "Timeline Item",
    api_key: "timeline_item",
  });

  await client.fields.create(timeline.id, {
    label: "Year or Range",
    field_type: "string",
    api_key: "timeline_year",
  });

  await client.fields.create(timeline.id, {
    label: "Timeline Title",
    field_type: "string",
    api_key: "timeline_title",
  });

  await client.fields.create(timeline.id, {
    label: "Timeline Details",
    field_type: "text",
    api_key: "timeline_details",
  });

  await client.fields.create(timeline.id, {
    label: "Timeline Category",
    field_type: "string",
    api_key: "timeline_category",
  });

  // ============================
  // 5. Certifications
  // ============================
  const certification = await client.itemTypes.create({
    name: "Certification",
    api_key: "certification",
  });

  await client.fields.create(certification.id, {
    label: "Certificate Name",
    field_type: "string",
    api_key: "cert_name",
  });

  await client.fields.create(certification.id, {
    label: "Issuing Organization",
    field_type: "string",
    api_key: "cert_org_name",
  });

  await client.fields.create(certification.id, {
    label: "Issue Date",
    field_type: "date",
    api_key: "cert_issue_date",
  });

  await client.fields.create(certification.id, {
    label: "Credential Link",
    field_type: "string",
    api_key: "cert_credential_link",
  });

  await client.fields.create(certification.id, {
    label: "Certificate Image",
    field_type: "file",
    api_key: "cert_image_file",
  });

  // ============================
  // 6. Work Permit
  // ============================
  const workPermit = await client.itemTypes.create({
    name: "Work Permit",
    api_key: "work_permit",
    singleton: true,
  });

  await client.fields.create(workPermit.id, {
    label: "Country Name",
    field_type: "string",
    api_key: "wp_country_name",
  });

  await client.fields.create(workPermit.id, {
    label: "Permit Status",
    field_type: "string",
    api_key: "wp_status_type",
  });

  // ============================
  // 7. Contact Info
  // ============================
  const contactInfo = await client.itemTypes.create({
    name: "Contact Info",
    api_key: "contact_info",
    singleton: true,
  });

  await client.fields.create(contactInfo.id, {
    label: "Email Address",
    field_type: "string",
    api_key: "ci_email_address",
  });

  await client.fields.create(contactInfo.id, {
    label: "LinkedIn Profile",
    field_type: "string",
    api_key: "ci_linkedin_profile",
  });

  await client.fields.create(contactInfo.id, {
    label: "GitHub Profile",
    field_type: "string",
    api_key: "ci_github_profile",
  });

  await client.fields.create(contactInfo.id, {
    label: "Google Sheet Endpoint",
    field_type: "string",
    api_key: "ci_sheet_endpoint",
  });

  // ============================
  // 8. Page
  // ============================
  const page = await client.itemTypes.create({
    name: "Page",
    api_key: "page",
    singleton: true,
  });

  await client.fields.create(page.id, {
    label: "Page Title",
    field_type: "string",
    api_key: "page_title_field",
  });

  await client.fields.create(page.id, {
    label: "Structured Text",
    field_type: "structured_text",
    api_key: "page_structured_text",
  });

  await client.fields.create(page.id, {
    label: "SEO Settings",
    field_type: "seo",
    api_key: "page_seo_settings",
  });

  await client.fields.create(page.id, {
    label: "SEO/Readability Analysis",
    field_type: "json",
    api_key: "page_seo_analysis",
  });

  console.log("✅ Portfolio schema created successfully!");
};
