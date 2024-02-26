import { useContext } from 'react';

import { StepContext } from '../../Step';
import { DEFAULT_STEP_INDEX, DEFAULT_STEP_STATUS } from '../constants';
import type { StepContext as StepContextType, StepElement } from '../types';

import { useStepResponsiveValues } from '.';

const useStepContext = <Element extends StepElement>() => {
	const {
		id,
		index = DEFAULT_STEP_INDEX,
		status: statusProp = DEFAULT_STEP_STATUS
	} = useContext<StepContextType<Element>>(StepContext);

	const { status } = useStepResponsiveValues<Element>({ status: statusProp });

	return { id, index, status };
};

export default useStepContext;
