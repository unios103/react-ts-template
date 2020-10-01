type ColorProps = {
  light?: string;
  main: string;
  dark?: string;
};

const TEXT: ColorProps = {
  light: "#757575",
  main: "#2d2d2d",
};

const PRIMARY: ColorProps = {
  light: "#aec4e5",
  main: "#6088c6",
  dark: "#4072b3",
};

const SECONDARY: ColorProps = {
  light: "#eecfcf",
  main: "#eb8686",
  dark: "#b86969",
};

export default {
  TEXT,
  PRIMARY,
  SECONDARY,
} as const;
