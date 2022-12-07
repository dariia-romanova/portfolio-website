import { useContext } from "react";
import { ColorSchemeProvider } from "~/root";

export const useColorScheme = () => {
  const colorScheme = useContext(ColorSchemeProvider);

  if (!colorScheme) {
    throw new Error("useThemeContext must be used within ColorThemeProvider");
  }
  return colorScheme;
}