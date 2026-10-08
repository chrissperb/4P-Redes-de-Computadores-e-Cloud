import React from 'react';
import { useI18n } from '../../i18n/context';

const CloudHybridL = {
  aria: { pt: 'Arquitetura Híbrida', en: 'Hybrid Architecture' },
  public: { pt: 'Cloud Pública', en: 'Public Cloud' },
  sapAgencies: { pt: 'SAP ERP + Agências', en: 'SAP ERP + Branches' },
  awsOpen: { pt: 'AWS (abertura)', en: 'AWS (account opening)' },
};

export const CloudHybridIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  const { lang } = useI18n();
  return (
    <svg viewBox="0 0 240 120" role="img" aria-label={CloudHybridL.aria[lang]} {...props}>
      <path d="M30 70h80a20 20 0 0 0 0-40 30 30 0 0 0-56-10 20 20 0 0 0-24 18 20 20 0 0 0 0 32z" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" />
      <path d="M130 70h80a20 20 0 0 0 0-40 30 30 0 0 0-56-10 20 20 0 0 0-24 18 20 20 0 0 0 0 32z" fill="#d1fae5" stroke="#10b981" strokeWidth="2" />
      <path d="M108 62h24v-6l10 8-10 8v-6h-24z" fill="#374151" />
      <text x="46" y="52" fontSize="11" fontWeight="600" fill="#1e40af">On-Premise</text>
      <text x="150" y="52" fontSize="11" fontWeight="600" fill="#065f46">{CloudHybridL.public[lang]}</text>
      <text x="86" y="98" fontSize="10" fill="#6b7280">{CloudHybridL.sapAgencies[lang]}</text>
      <text x="168" y="98" fontSize="10" fill="#6b7280">{CloudHybridL.awsOpen[lang]}</text>
    </svg>
  );
};

const ShieldL = {
  aria: { pt: 'Segurança', en: 'Security' },
};

export const ShieldIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  const { lang } = useI18n();
  return (
    <svg viewBox="0 0 160 160" role="img" aria-label={ShieldL.aria[lang]} {...props}>
      <path d="M80 16l46 16v56c0 32-46 56-46 56S34 120 34 88V32z" fill="#e0f2fe" stroke="#0284c7" strokeWidth="3" />
      <path d="M60 84l14 14 28-30" stroke="#0f766e" strokeWidth="7" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

const FlowL = {
  aria: { pt: 'Fluxo', en: 'Flow' },
  requests: { pt: 'Solicita', en: 'Requests' },
  orchestrates: { pt: 'Orquestra', en: 'Orchestrates' },
  persists: { pt: 'Persiste', en: 'Persists' },
};

export const FlowDiagramIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  const { lang } = useI18n();
  return (
    <svg viewBox="0 0 240 140" role="img" aria-label={FlowL.aria[lang]} {...props}>
      <rect x="16" y="46" width="56" height="48" rx="8" fill="#ede9fe" stroke="#8b5cf6" strokeWidth="2" />
      <rect x="92" y="46" width="56" height="48" rx="8" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
      <rect x="168" y="46" width="56" height="48" rx="8" fill="#dcfce7" stroke="#22c55e" strokeWidth="2" />
      <path d="M72 70h20M148 70h20" stroke="#374151" strokeWidth="3" markerEnd="url(#flowArrow)" />
      <defs>
        <marker id="flowArrow" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
          <path d="M0 0 L10 5 L0 10 Z" fill="#374151" />
        </marker>
      </defs>
      <text x="44" y="74" fontSize="10" textAnchor="middle" fill="#4c1d95">{FlowL.requests[lang]}</text>
      <text x="120" y="74" fontSize="10" textAnchor="middle" fill="#1e40af">{FlowL.orchestrates[lang]}</text>
      <text x="196" y="74" fontSize="10" textAnchor="middle" fill="#14532d">{FlowL.persists[lang]}</text>
    </svg>
  );
};

const StackL = {
  aria: { pt: 'Modelos de serviço', en: 'Service models' },
};

export const StackIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  const { lang } = useI18n();
  return (
    <svg viewBox="0 0 200 140" role="img" aria-label={StackL.aria[lang]} {...props}>
      <rect x="24" y="24" width="152" height="32" rx="6" fill="#fde68a" stroke="#f59e0b" strokeWidth="2" />
      <text x="100" y="45" fontSize="13" textAnchor="middle" fontWeight="600" fill="#92400e">SaaS</text>
      <rect x="24" y="64" width="152" height="32" rx="6" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" />
      <text x="100" y="85" fontSize="13" textAnchor="middle" fontWeight="600" fill="#1e40af">PaaS</text>
      <rect x="24" y="104" width="152" height="32" rx="6" fill="#e5e7eb" stroke="#6b7280" strokeWidth="2" />
      <text x="100" y="125" fontSize="13" textAnchor="middle" fontWeight="600" fill="#374151">IaaS</text>
    </svg>
  );
};