export type Theme = 'light' | 'dark';

export type ThemeContextProviderProps = {
  children: React.ReactNode;
};

export type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

export interface initialLoginState {
  isLoggedIn: boolean;
}

export interface userCredentials {
  email: string;
  password: string;
}

export interface LoginPageProps {
  handleLogin: (email: string, password: string) => void;
}
