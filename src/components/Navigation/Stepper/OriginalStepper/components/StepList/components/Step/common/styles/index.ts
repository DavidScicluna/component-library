import memoize from 'micro-memoize';

import { isConsecutively as defaultIsConsecutively } from '../../../../../../../common/default/props';
import { isSelected as defaultIsSelected } from '../default/props';

import active from './active';
import disabled from './disabled';
import step from './step';
import { StepStyleProps, StepStyleReturn } from './types';

export default memoize((props: StepStyleProps): StepStyleReturn => {
	const { theme, isConsecutively = defaultIsConsecutively, isSelected = defaultIsSelected } = props;

	return {
		step: step({ theme }),
		active: isConsecutively || isSelected ? active() : {},
		disabled: disabled()
	};
});
