import { Suspense } from "react";
import "./App.css";
import { LazyLogin } from "./components/LazyLoaded";

const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}></Suspense>
      <LazyLogin />
    </div>
  );
};

export default App;
