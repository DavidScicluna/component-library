import type { ErrorInfo } from 'react';
import { Component } from 'react';

import type { ErrorBoundaryProps, ErrorBoundaryState } from './common/types';

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
	public state: ErrorBoundaryState = {
		hasError: false
	};

	public static getDerivedStateFromError(): ErrorBoundaryState {
		return { hasError: true };
	}

	public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		// eslint-disable-next-line no-console
		console.error('Uncaught error:', error, errorInfo);
	}

	public render() {
		if (this.state.hasError) {
			return this.props.renderError;
		}

		return this.props.children;
	}
}

ErrorBoundary.displayName = 'ErrorBoundary';

export default ErrorBoundary;
