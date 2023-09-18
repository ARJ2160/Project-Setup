import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { store } from "../redux/store.ts";
import { Provider } from "react-redux";
import { ThemeProvider } from "../context/context.tsx";
import ErrorBoundary from './components/ErrorBoundaries.tsx';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
