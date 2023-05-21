import { ReactNode } from 'react';

export type ErrorBoundaryProps = { children: ReactNode; renderError: ReactNode };
export type ErrorBoundaryState = { hasError: boolean };
