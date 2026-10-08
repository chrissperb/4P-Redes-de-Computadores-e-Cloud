import React from 'react';

type IconProps = {
  size?: number;
  className?: string;
};

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
  focusable: false,
};

export const ArrowLeftIcon: React.FC<IconProps> = ({ size = 16 }) => (
  <svg {...base} width={size} height={size}>
    <path d="M19 12H5M11 18l-6-6 6-6" />
  </svg>
);

export const ArrowRightIcon: React.FC<IconProps> = ({ size = 16 }) => (
  <svg {...base} width={size} height={size}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const GridIcon: React.FC<IconProps> = ({ size = 16 }) => (
  <svg {...base} width={size} height={size}>
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>
);

export const ExpandIcon: React.FC<IconProps> = ({ size = 16 }) => (
  <svg {...base} width={size} height={size}>
    <path d="M8 3H5a2 2 0 0 0-2 2v3M16 3h3a2 2 0 0 1 2 2v3M8 21H5a2 2 0 0 1-2-2v-3M16 21h3a2 2 0 0 0 2-2v-3" />
  </svg>
);

export const SunIcon: React.FC<IconProps> = ({ size = 16 }) => (
  <svg {...base} width={size} height={size}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </svg>
);

export const MoonIcon: React.FC<IconProps> = ({ size = 16 }) => (
  <svg {...base} width={size} height={size}>
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

export const XIcon: React.FC<IconProps> = ({ size = 16 }) => (
  <svg {...base} width={size} height={size}>
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);