import { memoize, merge } from 'lodash';

import checkbox from './checkbox';
import dark from './dark';
import disabled from './disabled';
import group from './group';
import light from './light';
import readOnly from './readOnly';
import { CheckboxStyleProps, CheckboxStyleReturn } from './types';

import {
	colorMode as defaultColorMode,
	isChecked as defaultIsChecked,
	isError as defaultIsError,
	isSuccess as defaultIsSuccess,
	isWarning as defaultIsWarning,
	isFullWidth as defaultIsFullWidth,
	size as defaultSize,
	variant as defaultVariant
} from '../data/defaultPropValues';

export default memoize((props: CheckboxStyleProps): CheckboxStyleReturn => {
	const {
		theme,
		color,
		colorMode = defaultColorMode,
		isChecked = defaultIsChecked,
		isError = defaultIsError,
		isSuccess = defaultIsSuccess,
		isWarning = defaultIsWarning,
		isFullWidth = defaultIsFullWidth,
		size = defaultSize,
		variant = defaultVariant
	} = props;

	const scheme = colorMode === 'light' ? light : dark;

	return {
		group: merge(
			group({ theme, isFullWidth, size }),
			scheme.group[variant]({ theme, isError, isSuccess, isWarning })
		),
		checkbox: checkbox({ theme, size }),
		checked: scheme.checked[variant]({
			theme,
			color,
			isError,
			isSuccess,
			isWarning
		}),
		disabled: merge(disabled(), scheme.disabled[variant]({ theme })),
		readOnly: merge(readOnly(), scheme.readOnly[variant]({ theme, isChecked }))
	};
});
