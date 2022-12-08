export const HeroImageDecoration1 = ({ inverted, width = 120, height = 70 } : { inverted?: boolean, width?: number, height?: number }) => (
  <svg width={width} height={height} viewBox={`0 0 120 70`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 68C9 46 27.9 2 47.5 2C67.1 2 42.6667 46 28 68C37.5 48 62.6 8 87 8C111.4 8 76.8333 48 56.5 68C66 58.6667 90 40 110 40C130 40 107 58.6667 93 68" stroke={inverted ? '#F0E9E1' : '#EE9CD8'} strokeWidth="3" vector-effect="non-scaling-stroke"/>
  </svg>
);