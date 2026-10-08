import React from 'react';
import awsLogo from '../assets/logos/aws.svg';
import sapLogo from '../assets/logos/sap.svg';
import sfdcLogo from '../assets/logos/sfdc.svg';

interface BrandLogoProps {
  name: 'aws' | 'sap' | 'salesforce';
  height?: number | string;
  className?: string;
}

const sources = {
  aws: { src: awsLogo, alt: 'Amazon Web Services' },
  sap: { src: sapLogo, alt: 'SAP' },
  salesforce: { src: sfdcLogo, alt: 'Salesforce' },
};

export const BrandLogo: React.FC<BrandLogoProps> = ({ name, height = 40, className }) => {
  const source = sources[name];
  return (
    <span
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#ffffff',
        borderRadius: '10px',
        padding: '8px 16px',
        boxShadow: '0 10px 24px -12px rgba(255, 255, 255, 0.25)',
        lineHeight: 0,
      }}
    >
      <img
        src={source.src}
        alt={source.alt}
        title={source.alt}
        style={{ height: typeof height === 'number' ? `${height}px` : height, width: 'auto', objectFit: 'contain', display: 'block' }}
        loading="lazy"
        decoding="async"
      />
    </span>
  );
};

export const BrandRow: React.FC<{ height?: number; names?: Array<BrandLogoProps['name']> }> = ({
  height = 38,
  names = ['aws', 'sap', 'salesforce'],
}) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'clamp(18px, 3vw, 48px)',
      flexWrap: 'wrap',
    }}
  >
    {names.map((name) => (
      <BrandLogo key={name} name={name} height={height} />
    ))}
  </div>
);
