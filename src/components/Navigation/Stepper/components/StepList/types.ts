import { ContextType } from 'react';

import { VisibilityContext } from 'react-horizontal-scrolling-menu';

import { Step } from './components/Step/types';

export type ScrollContext = ContextType<typeof VisibilityContext>;

export type StepListProps = {
	children: Omit<Step, 'index'>[];
	isDisabled?: boolean;
};
