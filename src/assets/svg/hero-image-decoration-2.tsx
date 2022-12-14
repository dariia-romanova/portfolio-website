export const HeroImageDecoration2 = ({ inverted, width = 105, height = 118 } : { inverted?: boolean, width?: number, height?: number }) => (
  <svg width={width} height={height} viewBox="0 0 105 118" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M52.2022 2C23.0022 2 36.7022 43.6667 47.2022 64.5C33.3689 53.8333 5.00224 37.8 2.20224 59C-0.597756 80.2 26.3689 77.1667 40.2022 73C26.5355 81.1667 3.5022 100.6 20.7022 113C37.9022 125.4 48.8689 94.5 52.2022 77.5C53.3689 93.5 61.4022 123 84.2022 113C107.002 103 78.7022 82.1667 61.7022 73C78.5355 72.5 110.202 66.1 102.202 44.5C94.2022 22.9 67.8689 47.8333 55.7022 63C66.7022 42.6667 81.4022 2 52.2022 2Z" stroke={inverted ? '#F0E9E1' : '#61BC8F'}  strokeWidth="3" vectorEffect="non-scaling-stroke"/>
  </svg>
);