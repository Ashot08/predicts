import { lazy } from 'react';

// export const PageOne = lazy(() => import('./PageOne'));

// @ts-ignore
export const PageOne = lazy(() => new Promise(resolve => setTimeout(() => resolve(import('./PageOne')), 2000)));
