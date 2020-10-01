const customMediaQuery = (width: number, isMax = true) =>
  `@media (${isMax ? "max" : "min"}-width: ${width}px)`;

const media = {
  xxl: customMediaQuery(1281, false),
  xl: customMediaQuery(1280),
  lg: customMediaQuery(1024),
  md: customMediaQuery(768),
  sm: customMediaQuery(640),
};

export default media;
