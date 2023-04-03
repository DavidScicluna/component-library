import { merge } from 'lodash';
import memoize from 'memoizee';

import { color as defaultColor, colorMode as defaultColorMode } from '../../../../common/data/defaultPropValues';
import { status as defaultStatus } from '../../components/Step/common/data/defaultPropValues';

import dark from './dark';
import disabled from './disabled';
import light from './light';
import step from './step';
import { StepStyleProps, StepStyleReturn } from './types';

export default memoize((props: StepStyleProps): StepStyleReturn => {
	const { theme, color = defaultColor, colorMode = defaultColorMode, status = defaultStatus } = props;

	const scheme = colorMode === 'light' ? light : dark;

	return {
		step: merge(step({ theme, status }), scheme({ theme, color, status })),
		disabled: disabled()
	};
});
