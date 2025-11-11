import React, { useEffect, useState } from 'react';
import './Recommendations.css';
import { fetchRecommendations } from '../queries/getRecommendations';

interface Recommendation {
  name: string;
  designation: string;
  relationship: string;
  recommendationText?: string;
  linkedinUrl?: string;
  profileImage?: { url: string };
}

const Recommendations: React.FC = () => {
  const [recs, setRecs] = useState<Recommendation[]>([]);

  useEffect(() => {
    fetchRecommendations().then(setRecs);
  }, []);

  if (!recs.length)
    return (
      <div className="timeline-container">
        <div className="recommendation-card">
          <p>Loading recommendations...</p>
        </div>
      </div>
    );

  return (
    <div className="timeline-container">
      {recs.map((rec, index) => (
        <div key={index} className="recommendation-card">
          <div className="recommendation-header">
            {rec.profileImage?.url && (
              <img
                src={rec.profileImage.url}
                alt={rec.name}
                className="profile-pic"
              />
            )}
            <div>
              <h3>{rec.name}</h3>
              <p>{rec.designation}</p>
              {rec.relationship && <p>{rec.relationship}</p>}
              {rec.linkedinUrl && (
                <p>
                  <a
                    href={rec.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#e50914', textDecoration: 'none' }}
                  >
                    View LinkedIn Profile
                  </a>
                </p>
              )}
            </div>
          </div>

          <div className="recommendation-body">
            {rec.recommendationText
              ? rec.recommendationText
                  .split('\n')
                  .filter(line => line.trim() !== '')
                  .map((para, i) => <p key={i}>{para.trim()}</p>)
              : <p>No recommendation text available.</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recommendations;
