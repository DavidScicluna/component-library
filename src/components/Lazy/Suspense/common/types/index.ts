import { ReactNode, SuspenseProps as RSProps } from 'react';

export type SuspenseProps = RSProps & { renderError: ReactNode };
