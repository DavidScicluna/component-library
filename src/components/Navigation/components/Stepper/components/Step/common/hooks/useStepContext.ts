import { useContext } from 'react';

import { StepContext } from '../../Step';
import { __DEFAULT_STEP_INDEX__, __DEFAULT_STEP_STATUS__ } from '../constants';
import type { StepContext as StepContextType, StepElement } from '../types';

import { useStepResponsiveValues } from '.';

const useStepContext = <Element extends StepElement>() => {
	const {
		id,
		index = __DEFAULT_STEP_INDEX__,
		status: statusProp = __DEFAULT_STEP_STATUS__
	} = useContext<StepContextType<Element>>(StepContext);

	const { status } = useStepResponsiveValues<Element>({ status: statusProp });

	return { id, index, status };
};

export default useStepContext;
