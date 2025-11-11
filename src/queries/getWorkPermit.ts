import { request, gql } from 'graphql-request';

const DATOCMS_ENDPOINT = 'https://graphql.datocms.com/';
const API_TOKEN = process.env.REACT_APP_DATOCMS_READONLY_TOKEN;
const DATOCMS_ENV = process.env.REACT_APP_DATOCMS_ENVIRONMENT || 'master';

interface WorkPermit {
  statusType: string;
  visaDescription: string;
  validTill: string;
  authorizationScope: string;
  issuingAuthority: string;
  contactNumber: string;
}

export async function fetchWorkPermitData(): Promise<WorkPermit | null> {
  if (!API_TOKEN) {
    console.error('❌ Missing REACT_APP_DATOCMS_READONLY_TOKEN in environment.');
    return null;
  }

  const query = gql`
    query GetWorkPermit {
      workPermit {
        statusType
        visaDescription
        validTill
        authorizationScope
        issuingAuthority
        contactNumber
      }
    }
  `;

  try {
    console.log('🔄 Fetching Work Permit data from DatoCMS...');
    const data = await request<{ workPermit: WorkPermit }>(
      DATOCMS_ENDPOINT,
      query,
      {},
      { Authorization: `Bearer ${API_TOKEN}` }
    );
    console.log('✅ Work Permit data fetched:', data);
    return data.workPermit;
  } catch (error) {
    console.error('❌ Failed to fetch Work Permit data:', error);
    return null;
  }
}
