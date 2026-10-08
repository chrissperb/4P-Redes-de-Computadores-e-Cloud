interface FlagProps {
  width?: number;
  height?: number;
}

const base = {
  viewBox: '0 0 24 18',
  xmlns: 'http://www.w3.org/2000/svg',
  'aria-hidden': 'true',
  focusable: 'false',
} as const;

/** Bandeira do Brasil — SVG inline (emoji vira "BR"/"US" no Windows 10). */
export const BrasilFlag: React.FC<FlagProps> = ({ width = 20, height = 15 }) => (
  <svg {...base} width={width} height={height}>
    <rect width="24" height="18" rx="2" fill="#009B3A" />
    <path d="M12 1.5L22.5 9L12 16.5L1.5 9Z" fill="#FFDF00" />
    <circle cx="12" cy="9" r="4.5" fill="#002776" />
    <path d="M8.6 9.4c.7-1.3 2-2.1 3.4-2.1s2.7.8 3.4 2.1l2.3-1.5c-1.1-2-3.2-3.2-5.7-3.2s-4.6 1.2-5.7 3.2l2.3 1.5z" fill="#fff" />
  </svg>
);

/** Bandeira dos EUA — SVG inline. */
export const UsFlag: React.FC<FlagProps> = ({ width = 20, height = 15 }) => {
  const rowH = 18 / 13;
  return (
    <svg {...base} width={width} height={height}>
      <rect width="24" height="18" rx="2" fill="#fff" />
      {Array.from({ length: 13 }, (_, i) =>
        i % 2 === 0 ? <rect key={i} y={i * rowH} width="24" height={rowH + 0.01} fill="#B22234" /> : null,
      )}
      <rect width="10.5" height="9.6" fill="#3C3B6E" />
      {Array.from({ length: 50 }, (_, i) => {
        const col = i % 6;
        const row = Math.floor(i / 6);
        return (
          <circle
            key={i}
            cx={1 + col * 1.7}
            cy={1 + row * 1.7}
            r={0.55}
            fill="#fff"
          />
        );
      })}
    </svg>
  );
};