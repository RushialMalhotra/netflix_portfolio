import { request, gql } from 'graphql-request';

const DATOCMS_ENDPOINT = 'https://graphql.datocms.com/';
const API_TOKEN = process.env.REACT_APP_DATOCMS_READONLY_TOKEN;

interface Recommendation {
  name: string;
  designation: string;
  relationship: string;
  recommendationText?: string;
  linkedinUrl?: string;
  profileImage?: { url: string };
}

export async function fetchRecommendations(): Promise<Recommendation[]> {
  if (!API_TOKEN) {
    console.error('❌ Missing REACT_APP_DATOCMS_READONLY_TOKEN in environment.');
    return [];
  }

  const query = gql`
    {
      allRecommendations(orderBy: _createdAt_DESC) {
        name
        designation
        relationship
        recommendationText
        linkedinUrl
        profileImage {
          url
        }
      }
    }
  `;

  try {
    console.log('🔄 Fetching recommendations from DatoCMS...');
    const data = await request<{ allRecommendations: Recommendation[] }>(
      DATOCMS_ENDPOINT,
      query,
      {},
      { Authorization: `Bearer ${API_TOKEN}` }
    );
    console.log('✅ Recommendations fetched successfully:', data);
    return data.allRecommendations;
  } catch (error) {
    console.error('❌ Failed to fetch recommendations:', error);
    return [];
  }
}
