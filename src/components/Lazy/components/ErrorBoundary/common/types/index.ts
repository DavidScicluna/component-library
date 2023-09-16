import type { ReactNode } from 'react';

export type ErrorBoundaryState = { hasError: boolean };

export type ErrorBoundaryProps = { children: ReactNode; renderError: ReactNode };
