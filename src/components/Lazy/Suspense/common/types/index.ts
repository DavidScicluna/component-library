import type { ReactNode, SuspenseProps as ReactSuspenseProps } from 'react';

export type SuspenseProps = ReactSuspenseProps & { renderError: ReactNode };
