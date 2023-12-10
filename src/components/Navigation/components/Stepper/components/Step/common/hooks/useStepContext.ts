import { useContext } from 'react';

import { StepContext } from '../../Step';
import { __DEFAULT_STEP_INDEX__, __DEFAULT_STEP_STATUS__ } from '../constants';
import type { StepContext as StepContextType } from '../types';

import { useStepResponsiveValues } from '.';

const useStepContext = () => {
	const {
		id,
		index = __DEFAULT_STEP_INDEX__,
		status: statusProp = __DEFAULT_STEP_STATUS__
	} = useContext<StepContextType>(StepContext);

	const { status } = useStepResponsiveValues({ status: statusProp });

	return { id, index, status };
};

export default useStepContext;
