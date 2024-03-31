/* theme.ts */
import { extendTheme } from "@chakra-ui/react";

const colors = {
  black: "#000000",
  white: "#FFFFFF",
  brand: {
    blue: "#00A3FF",
  },
  gray: {
    50: "#FAFAFA",
    100: "#F2F2F2",
    200: "#E8E8E8",
    300: "#D6D6D6",
    400: "#B0B0B0",
    500: "#858585",
    600: "#595959",
    700: "#3B3B3B",
    800: "#242424",
    900: "#1C1C1C",
  },
};
const semanticTokens = {
  colors: {
    // bgPrimary: { _light: "white", _dark: "black" },
    bgBase: { _light: "gray.50", _dark: "gray.900" },
    // bgSecondary: { _light: "gray.200", _dark: "gray.800" },
    // bgLine: { _light: "gray.300", _dark: "gray.700" },
    textPrimary: { _light: "black", _dark: "white" },
    textPrimaryWhite: { _light: "white", _dark: "white" },
    // textSecondary: { _light: "gray.500", _dark: "whiteAlpha.600" },
    // textDisabled: { _light: "gray.400", _dark: "whiteAlpha.500" },

    // "chakra-body-text": { _light: "gray.800", _dark: "whiteAlpha.900" },
    "chakra-body-bg": "bgBase",
    // "chakra-border-color": { _light: "gray.200", _dark: "whiteAlpha.300" },
    // "chakra-placeholder-color": { _light: "gray.500", _dark: "whiteAlpha.400" },
  },
};
const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const fonts = {
  heading: "var(--font-oswald)",
  body: "var(--font-oswald)",
};

export const theme = extendTheme({ fonts, colors, semanticTokens, config });
