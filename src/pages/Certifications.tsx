import React, { useEffect, useState } from 'react';
import './Certifications.css';
import { fetchCertifications } from '../queries/getCertifications';

interface Certification {
  certificationName: string;
  issuingOrganization: string;
  issueDate: string;
  credentialId: string;
  credentialUrl: string;
  skills?: string;
}

const Certifications: React.FC = () => {
  const [certs, setCerts] = useState<Certification[]>([]);

  useEffect(() => {
    fetchCertifications().then(setCerts);
  }, []);

  if (!certs.length)
    return (
      <div className="certifications-container">
        <p>Loading certifications...</p>
      </div>
    );

  return (
    <section className="cert-section">
      <h2 className="cert-title">Licenses & Certifications</h2>
      <div className="cert-container">
        {certs.map((cert, idx) => (
          <a
            key={idx}
            className="cert-card"
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="cert-info">
              <h3 className="cert-name">{cert.certificationName}</h3>
              <p className="cert-org">{cert.issuingOrganization}</p>
              <p className="cert-date">
                Issued{' '}
                {new Date(cert.issueDate).toLocaleString('en-GB', {
                  month: 'short',
                  year: 'numeric',
                })}
              </p>
              {cert.credentialId && (
                <p className="cert-id">Credential ID: {cert.credentialId}</p>
              )}
              {cert.skills && (
                <p className="cert-skills">Skills: {cert.skills}</p>
              )}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
