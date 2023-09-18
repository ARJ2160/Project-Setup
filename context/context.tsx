/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";
import {
  useTheme as useMuiTheme,
  ThemeProvider as MuiProvider,
  createTheme,
} from "@mui/material/styles";
import { createContext, useState } from "react";

const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState("light");
  const defaultTheme = createTheme();

  const toggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "black" : "light"));
  };

  const styles = css``;

  return (
    <MuiProvider theme={defaultTheme}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Global styles={styles} />
        {children}
      </ThemeContext.Provider>
    </MuiProvider>
  );
};

export const useTheme = () => {
  return useMuiTheme();
};
