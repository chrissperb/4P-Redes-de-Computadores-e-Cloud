import React from 'react';
import { architectureZones } from '../../data/architectureZones';

export const ArchitectureSVG: React.FC = () => {
  return (
    <svg
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-labelledby="arch-title arch-desc"
      style={{ width: '100%', height: 'auto' }}
    >
      <title id="arch-title">Diagrama de Arquitetura Híbrida SDMD S/A (AWS + On-Prem)</title>
      <desc id="arch-desc">
        Arquitetura híbrida: SAP ERP on-premise conectado via AWS Direct Connect (link dedicado privado) ao ambiente AWS
        (API Gateway, Step Functions, Lambda/ECS, Aurora, S3, EventBridge, KMS, Route 53, CloudFront, WAF, Cognito + MFA)
        integrando com Salesforce CRM (SaaS).
      </desc>

      {/* On-Prem Zone */}
      <g className="zone" data-zone="1" role="group" aria-label={architectureZones[0].title}>
        <rect x="50" y="150" width="380" height="550" rx="8" ry="8" fill="#f3f4f6" stroke="#6b7280" strokeWidth="2" />
        <text x="240" y="185" textAnchor="middle" fontSize="20" fontWeight="600">
          {architectureZones[0].label} {architectureZones[0].title}
        </text>
        <rect x="80" y="210" width="320" height="120" rx="6" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="1.5" />
        <text x="240" y="250" textAnchor="middle" fontSize="16" fontWeight="500">
          SAP ERP (On-Premise)
        </text>
        <text x="240" y="280" textAnchor="middle" fontSize="13">
          Deve permanecer on-premise
        </text>
        <rect x="80" y="360" width="320" height="120" rx="6" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="1.5" />
        <text x="240" y="400" textAnchor="middle" fontSize="16" fontWeight="500">
          Agências Físicas
        </text>
        <text x="240" y="430" textAnchor="middle" fontSize="13">
          Ponto de atendimento
        </text>
        <title>{architectureZones[0].description}</title>
      </g>

      {/* Direct Connect Link */}
      <g className="zone" data-zone="2" role="group" aria-label={architectureZones[1].title}>
        <path
          d="M 430 425 L 530 425 L 530 375 L 650 375"
          fill="none"
          stroke="#f59e0b"
          strokeWidth="4"
          strokeDasharray="10,6"
          markerEnd="url(#arrowOrange)"
          vectorEffect="non-scaling-stroke"
        />
        <text x="540" y="355" textAnchor="middle" fontSize="14" fontWeight="600" fill="#92400e">
          AWS Direct Connect
        </text>
        <text x="540" y="405" textAnchor="middle" fontSize="12" fill="#92400e">
          (link dedicado privado)
        </text>
        <title>{architectureZones[1].description}</title>
      </g>

      {/* AWS Cloud Boundary */}
      <g role="group" aria-label="Ambiente AWS (Região sa-east-1)">
        <rect x="650" y="80" width="900" height="760" rx="10" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2" />
        <text x="1100" y="115" textAnchor="middle" fontSize="22" fontWeight="600" fill="#1e40af">
          AWS Cloud – Região sa-east-1
        </text>
      </g>

      {/* Integration Zone */}
      <g className="zone" data-zone="2" role="group" aria-label={architectureZones[1].title}>
        <rect x="680" y="330" width="240" height="120" rx="8" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
        <text x="800" y="365" textAnchor="middle" fontSize="16" fontWeight="600">
          {architectureZones[1].label} {architectureZones[1].title}
        </text>
        <text x="800" y="395" textAnchor="middle" fontSize="13">
          PrivateLink / Interface VPC Endpoint
        </text>
        <title>{architectureZones[1].description}</title>
      </g>

      {/* Core Onboarding Zone */}
      <g className="zone" data-zone="3" role="group" aria-label={architectureZones[2].title}>
        <rect x="950" y="150" width="280" height="220" rx="8" fill="#f3e8ff" stroke="#8b5cf6" strokeWidth="2" />
        <text x="1090" y="185" textAnchor="middle" fontSize="16" fontWeight="600">
          {architectureZones[2].label} {architectureZones[2].title}
        </text>
        <rect x="970" y="200" width="240" height="50" rx="6" fill="#e9d5ff" stroke="#a78bfa" strokeWidth="1.2" />
        <text x="1090" y="230" textAnchor="middle" fontSize="13">
          API Gateway
        </text>
        <rect x="970" y="265" width="240" height="50" rx="6" fill="#e9d5ff" stroke="#a78bfa" strokeWidth="1.2" />
        <text x="1090" y="295" textAnchor="middle" fontSize="13">
          Step Functions / Lambda / ECS
        </text>
        <title>{architectureZones[2].description}</title>
      </g>

      {/* Data Zone */}
      <g className="zone" data-zone="4" role="group" aria-label={architectureZones[3].title}>
        <rect x="950" y="400" width="280" height="280" rx="8" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
        <text x="1090" y="435" textAnchor="middle" fontSize="16" fontWeight="600">
          {architectureZones[3].label} {architectureZones[3].title}
        </text>
        <rect x="970" y="455" width="240" height="45" rx="6" fill="#d1fae5" stroke="#34d399" strokeWidth="1.2" />
        <text x="1090" y="482" textAnchor="middle" fontSize="13">
          Amazon Aurora
        </text>
        <rect x="970" y="510" width="240" height="45" rx="6" fill="#d1fae5" stroke="#34d399" strokeWidth="1.2" />
        <text x="1090" y="537" textAnchor="middle" fontSize="13">
          Amazon S3
        </text>
        <rect x="970" y="565" width="240" height="45" rx="6" fill="#d1fae5" stroke="#34d399" strokeWidth="1.2" />
        <text x="1090" y="592" textAnchor="middle" fontSize="13">
          SQS / EventBridge
        </text>
        <rect x="970" y="620" width="240" height="45" rx="6" fill="#d1fae5" stroke="#34d399" strokeWidth="1.2" />
        <text x="1090" y="647" textAnchor="middle" fontSize="13">
          AWS KMS (Criptografia)
        </text>
        <title>{architectureZones[3].description}</title>
      </g>

      {/* Salesforce Zone */}
      <g className="zone" data-zone="5" role="group" aria-label={architectureZones[4].title}>
        <rect x="1250" y="400" width="280" height="160" rx="8" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
        <text x="1390" y="435" textAnchor="middle" fontSize="16" fontWeight="600">
          {architectureZones[4].label} {architectureZones[4].title}
        </text>
        <text x="1390" y="475" textAnchor="middle" fontSize="14">
          Salesforce CRM (SaaS)
        </text>
        <text x="1390" y="505" textAnchor="middle" fontSize="12">
          Integração server-side
        </text>
        <title>{architectureZones[4].description}</title>
      </g>

      {/* Client Channel Zone */}
      <g className="zone" data-zone="6" role="group" aria-label={architectureZones[5].title}>
        <rect x="1250" y="150" width="280" height="220" rx="8" fill="#ccfbf1" stroke="#14b8a6" strokeWidth="2" />
        <text x="1390" y="185" textAnchor="middle" fontSize="16" fontWeight="600">
          {architectureZones[5].label} {architectureZones[5].title}
        </text>
        <rect x="1270" y="200" width="240" height="45" rx="6" fill="#a7f3d0" stroke="#2dd4bf" strokeWidth="1.2" />
        <text x="1390" y="227" textAnchor="middle" fontSize="13">
          Route 53 / CloudFront
        </text>
        <rect x="1270" y="255" width="240" height="45" rx="6" fill="#a7f3d0" stroke="#2dd4bf" strokeWidth="1.2" />
        <text x="1390" y="282" textAnchor="middle" fontSize="13">
          AWS WAF
        </text>
        <rect x="1270" y="310" width="240" height="45" rx="6" fill="#a7f3d0" stroke="#2dd4bf" strokeWidth="1.2" />
        <text x="1390" y="337" textAnchor="middle" fontSize="13">
          Amazon Cognito + MFA
        </text>
        <title>{architectureZones[5].description}</title>
      </g>

      {/* Connectors */}
      <g strokeWidth="2.5" fill="none">
        <path d="M 920 390 L 950 260" stroke="#8b5cf6" markerEnd="url(#arrow)" vectorEffect="non-scaling-stroke" />
        <path d="M 920 390 L 950 540" stroke="#10b981" markerEnd="url(#arrow)" vectorEffect="non-scaling-stroke" />
        <path d="M 1230 540 L 1250 480" stroke="#f59e0b" markerEnd="url(#arrow)" vectorEffect="non-scaling-stroke" />
        <path d="M 1230 260 L 1250 260" stroke="#14b8a6" markerEnd="url(#arrow)" vectorEffect="non-scaling-stroke" />
      </g>

      {/* Markers */}
      <defs>
        <marker id="arrow" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
          <path d="M 0 0 L 12 6 L 0 12 Z" fill="#374151" />
        </marker>
        <marker id="arrowOrange" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
          <path d="M 0 0 L 12 6 L 0 12 Z" fill="#f59e0b" />
        </marker>
      </defs>
    </svg>
  );
};
