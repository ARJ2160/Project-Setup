// src/components/LazyLoadedComponents.js
import { lazy } from 'react';

const LazyLogin = lazy(() => import('./LoginPage'));

export { LazyLogin };
