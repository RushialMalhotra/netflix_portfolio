import React, { useEffect, useState } from 'react';
import { fetchWorkPermitData } from '../queries/getWorkPermit';
import './WorkPermit.css';

const WorkPermit: React.FC = () => {
  const [permit, setPermit] = useState<any>(null);

  useEffect(() => {
    fetchWorkPermitData().then(setPermit);
  }, []);

  if (!permit)
    return (
      <div className="workpermit-page">
        <div className="loading-text">Loading Work Permit details...</div>
      </div>
    );

  const formattedDate = permit.validTill
    ? new Date(permit.validTill).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      })
    : 'N/A';

  return (
    <div className="workpermit-page">
      <div className="workpermit-card">
        <div className="workpermit-header">
          <h1>🎓 Work Permit</h1>
          <p className="subtitle">
            Proof of my legal right to work and build my career in the UK.
          </p>
        </div>

        <div className="workpermit-intro">
          <p>
            I’m currently on a <strong>{permit.statusType}</strong>, issued by the{' '}
            <strong>{permit.issuingAuthority}</strong>. This visa allows me to
            work full-time anywhere in the <strong>Republic of Ireland</strong> without
            requiring sponsorship — giving me the freedom to contribute
            immediately and grow within a forward-thinking organization.
          </p>
        </div>

        <div className="workpermit-details">
          <div className="detail-row">
            <span className="label">Visa Type:</span>
            <span>{permit.visaDescription}</span>
          </div>
          <div className="detail-row">
            <span className="label">Valid Until:</span>
            <span>{formattedDate}</span>
          </div>
          <div className="detail-row">
            <span className="label">Work Authorization Scope:</span>
            <span>{permit.authorizationScope}</span>
          </div>
        </div>

        <div className="workpermit-contact">
          <p>
            📞 For professional queries, reach me at{' '}
            <a href={`tel:${permit.contactNumber}`}>{permit.contactNumber}</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkPermit;
