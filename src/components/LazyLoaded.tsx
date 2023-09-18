// src/components/LazyLoadedComponents.js
import { lazy } from 'react';

const LazyLogin = lazy(() => import('./Login'));

export { LazyLogin };
