/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react';
import {
  useTheme as useMuiTheme,
  ThemeProvider as MuiProvider,
  createTheme
} from '@mui/material/styles';
import { createContext, useState } from 'react';
import {
  Theme,
  ThemeContextProviderProps,
  ThemeContextType
} from '../types/types';

const ThemeContext = createContext<ThemeContextType | null>({
  theme: 'light',
  toggleTheme: () => {}
});

export const ThemeProvider = ({ children }: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState<Theme>('light');
  const defaultTheme = createTheme();

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      window.localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    }
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
