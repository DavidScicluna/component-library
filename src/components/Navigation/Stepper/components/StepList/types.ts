import { ContextType } from 'react';

import { VisibilityContext } from 'react-horizontal-scrolling-menu';

import { Step as StepType } from './components/Step/types';

export type ScrollContext = ContextType<typeof VisibilityContext>;

export type Step = Omit<StepType, 'index'>;

export type StepListProps = {
	children: Step[];
	isDisabled?: boolean;
};
