import { FC, Suspense as RS } from 'react';

import ErrorBoundary from '../ErrorBoundary';

import { SuspenseProps } from './common/types';

const Suspense: FC<SuspenseProps> = ({ children, renderError, fallback, ...rest }) => (
	<ErrorBoundary renderError={renderError}>
		<RS {...rest} fallback={fallback}>
			{children}
		</RS>
	</ErrorBoundary>
);

export default Suspense;
