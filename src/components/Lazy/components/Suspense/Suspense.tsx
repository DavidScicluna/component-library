import { Suspense as ReactSuspense } from 'react';

import { ErrorBoundary } from '../ErrorBoundary';

import type { SuspenseProps } from './common/types';

const Suspense = ({ children, renderError, fallback, ...rest }: SuspenseProps): JSX.Element => (
	<ErrorBoundary renderError={renderError}>
		<ReactSuspense {...rest} fallback={fallback}>
			{children}
		</ReactSuspense>
	</ErrorBoundary>
);

Suspense.displayName = 'Suspense';

export default Suspense;
