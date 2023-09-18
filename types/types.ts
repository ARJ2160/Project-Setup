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
