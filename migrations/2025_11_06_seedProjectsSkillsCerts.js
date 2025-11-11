/**
 * Migration: Seed Portfolio Content (Profile, Projects, Skills, Certifications)
 */

module.exports = async (client) => {
    console.log("🚀 Seeding content for Rushial Portfolio...");
  
 // ========= 1. PROFILE BANNER =========
const profileBanner = await client.items.create({
  item_type: "profilebanner",
  headline: "Rushial Malhotra — Business Analyst",
  tagline: "Driven by curiosity, grounded in impact",
  profile_summary:
    "They say curiosity killed the cat—but in my case, it just made me the person who asks one question too many. Maybe a little annoying, but it’s also how I’ve learned to understand the people behind the data—and it’s served me well so far. I recently completed my Master’s in Business Analytics at University College Dublin, where I explored how data can drive change when we keep humanity at the center of every insight. Before that, I worked on large-scale IT projects for the Government of India, building systems that turned policy into tools people could actually use. Later, at Bank of America, I worked on risk-weighted asset modeling and capital management—where every query could influence regulatory outcomes and capital efficiency. Now, I’m focused on bridging technology, analytics, and business strategy—applying a systems mindset shaped by public service, refined by global banking, and grounded in curiosity that never really switches off.",
  linkedin_link: "https://linkedin.com/in/rushialmalhotra",
  github_link: "https://github.com/rushialmalhotra",
});

    // Upload profile image and resume (replace file paths with your local ones)
    const profileImage = await client.uploads.createFromLocalFile({
      localPath:
        "/Users/rushialmalhotra/Netflix_style_portfolio/netflix_portfolio/PHOTO-2025-04-04-20-41-42-removebg-preview.png",
      author: "Rushial Malhotra",
    });
  
    const resumeFile = await client.uploads.createFromLocalFile({
      localPath:
        "/Users/rushialmalhotra/Netflix_style_portfolio/netflix_portfolio/Rushial_Business_Analyst (10).pdf",
      author: "Rushial Malhotra",
    });
  
    await client.items.update(profileBanner.id, {
      profile_image: { upload_id: profileImage.id },
      resume_link: { upload_id: resumeFile.id },
    });
  
    console.log("✅ Profile Banner created");
  
    // ========= 2. PROJECTS =========
    const projects = [
      {
        title: "RegFlowAI Capital Engine",
        description:
          "A RegTech + Generative AI platform that interprets Basel Endgame regulations, converts them into structured, auditable business requirements, and auto-generates technical implementation artifacts.",
        project_link: "https://github.com/rushialmalhotra/RegFlowAI",
        tags: "Basel III, SA-CCR, FRTB, GenAI, Compliance",
      },
      {
        title: "UCD DSS: Flight Delay Prediction",
        description:
          "Developed a Decision Support System analyzing flight delays using Python, pandas, and Power BI. Integrated data cleaning, delay flagging, and visualization.",
        project_link: "https://github.com/rushialmalhotra/flight-delay-dss",
        tags: "Python, Power BI, Data Cleaning, ML",
      },
    ];
  
    for (const project of projects) {
      await client.items.create({
        item_type: "project",
        ...project,
      });
      console.log(`✅ Project added: ${project.title}`);
    }
  
    // ========= 3. SKILLS =========
    const skills = [
      { skill_title: "Python", skill_level: 95 },
      { skill_title: "SQL", skill_level: 90 },
      { skill_title: "Power BI", skill_level: 90 },
      { skill_title: "Tableau", skill_level: 85 },
      { skill_title: "Process Mining (Celonis)", skill_level: 80 },
      { skill_title: "Machine Learning", skill_level: 80 },
      { skill_title: "Business Analysis", skill_level: 95 },
    ];
  
    for (const skill of skills) {
      await client.items.create({
        item_type: "skill",
        ...skill,
      });
      console.log(`✅ Skill added: ${skill.skill_title}`);
    }
  
    // ========= 4. CERTIFICATIONS =========
    const certifications = [
      {
        name: "Google Data Analytics Professional Certificate",
        organization: "Coursera",
        issue_date: "2024-05-01",
        credential_link:
          "https://www.coursera.org/account/accomplishments/professional-cert/1234",
      },
      {
        name: "Process Mining with Celonis EMS",
        organization: "Celonis Academy",
        issue_date: "2024-07-10",
      },
    ];
  
    for (const cert of certifications) {
      await client.items.create({
        item_type: "certification",
        ...cert,
      });
      console.log(`✅ Certification added: ${cert.name}`);
    }
  
    console.log("🎉 Portfolio content seeding completed successfully!");
  };
  