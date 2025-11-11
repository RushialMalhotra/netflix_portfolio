import { request, gql } from 'graphql-request';

const DATOCMS_ENDPOINT = 'https://graphql.datocms.com/';
const API_TOKEN = process.env.REACT_APP_DATOCMS_READONLY_TOKEN;

interface Certification {
  certificationName: string;
  issuingOrganization: string;
  issueDate: string;
  credentialId: string;
  credentialUrl: string;
  skills?: string;
}

export async function fetchCertifications(): Promise<Certification[]> {
  if (!API_TOKEN) {
    console.error('❌ Missing REACT_APP_DATOCMS_READONLY_TOKEN in environment.');
    return [];
  }

  const query = gql`
    {
      allCertifications(orderBy: issueDate_DESC) {
        certificationName
        issuingOrganization
        issueDate
        credentialId
        credentialUrl
        skills
      }
    }
  `;

  try {
    console.log('🔄 Fetching certifications from DatoCMS...');
    const data = await request<{ allCertifications: Certification[] }>(
      DATOCMS_ENDPOINT,
      query,
      {},
      { Authorization: `Bearer ${API_TOKEN}` }
    );
    console.log('✅ Certifications fetched successfully:', data);
    return data.allCertifications;
  } catch (error) {
    console.error('❌ Failed to fetch certifications:', error);
    return [];
  }
}
