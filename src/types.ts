// types.ts

export interface ProfileBanner {
  backgroundImage: { url: string };
  headline: string;
  resumeLink: { url: string };
  linkedinLink: string;
  profileSummary: string;

  tagline: string;
  githubLink: string;
  profileImage: {
    responsiveImage: {
      src: string;
      width: number;
      height: number;
      alt: string;
    };
  };
  seoSettings?: {
    title?: string;
    description?: string;
    image?: {
      url: string;
    };
  };
}

export interface WorkPermit {
  visaStatus: string;
  expiryDate: string;
  summary: string;
  additionalInfo: string;
}

export interface TimelineItem {
  timelineType: "work" | "education";
  name: string;
  title: string;
  techStack: string;
  summaryPoints: string[];  // ✅ correct type (array of lines)
  dateRange: string;
  displayOrder?: number;
}


export interface Project {
  title: string;
  description: string;
  techUsed: string[];
  image: { url: string };
  projectLink?: string;
  githubLink?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  issuedDate: string;
  link: string;
  iconName: string;
}

export interface ContactMe {
  profilePicture: { url: string };
  name: string;
  title: string;
  summary: string;
  companyUniversity: string;
  linkedinLink: string;
  email: string;
  phoneNumber: string;
}

export interface Skill {
  skillName: string;
  skillCategory: string;
  skillIconKey: string;
  skillLevel: number;
  skillIcon?: {
    url: string;
  } | null;
}
