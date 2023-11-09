import type { FC } from 'react';
import { Suspense as ReactSuspense } from 'react';

import { ErrorBoundary } from '../ErrorBoundary';

import type { SuspenseProps } from './common/types';

const Suspense: FC<SuspenseProps> = ({ children, renderError, fallback, ...rest }) => (
	<ErrorBoundary renderError={renderError}>
		<ReactSuspense {...rest} fallback={fallback}>
			{children}
		</ReactSuspense>
	</ErrorBoundary>
);

Suspense.displayName = 'Suspense';

export default Suspense;
